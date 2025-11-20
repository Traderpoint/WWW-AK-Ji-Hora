
import React, { useEffect, useState } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ServiceModal from '../components/ServiceModal';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { Link, useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Handle scrolling to hash when page loads or opening service from URL
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          // Calculate offset for fixed header (approx 80px)
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Check for ?service=id in URL (optional deep linking logic)
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('service');
    if (serviceId) {
        const service = SERVICES.find(s => s.id === serviceId);
        if (service) setSelectedService(service);
    }
  }, [location]);

  const handleServiceSelect = (serviceId: string) => {
      const service = SERVICES.find(s => s.id === serviceId);
      if (service) {
          setSelectedService(service);
      }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeroCarousel onServiceSelect={handleServiceSelect} />

      {/* Introduction / Profile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="profil">
        <div className="max-w-5xl mx-auto text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Vítejte</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mt-2 mb-6">
                Advokátní kancelář Mgr. Ing. Jiří Hora, Brno
            </h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Advokátní kancelář Mgr. Ing. Jiřího Hory poskytuje svým klientům komplexní právní služby v rozsahu téměř celého právního řádu České republiky. 
                Služby poskytujeme formou právních konzultací a porad, sepisováním smluv, podání, právních rozborů a jiných listin právního charakteru. 
                Zastupujeme klienty při jednáních s protistranou či obchodními partnery, jakož i v řízeních před soudy a správními orgány.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Hlavním cílem je poskytnout klientům takové služby, aby byly naplněny i nejnáročnější požadavky a byly vytvořeny podmínky pro nejlepší výkon jejich činnosti či pro řešení jejich problémů. 
                Klademe důraz na individuální přístup, dobrou informovanost klienta a zpětnou vazbu.
                Služby poskytujeme v jazyce českém i anglickém.
            </p>
        </div>

        <div className="max-w-4xl mx-auto bg-brand-light p-8 rounded-lg border-l-4 border-brand-gold shadow-sm">
             <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Profil advokáta</h3>
             <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="shrink-0">
                    <div className="w-24 h-24 bg-brand-dark flex items-center justify-center rounded-full text-brand-gold text-3xl">
                        <i className="fas fa-user-tie"></i>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-gray-900">Mgr. Ing. Jiří Hora</h4>
                    <p className="text-sm text-gray-500 mb-2">ev. č. ČAK 11662</p>
                    <p className="text-gray-600 leading-relaxed">
                        Spolupracujeme s řadou odborníků z jiných oblastí a s advokátní kanceláří Mgr. Vlastimila Šipla (www.aksipl.cz), 
                        se kterou sdílíme profesní zkušenosti. I díky této spolupráci jsme schopni poskytovat právní služby na vysoké odborné úrovni.
                    </p>
                </div>
             </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100" id="sluzby">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Co nabízíme</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mt-2">Komplexní právní služby</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="h-40 overflow-hidden relative shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-brand-gold p-2 rounded-bl-lg">
                    <i className={`fas ${service.icon} text-white text-lg`}></i>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-brand-dark font-serif mb-2 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                        {service.description}
                    </p>
                    <span className="text-brand-blue text-xs font-bold uppercase tracking-wide self-start border-b border-transparent group-hover:border-brand-blue transition-all">
                        Více informací
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees / Odměna */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="cenik">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Ceník služeb</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mt-2">Odměna advokáta</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 border-b border-gray-200 pb-2">Způsoby stanovení odměny</h3>
                    <p className="text-gray-600 mb-4">Není-li odměna dohodnuta, řídí se advokátním tarifem (vyhl. č. 177/1996 Sb.). Smluvní odměna se sjednává individuálně:</p>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <i className="fas fa-check text-brand-gold mt-1 mr-3"></i>
                            <div>
                                <strong className="block text-brand-dark">Hodinová odměna</strong>
                                <span className="text-sm">1.500 Kč - 2.500 Kč / hodinu dle náročnosti a jazyka.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check text-brand-gold mt-1 mr-3"></i>
                            <div>
                                <strong className="block text-brand-dark">Paušální odměna</strong>
                                <span className="text-sm">Pevná měsíční částka, výhodná pro pravidelné služby (předvídatelnost nákladů).</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check text-brand-gold mt-1 mr-3"></i>
                            <div>
                                <strong className="block text-brand-dark">Odměna za úkon</strong>
                                <span className="text-sm">Pevná sazba za konkrétní úkon (např. sepsání žaloby, smlouvy).</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check text-brand-gold mt-1 mr-3"></i>
                            <div>
                                <strong className="block text-brand-dark">Podílová odměna</strong>
                                <span className="text-sm">% z nároku ve věci přiznaného (success fee).</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="space-y-8">
                     <div>
                        <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 border-b border-gray-200 pb-2">Advokátní úschovy</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left text-gray-600">
                                <thead className="bg-gray-50 text-gray-900 font-bold">
                                    <tr>
                                        <th className="px-4 py-2">Uschovávaná částka</th>
                                        <th className="px-4 py-2">Odměna</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr><td className="px-4 py-2">0 - 500.000 Kč</td><td className="px-4 py-2">3.500 Kč</td></tr>
                                    <tr><td className="px-4 py-2">do 1.000.000 Kč</td><td className="px-4 py-2">4.500 Kč</td></tr>
                                    <tr><td className="px-4 py-2">do 5.000.000 Kč</td><td className="px-4 py-2">5.500 Kč</td></tr>
                                    <tr><td className="px-4 py-2">nad 5.000.000 Kč</td><td className="px-4 py-2">Smluvní</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 border-b border-gray-200 pb-2">Ověřování podpisů</h3>
                        <table className="min-w-full text-sm text-left text-gray-600">
                             <tbody className="divide-y divide-gray-100">
                                <tr><td className="px-4 py-2">Ověření 1 podpisu (běžně)</td><td className="px-4 py-2 font-bold">30 Kč</td></tr>
                                <tr><td className="px-4 py-2">Mimo sídlo kanceláře</td><td className="px-4 py-2 font-bold">500 Kč</td></tr>
                                <tr><td className="px-4 py-2">Mimo provozní dobu</td><td className="px-4 py-2 font-bold">300 Kč</td></tr>
                             </tbody>
                        </table>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-dark text-gray-300" id="historie">
        <div className="max-w-5xl mx-auto">
             <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                     <h2 className="text-3xl font-serif font-bold text-white">Z historie advokacie</h2>
                     <div className="w-16 h-1 bg-brand-gold mt-4"></div>
                </div>
                <div className="md:w-2/3">
                     <p className="italic text-gray-400">
                        "Advokacie v českých zemích má hlubokou tradici, sahající až k roku 1348 a založení Karlovy univerzity. 
                        Prošla vývojem od středověkých řečníků, přes rakouský Advokátní řád z roku 1868, který definoval advokacii jako svobodné povolání, 
                        až po moderní zákon o advokacii z roku 1996."
                     </p>
                </div>
             </div>
             
             <details className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/10 transition-colors">
                    <span className="font-bold text-white">Přečíst celou historii advokacie v českých zemích</span>
                    <span className="text-brand-gold group-open:rotate-180 transition-transform"><i className="fas fa-chevron-down"></i></span>
                </summary>
                <div className="p-6 border-t border-white/10 text-sm leading-relaxed space-y-4 text-justify">
                    <p>
                        Stručná rekapitulace dějin advokacie v českých zemích se neobejde bez připomenutí nejvýznamnějších etap dějin státu a práva ve střední Evropě. 
                        Významným mezníkem bylo přijetí nového Advokátního řádu v roce 1868. Advokacie byla tímto právním předpisem koncipována jako svobodné a nezávislé povolání, byl odstraněn numerus clausus a byly zřízeny samosprávné advokátní komory, mj. s disciplinární pravomocí v první instanci.
                    </p>
                    <p>
                        Po vzniku Československa v roce 1918 se advokáti valnou měrou podíleli na budování státu (např. Alois Rašín). 
                        Rok 1918 také otevřel právnické fakulty ženám. První českou advokátkou se stala Matylda Mocová-Wíchová.
                        Na konci první republiky měla moderní advokacie již vybudovanou tradici.
                    </p>
                    <p>
                        Po roce 1948 soukromé praxe zanikly. Teprve rok 1989 přinesl návrat k osvědčeným hodnotám. Zákon č. 85/1996 Sb. dnes upravuje výkon advokacie v mezích evropského standardu.
                    </p>
                </div>
             </details>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">Aktuality a Právo</h2>
            <p className="text-gray-600 mb-10">
                Nahlédněte do našeho blogu, kde naleznete archiv novinek i aktuální právní rady.
            </p>
            <Link to="/blog" className="inline-block border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold py-3 px-8 rounded transition-all duration-300 uppercase tracking-wider">
                Přejít na Blog
            </Link>
         </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="kontakt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">Kontaktujte nás</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* 1. Contact Details */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-6">Advokátní kancelář Mgr. Ing. Jiří Hora</h3>
                <div className="space-y-6 flex-grow">
                    <div className="flex items-start space-x-4">
                        <div className="bg-brand-light p-3 rounded-full text-brand-gold shrink-0">
                            <i className="fas fa-map-marker-alt text-xl"></i>
                        </div>
                        <div>
                        <h4 className="font-bold text-gray-900">Sídlo kanceláře</h4>
                        <p className="text-gray-600">Moravské náměstí 15<br/>602 00 Brno</p>
                        <p className="text-xs text-gray-400 mt-1">GPS: 49°12'0.677"N, 16°36'26.55"E</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-brand-light p-3 rounded-full text-brand-gold shrink-0">
                            <i className="fas fa-phone text-xl"></i>
                        </div>
                        <div>
                        <h4 className="font-bold text-gray-900">Telefonické spojení</h4>
                        <p className="text-gray-600"><span className="font-medium text-gray-800">Tel./fax:</span> +420 545 216 353</p>
                        <p className="text-gray-600"><span className="font-medium text-gray-800">Mob.:</span> +420 731 908 840</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-brand-light p-3 rounded-full text-brand-gold shrink-0">
                            <i className="fas fa-envelope text-xl"></i>
                        </div>
                        <div>
                        <h4 className="font-bold text-gray-900">Email</h4>
                        <a href="mailto:hora@akhora.cz" className="text-brand-gold hover:underline block">hora@akhora.cz</a>
                        <a href="mailto:advokat.hora@gmail.com" className="text-brand-gold hover:underline block">advokat.hora@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-brand-light p-3 rounded-full text-brand-gold shrink-0">
                            <i className="fas fa-university text-xl"></i>
                        </div>
                        <div>
                        <h4 className="font-bold text-gray-900">Bankovní spojení</h4>
                        <p className="text-gray-600">UniCredit Bank Czech Republic a.s.</p>
                        <p className="text-gray-600 font-mono">č.ú. 523042 007/2700</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
                <form className="space-y-4 flex-grow flex flex-col" onSubmit={(e) => e.preventDefault()}>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Napište nám</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Jméno</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="Jan Novák" />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="jan@example.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Předmět</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none">
                            <option>Obecný dotaz</option>
                            <option>Právní poradna on-line</option>
                            <option>Poptávka služeb</option>
                            <option>Ověření podpisu</option>
                        </select>
                    </div>
                    <div className="flex-grow">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Zpráva</label>
                        <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none h-full min-h-[120px]" placeholder="Popište stručně Váš problém..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-gold hover:bg-amber-500 text-white font-bold py-3 rounded transition-colors uppercase tracking-wider shadow-md mt-4">
                        Odeslat zprávu
                    </button>
                </form>
            </div>

            {/* 3. Map - Bottom Left */}
            <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-gray-200 min-h-[300px] relative h-full">
                <iframe 
                    src="https://maps.google.com/maps?q=Moravské+náměstí+15,+602+00+Brno&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen 
                    loading="lazy"
                    title="Mapa sídla AK Hora"
                ></iframe>
            </div>

            {/* 4. Online Advice Promo - Bottom Right */}
            <div className="bg-brand-blue/10 p-8 rounded border border-brand-blue/20 h-full flex flex-col justify-center items-center text-center">
                 <div className="mb-4 text-brand-blue bg-white p-4 rounded-full shadow-sm">
                    <i className="fas fa-laptop-house text-3xl"></i>
                 </div>
                 <h4 className="text-brand-blue font-bold text-xl mb-3">Právní poradna on-line</h4>
                 <p className="text-gray-700 leading-relaxed">
                    Využijete-li elektronickou komunikaci, jsme schopni poskytovat právní porady za nižší ceny. 
                    Pošlete nám Váš dotaz, navrhneme cenu a po úhradě Vám zašleme odbornou odpověď.
                 </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Modals */}
      {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
};

export default Home;
