import React, { useEffect } from 'react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative animate-in zoom-in-95 duration-300 flex flex-col cursor-pointer">
        
        {/* Header / Image */}
        <div className="relative h-48 sm:h-64 shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white text-white hover:text-brand-dark w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
            <div className="flex items-center space-x-3 mb-2">
               <div className="bg-brand-gold p-2 rounded text-white">
                 <i className={`fas ${service.icon}`}></i>
               </div>
               <h2 className="text-2xl sm:text-3xl font-serif font-bold shadow-sm">{service.title}</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-gray-700 leading-relaxed text-lg">
           <div 
             className="prose prose-slate max-w-none prose-a:text-brand-blue prose-headings:font-serif prose-li:marker:text-brand-gold" 
             dangerouslySetInnerHTML={{ __html: service.fullDescription }} 
           />
           
           <div className="mt-10 pt-6 border-t border-gray-100">
             <p className="text-sm text-gray-500 mb-4">Potřebujete poradit v této oblasti?</p>
             <div className="flex justify-between items-center">
                <a href="/#kontakt" onClick={onClose} className="inline-block bg-brand-dark text-white px-6 py-3 rounded hover:bg-brand-gold transition-colors uppercase tracking-wider text-sm font-medium">
                Kontaktovat kancelář
                </a>
                <span className="text-gray-400 italic text-sm hidden sm:inline">Kliknutím zavřete</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceModal;