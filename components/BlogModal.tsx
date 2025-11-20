import React, { useEffect } from 'react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative animate-in zoom-in-95 duration-300 cursor-pointer">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-brand-gold hover:text-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md"
        >
          <i className="fas fa-times text-lg"></i>
        </button>

        {/* Content */}
        <div>
          <div className="h-64 sm:h-80 relative">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
               <span className="inline-block bg-brand-gold text-white text-xs px-2 py-1 rounded mb-2 uppercase tracking-wide font-bold">
                {post.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {post.title}
              </h2>
              <div className="text-gray-200 text-sm mt-2 flex items-center space-x-4">
                <span><i className="far fa-calendar-alt mr-1"></i> {post.date}</span>
                <span><i className="far fa-user mr-1"></i> {post.author}</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 sm:p-10 text-gray-800 leading-relaxed text-lg">
            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose prose-slate max-w-none" />
            
            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
                <span className="text-gray-500 italic">Kliknutím zavřete detail.</span>
                <button 
                    onClick={onClose}
                    className="text-brand-blue font-bold hover:underline"
                >
                    Zpět na výpis
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;