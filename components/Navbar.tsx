import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If we are on the home page and the link is a hash link
    if (isHome && path.startsWith('/#')) {
      e.preventDefault();
      const targetId = path.replace('/#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Calculate offset for fixed header (approx 80px)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setMobileMenuOpen(false);
    } 
    // If we are simply going to top of home
    else if (isHome && path === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileMenuOpen(false);
    }
    // Standard navigation will be handled by Link component's 'to' prop
    // but we still close the menu
    else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-brand-dark text-white shadow-lg py-3'
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center space-x-3 group">
            <div className="bg-brand-gold w-10 h-10 flex items-center justify-center rounded-sm text-brand-dark font-bold text-xl font-serif">
              AK
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wide font-bold group-hover:text-brand-gold transition-colors">
                AK HORA
              </span>
              <span className="text-xs uppercase tracking-widest opacity-80">Brno</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-sm font-medium hover:text-brand-gold transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-brand-gold focus:outline-none"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-gray-800 absolute w-full h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;