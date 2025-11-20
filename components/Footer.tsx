
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-gold w-8 h-8 flex items-center justify-center rounded-sm text-brand-dark font-bold font-serif">
                AK
              </div>
              <span className="font-serif text-xl text-white font-bold">AK HORA</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Advokátní kancelář Mgr. Ing. Jiří Hora, Brno. Poskytujeme komplexní právní služby. Důvěra, diskrétnost a profesionalita jsou našimi základními pilíři.
            </p>
            
            {/* Social Media Icons - Visual Only (No Links) */}
            <div className="flex space-x-4">
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-white transition-all duration-300 cursor-default">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-white transition-all duration-300 cursor-default">
                <i className="fab fa-linkedin-in"></i>
              </span>
              <span className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-white transition-all duration-300 cursor-default">
                <i className="fab fa-twitter"></i>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Domů</Link></li>
              <li><Link to="/#sluzby" className="hover:text-brand-gold transition-colors">Služby</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Právní blog</Link></li>
              <li><Link to="/#kontakt" className="hover:text-brand-gold transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4">Služby</h4>
            <ul className="space-y-2 text-sm">
              <li>Obchodní právo</li>
              <li>Občanské právo</li>
              <li>Rodinné právo</li>
              <li>Nemovitosti</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-brand-gold"></i>
                <span>Moravské náměstí 15, 602 00 Brno</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone mt-1 text-brand-gold"></i>
                <div className="flex flex-col">
                  <span>+420 545 216 353</span>
                  <span>+420 731 908 840</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-brand-gold"></i>
                <span>hora@akhora.cz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Advokátní kancelář Mgr. Ing. Jiří Hora. Všechna práva vyhrazena.</p>
          <p className="mt-2 md:mt-0">Designed based on akhora.cz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
