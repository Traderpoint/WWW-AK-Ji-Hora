
import React, { useState, useMemo, useRef } from 'react';
import { BLOG_POSTS } from '../constants';
import BlogModal from '../components/BlogModal';
import SEO from '../components/SEO';
import { BlogPost } from '../types';

const ITEMS_PER_SLIDE = 6; // 3 columns x 2 rows

// Helper to convert Czech date string (3. 1. 2012) to ISO format (2012-01-03) for Schema.org
const parseDateToISO = (dateStr: string): string => {
  try {
    const parts = dateStr.split('.').map(p => p.trim());
    if (parts.length !== 3) return new Date().toISOString();
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${year}-${month}-${day}`;
  } catch (e) {
    return new Date().toISOString();
  }
};

const Blog: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Všechny');
  
  // Swipe/Drag State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // 1. Extract unique categories
  const categories = useMemo(() => {
    const uniqueCats = new Set(BLOG_POSTS.map(post => post.category));
    return ['Všechny', ...Array.from(uniqueCats)];
  }, []);

  // 2. Filter posts based on selection
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'Všechny') return BLOG_POSTS;
    return BLOG_POSTS.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  // 3. Calculate pagination based on filtered results
  const totalSlides = Math.ceil(filteredPosts.length / ITEMS_PER_SLIDE);
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentSlide(0); // Reset to first page on filter change
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Get current items from filtered list
  const startIndex = currentSlide * ITEMS_PER_SLIDE;
  const currentItems = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_SLIDE);

  // --- Swipe / Drag Handlers ---
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Mouse Drag support
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
    setDragOffset(0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - (touchStart || 0);
    setDragOffset(diff); // Visual feedback
    setTouchEnd(currentX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragOffset(0);
    
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  // --- SEO Logic ---
  const getSEOProps = () => {
    const url = `${window.location.origin}/#/blog`;
    const defaultImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80";

    if (selectedPost) {
      return {
        title: selectedPost.title,
        description: selectedPost.excerpt,
        keywords: `právo, ${selectedPost.category}, AK Hora, blog, ${selectedPost.title.split(' ').slice(0, 3).join(', ')}`,
        image: selectedPost.image,
        url: `${url}?post=${selectedPost.id}`,
        type: 'article' as const,
        schema: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": selectedPost.title,
          "image": [selectedPost.image],
          "datePublished": parseDateToISO(selectedPost.date),
          "author": {
            "@type": "Person",
            "name": selectedPost.author || "Mgr. Ing. Jiří Hora"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Advokátní kancelář Mgr. Ing. Jiří Hora",
            "logo": {
              "@type": "ImageObject",
              "url": "http://www.akhora.cz/logo.png"
            }
          },
          "description": selectedPost.excerpt,
          "articleBody": selectedPost.content.replace(/<[^>]*>?/gm, '')
        }
      };
    } else {
      return {
        title: selectedCategory === 'Všechny' ? "Právní Blog" : `Právní Blog - ${selectedCategory}`,
        description: "Aktuální informace ze světa práva, rady a komentáře k legislativnímu dění od AK Hora Brno.",
        keywords: "právní blog, novinky v právu, advokátní kancelář blog, právní rady Brno",
        image: defaultImage,
        url: url,
        type: 'website' as const,
        schema: {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Právní Blog AK Hora",
          "description": "Aktuální informace, rady a komentáře k legislativnímu dění.",
          "url": window.location.href,
          "blogPost": currentItems.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": parseDateToISO(post.date),
            "url": `${window.location.origin}/#/blog`
          }))
        }
      };
    }
  };

  const seoData = getSEOProps();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 overflow-x-hidden">
      <SEO {...seoData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Právní Blog</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aktuální informace, rady a komentáře k legislativnímu dění.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
           <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
             {categories.map((cat) => (
               <button
                 key={cat}
                 onClick={() => handleCategoryChange(cat)}
                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                   selectedCategory === cat
                     ? 'bg-brand-gold text-white border-brand-gold shadow-md'
                     : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {/* Controls Top */}
        {filteredPosts.length > 0 ? (
          <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
            <span>Strana {currentSlide + 1} z {totalSlides}</span>
            <div className="space-x-2 hidden md:block">
              <button 
                  onClick={prevSlide} 
                  className="px-4 py-2 rounded border hover:bg-white disabled:opacity-50 transition-colors"
                  disabled={currentSlide === 0}
              >
                  <i className="fas fa-chevron-left"></i> Předchozí
              </button>
              <button 
                  onClick={nextSlide} 
                  className="px-4 py-2 rounded border hover:bg-white disabled:opacity-50 transition-colors"
                  disabled={currentSlide === totalSlides - 1}
              >
                  Další <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="md:hidden text-xs italic">
               <i className="fas fa-hand-pointer mr-1"></i> Posouváním do stran listujte
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 italic">
            Pro vybranou kategorii nebyly nalezeny žádné články.
          </div>
        )}

        {/* Grid Container with Swipe/Drag Handlers */}
        <div 
          className="relative min-h-[600px] select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isDragging ? '' : 'transition-transform duration-300 ease-out'}`}
            style={{ transform: `translateX(${dragOffset}px)` }}
            key={currentSlide + selectedCategory} // Force re-render animation on change
          >
             {currentItems.map((post, index) => (
              <div 
                key={post.id} 
                onClick={() => !isDragging && Math.abs(dragOffset) < 5 && setSelectedPost(post)} // Prevent click during drag
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative pointer-events-none">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 pointer-events-none">
                  <div className="text-xs text-gray-400 mb-2 flex items-center">
                    <i className="far fa-calendar-alt mr-2"></i> {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark font-serif mb-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-brand-blue font-medium text-sm group-hover:underline">
                    Číst více
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center space-x-2 mt-12">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                      key={idx}
                      onClick={() => {
                          setCurrentSlide(idx);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-brand-gold w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                  />
              ))}
          </div>
        )}

      </div>

      {/* Modal */}
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default Blog;
