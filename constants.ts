
import { BlogPost, CarouselSlide, Service } from './types';

export const NAV_LINKS = [
  { name: 'Úvod', path: '/' },
  { name: 'Profil', path: '/#profil' },
  { name: 'Služby', path: '/#sluzby' },
  { name: 'Ceník', path: '/#cenik' },
  { name: 'Historie', path: '/#historie' },
  { name: 'Blog', path: '/blog' },
  { name: 'Kontakt', path: '/#kontakt' },
];

export const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: "Advokátní kancelář Mgr. Ing. Jiří Hora",
    subtitle: "Profesionální právní služby v Brně. Důvěra, diskrétnost a individuální přístup.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80", 
    ctaText: "O kanceláři",
    ctaLink: "#profil"
    // No serviceId here, just scroll to profile
  },
  {
    id: 2,
    title: "Nemovitosti",
    subtitle: "Komplexní servis při převodech nemovitostí, nájmech a katastrálním řízení.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80", 
    ctaText: "Detail služby",
    ctaLink: "#sluzby",
    serviceId: "real" 
  },
  {
    id: 3,
    title: "Korporační právo",
    subtitle: "Zakládání s.r.o. a a.s., změny v obchodním rejstříku a správa společností.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80", 
    ctaText: "Více informací",
    ctaLink: "#sluzby",
    serviceId: "corp" 
  },
  {
    id: 4,
    title: "Rodinné právo",
    subtitle: "Citlivé řešení rozvodů, úpravy poměrů k dětem a vypořádání majetku.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1920&q=80", 
    ctaText: "Zjistit více",
    ctaLink: "#sluzby",
    serviceId: "fam" 
  },
  {
    id: 5,
    title: "Trestní právo",
    subtitle: "Odborná obhajoba v trestním řízení a zastupování poškozených.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80", 
    ctaText: "Detail služby",
    ctaLink: "#sluzby",
    serviceId: "crim" 
  },
  {
    id: 6,
    title: "Advokátní úschovy",
    subtitle: "Bezpečné uložení peněžních prostředků a listin dle advokátního tarifu.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=80", 
    ctaText: "Více o službě",
    ctaLink: "#sluzby",
    serviceId: "storage" 
  }
];

export const SERVICES: Service[] = [
  {
    id: 'civ',
    title: 'Občanské právo',
    description: 'Smlouvy, náhrady škody, dědické řízení, vymáhání pohledávek a zastupování v civilním řízení.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Občanskoprávní smlouvy a nároky z nich vzniklé (nájemní smlouva, smlouva kupní a o dílo, darovací smlouva, spotřebitelské smlouvy, smlouva o půjčce, příkazní smlouva, smlouva o přepravě, pojistná smlouva apod.)</li>
        <li>Dědické řízení a nároky z něj vzniklé</li>
        <li>Poradenství ve věci vymáhání pohledávek (smlouvy o postoupení pohledávky, smlouvy o převzetí dluhu, smlouvy o zajišťovacím převodu práva apod., žaloby na zaplacení pohledávky)</li>
        <li>Vymáhání pohledávek vzniklých z občanskoprávních vztahů</li>
        <li>Zastupování klientů v soudním a exekučním řízení</li>
        <li>Vyřizování sporné i nesporné agendy (zastupování klientů před soudem v civilním řízení)</li>
      </ul>
    `,
    icon: 'fa-scale-balanced',
    image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'real',
    title: 'Nemovitosti',
    description: 'Převody nemovitostí, prověření původu, věcná břemena, zástavní práva a katastrální řízení.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Komplexní poradenský servis ve věcech převodu nemovitostí, zastupování před katastrálním úřadem</li>
        <li>Smluvní převody nemovitostí (kupní, darovací, směnná smlouva apod.)</li>
        <li>Prověření původu nemovitostí před realizací převodu</li>
        <li>Nájemní a podnájemní vztahy spojené s nemovitostmi</li>
        <li>Věcná břemena, zástavní a předkupní právo a spory s nimi související</li>
        <li>Kompletní právní servis při výstavbě a následném prodeji nemovitostí</li>
        <li>Problematika vkladu nemovitosti jako nepeněžitého vkladu do základního kapitálu obchodních společností</li>
        <li>Spoluvlastnické vztahy k nemovitostem (podílové spoluvlastnictví a jeho vypořádání, nemovitosti ve společném jmění manželů)</li>
        <li>Zastupování klientů v řízení před katastrálními úřady</li>
        <li>Zastupování klientů v územním, stavebním a kolaudačním řízení</li>
      </ul>
    `,
    icon: 'fa-home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'com',
    title: 'Obchodní právo',
    description: 'Obchodní smlouvy, vymáhání pohledávek, nekalá soutěž a zastupování v obchodních sporech.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Obchodněprávní smlouvy a nároky z nich vzniklé (kupní smlouva, o dílo, o úvěru, mandátní, smlouva o obchodním zastoupení, konkurenční doložky atd.)</li>
        <li>Vymáhání pohledávek vzniklých z obchodních závazkových vztahů</li>
        <li>Náhrada škody v souvislosti s obchodněprávními vztahy</li>
        <li>Ochrana hospodářská soutěže</li>
        <li>Nekalá soutěž</li>
        <li>Zastupování klientů v soudním, rozhodčím a exekučním řízení</li>
      </ul>
    `,
    icon: 'fa-briefcase',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'corp',
    title: 'Korporační právo',
    description: 'Zakládání společností, změny základního kapitálu, valné hromady, převody podílů.',
    fullDescription: `
      <h3>Právo obchodních společností</h3>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Zakládání a změny obchodních společností</li>
        <li>Zvyšování a snižování základního kapitálu</li>
        <li>Dispozice s obchodními podíly, členskými právy a akciemi</li>
        <li>Zastupování na valných hromadách</li>
        <li>Změna právních forem obchodních společností</li>
        <li>Převody a nájmy podniku</li>
        <li>Zastupování klientů v řízeních u obchodního rejstříku</li>
        <li>Družstva a jejich vnitřní vztahy včetně družstev bytových</li>
      </ul>
    `,
    icon: 'fa-building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fam',
    title: 'Rodinné právo',
    description: 'Rozvody, společné jmění manželů, úprava poměrů k dětem a vyživovací povinnost.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Rozvod manželství včetně tzv. „smluveného" rozvodu</li>
        <li>Společné jmění manželů (změna rozsahu, vypořádání)</li>
        <li>Úprava poměrů nezletilých dětí pro dobu před a po rozvodu manželství</li>
        <li>Vyživovací povinnosti (výživné dětí, výživné mezi manželi, výživné a úhrada nákladů neprovdané matky, výživné rodičů)</li>
        <li>Zastupování klientů v rozvodovém řízení</li>
      </ul>
    `,
    icon: 'fa-users',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'crim',
    title: 'Trestní právo',
    description: 'Obhajoba v trestním řízení, zastupování poškozených, řešení hospodářské kriminality.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Poskytováním právních porad včetně následného ověřování právního postavení klienta</li>
        <li>Vypracování písemných podání orgánům činným v trestním řízení</li>
        <li>Zastupování obviněných v přípravném řízení</li>
        <li>Obhajoba obžalovaných v trestním řízení před soudy všech stupňů</li>
        <li>Alternativní způsoby ukončení trestního řízení</li>
        <li>Uplatňování a vymáhání nároků poškozených a zúčastněných osob</li>
        <li>Problematika mladistvých v trestním řízení</li>
        <li>Zastupování proti státu s nároky na náhradu škody</li>
      </ul>
    `,
    icon: 'fa-gavel',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'admin',
    title: 'Správní právo',
    description: 'Správní soudnictví, stavební právo, přestupkové řízení, živnostenské právo a azyl.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Správní soudnictví - zastupování v řízeních před správními soudy všech stupňů</li>
        <li>Žaloby proti rozhodnutím správních orgánů, ochrana proti nečinnosti a nezákonnými zásahy správních orgánů</li>
        <li>Přestupkové právo včetně zastupování v přestupkovém řízení</li>
        <li>Katastr nemovitostí – vklady, zápisy a výmazy práv, zastupování v katastrálním řízení</li>
        <li>Stavební právo včetně zastupování v územním, stavebním a kolaudačním řízení</li>
        <li>Živnostenské právo včetně zastupování ve věcech podle živnostenského zákona</li>
        <li>Problematika daní a poplatků</li>
        <li>Problematika spojená s výkonem rozhodnutí správních orgánů</li>
        <li>Veřejné zakázky</li>
        <li>Trvalý pobyt pro cizince</li>
        <li>Azyl</li>
      </ul>
    `,
    icon: 'fa-landmark',
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'coop',
    title: 'Bytová družstva',
    description: 'Zakládání družstev, stanovy, převody bytů do osobního vlastnictví, SVJ.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Komplexní právní servis při zakládání bytových družstev</li>
        <li>Právní pomoc při tvorbě a změnách stanov bytových družstev, domovního řádu a dalších vnitrodružstevních předpisů</li>
        <li>Právní pomoc při řešení porušování členských práv povinností včetně vyloučení člena družstva</li>
        <li>Zastupování klientů před soudem</li>
        <li>Převody bytových jednotek do osobního vlastnictví členů bytového družstva</li>
        <li>Právní servis při vzniku společenství vlastníků bytových jednotek</li>
      </ul>
    `,
    icon: 'fa-city',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'lab',
    title: 'Pracovní právo',
    description: 'Pracovní smlouvy, skončení pracovního poměru, mzdové nároky a odstupné.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Poradenství ve věci uzavření, změny a skončení pracovního poměru (pracovní smlouvy, dohody o hmotné odpovědnosti, dohody o pracovní činnosti, dohody o provedení práce)</li>
        <li>Problematika mezd a odstupného</li>
      </ul>
    `,
    icon: 'fa-hard-hat',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'insol',
    title: 'Konkurzní právo',
    description: 'Přihlášky pohledávek, návrhy na prohlášení konkurzu, insolvenční řízení.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Podávání přihlášek pohledávek do konkurzního řízení</li>
        <li>Sepisování návrhů na prohlášení konkurzu na dlužníka</li>
      </ul>
    `,
    icon: 'fa-file-invoice-dollar',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bills',
    title: 'Směnečné právo',
    description: 'Vystavování a převody směnek, směnečné rozkazy a vymáhání plnění.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Právní poradenství v oblasti směnek (vystavování směnek, převody směnek, inkaso směnek, posuzování vymahatelnosti směnek, biankosměnky a dohody o vyplňovacím právu směnečném)</li>
        <li>Zastupování klientů před soudy ve směnečném řízení</li>
        <li>Vymáhání plnění ze směnek</li>
      </ul>
    `,
    icon: 'fa-money-bill-wave',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'traffic',
    title: 'Dopravní nehody',
    description: 'Trestněprávní obhajoba, řešení přestupků a náhrada škody.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Trestněprávní aspekty, obhajoba</li>
        <li>Přestupky</li>
        <li>Náhrada škody</li>
      </ul>
    `,
    icon: 'fa-car-crash',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'storage',
    title: 'Advokátní úschovy',
    description: 'Bezpečná úschova peněz, cenných papírů a listin dle tarifu.',
    fullDescription: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Úschova peněz</li>
        <li>Úschova cenných papírů</li>
        <li>Úschova jiných cenností</li>
      </ul>
      <p class="mt-4 italic">Cena za advokátní úschovy závisí na výši uschované částky. Viz sekce Ceník.</p>
    `,
    icon: 'fa-vault',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sign',
    title: 'Ověřování podpisů',
    description: 'Ověřování pravosti podpisů na listinách (legalizace).',
    fullDescription: `
      <p>Ověřování pravosti podpisů poskytujeme dle aktuálního ceníku.</p>
      <p class="mt-2">Možnost ověření i mimo sídlo kanceláře nebo mimo pracovní dobu (za příplatek).</p>
    `,
    icon: 'fa-pen-fancy',
    image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sro',
    title: 'Založení s.r.o.',
    description: 'Komplexní servis při zakládání společností s ručením omezeným.',
    fullDescription: `
      <p>Poskytujeme komplexní právní servis při zakládání společností s ručením omezeným.</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Příprava společenské smlouvy / zakladatelské listiny</li>
        <li>Zajištění živnostenských oprávnění</li>
        <li>Návrh na zápis do obchodního rejstříku</li>
      </ul>
    `,
    icon: 'fa-store',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'as',
    title: 'Založení a.s.',
    description: 'Profesionální asistence při zakládání akciových společností.',
    fullDescription: `
      <p>Poskytujeme komplexní právní servis při zakládání akciových společností.</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Příprava stanov</li>
        <li>Organizace valné hromady</li>
        <li>Zápis do obchodního rejstříku</li>
      </ul>
    `,
    icon: 'fa-chart-line',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  }
];

// Real news from docs + generated posts
const generateBlogPosts = (): BlogPost[] => {
  const realNews: BlogPost[] = [
    {
      id: 'news-1',
      title: "Úspěch provozovatele restaurace - autorské poplatky",
      excerpt: "Evropský soud bude řešit spor o poplatky za autorská práva, které jménem českých umělců vymáhá společnost Intergram.",
      content: `<h2>Úspěch provozovatele restaurace - autorské poplatky v ČR bude řešit evropský soud</h2><p>Evropský soud bude řešit spor o poplatky za autorská práva, které jménem českých umělců vymáhá po majitelích restaurací společnost Intergram. Dle ÚS není možné vyloučit negativní dopad činnosti Intergramu na hospodářskou soutěž.</p>`,
      date: "3. 1. 2012",
      author: "AK Hora",
      category: "Aktuality",
      image: "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=800&q=80" // Restaurant/Business
    },
    {
      id: 'news-2',
      title: "Ústavní soud: Odtažené auto se musí vrátit zpět řidiči",
      excerpt: "Úřady v ČR nesmí auta zadržovat, ale musí je např. po skončení čistění vozovek vrátit zpět na místa, odkud je odtáhly.",
      content: `<h2>Ústavní soud (ÚS)- "Odtažené auto se musí vrátit zpět řidiči"</h2><p>Lidé, jimž správci silnic odtáhli auto a chtějí po nich tisíce korun za parkování na záchytných parkovištích, slaví vítězství. Úřady v ČR tak dle ÚS auta nesmí zadržovat, ale musí je např. po skončení čistění vozovek vrátit zpět na místa,odkud je odtáhly.</p>`,
      date: "21. 11. 2011",
      author: "AK Hora",
      category: "Doprava",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" // Car towing
    },
    {
      id: 'news-3',
      title: "Okopírovat web konkurenci se smí. A bez placení",
      excerpt: "Zkopírovat originální webové stránky nemusí být zločin ani přestupek. Sporná webová prezentace podle ústavních soudců není autorským dílem.",
      content: `<h2>Okopírovat web konkurenci se smí. A bez placení</h2><p>Zkopírovat originální webové stránky nemusí být zločin ani přestupek.Sporná webová prezentace podle ústavních soudců není autorským dílem ve smyslu zákona."Tzn. není to jedinečný výsledek tvůrčí duševní činnosti"uvedli soudci.</p>`,
      date: "12. 10. 2009",
      author: "AK Hora",
      category: "IT Právo",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" // Laptop/Code
    },
    {
      id: 'news-4',
      title: "Soudy nemohou odsoudit nepřítomného, pokud se omluvil",
      excerpt: "Soudy nemohou odsoudit obviněného ve veřejném jednání bez jeho účasti, pokud se dotyčný řádně omluví.",
      content: `<h2>Soudy nemohou odsoudit nepřítomného, pokud se omluvil</h2><p>Soudy nemohou odsoudit obviněného ve veřejném jednání bez jeho účasti, pokud se dotyčný řádně omluví - například potvrzením od lékaře. Rozhodl tak Ústavní soud, který vyhověl ústavní stížnosti Libora Michálka z Jihlavy.</p>`,
      date: "29. 7. 2009",
      author: "AK Hora",
      category: "Trestní právo",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80" // Court
    },
    {
      id: 'news-5',
      title: "Výpověď z pracovního poměru za péči o dítě je nepřípustná",
      excerpt: "Pokud žena po rodičovské dovolené nenastoupí znovu do práce z důvodu absence školky, nemůže dostat výpověď.",
      content: `<h2>Výpověď z pracovního poměru za péči o dítě je nepřípustná</h2><p>Pokud žena po rodičovské dovolené nenastoupí znovu do práce pouze z důvodu, že nemá možnost dát dítě do školky nebo pro něj nemá hlídání, nemůže od svého zaměstnavatele dostat výpověď. Rozhodl tak Nejvyšší soud ČR.</p>`,
      date: "28. 3. 2009",
      author: "AK Hora",
      category: "Pracovní právo",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80" // Mother and child
    }
  ];

  const posts: BlogPost[] = [...realNews];
  const categories = ['Občanské právo', 'Obchodní právo', 'Nemovitosti', 'Rodina', 'Rady'];
  
  // Generate remaining 15 posts to reach 20
  const titles = [
    "Jak založit s.r.o. rychle a efektivně",
    "Odpovědnost za škodu způsobenou zaměstnancem",
    "Sousedské spory a jak je řešit právní cestou",
    "Dědické řízení: Závěť nebo zákonná posloupnost?",
    "Ochrana osobních údajů (GDPR) pro malé firmy",
    "Předmanželská smlouva: Tabu nebo nutnost?",
    "Reklamace zboží: Vaše práva jako spotřebitele",
    "Trestní odpovědnost právnických osob",
    "Nájemní smlouva na byt: Na co si dát pozor",
    "Výživné na děti: Jak se vypočítá?",
    "Autorské právo na internetu",
    "Likvidace společnosti krok za krokem",
    "Pracovní úraz a odškodnění",
    "Svěření dítěte do péče: Střídavá vs. výlučná",
    "Darování nemovitosti v rodině a daně",
    "Jak se bránit proti neoprávněné exekuci",
    "Novinky v oddlužení fyzických osob",
    "Smlouva o dílo: Nejčastější chyby"
  ];

  // Images for generated posts (specific mapping to avoid repetition)
  const genImages = [
    "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&q=80", // 1. SRO
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80", // 2. Odpovednost (conflict)
    "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80", // 3. Sousedske (fence)
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80", // 4. Dedictvi (court/law)
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80", // 5. GDPR (data)
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80", // 6. Prenup (rings)
    "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80", // 7. Consumer (pay)
    "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80", // 8. Criminal (Justitia statue)
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80", // 9. Rent (keys)
    "https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=800&q=80", // 10. Alimony (child)
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", // 11. Copyright (web)
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80", // 12. Liquidation (empty office)
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", // 13. Injury (medical)
    "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=800&q=80", // 14. Custody (kids)
    "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80", // 15. Donation (gift)
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80", // 16. Exekuce (calc/money)
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80", // 17. Debt
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80", // 18. Contract
  ];

  const baseContent = `
    <p>Vážení klienti,</p>
    <p>V tomto článku se podrobně zaměříme na aktuální problematiku. Právo je dynamický obor a orientace v něm může být pro laika složitá.</p>
    <h3>Hlavní aspekty</h3>
    <p>Základem úspěšného řešení je včasná konzultace s odborníkem. V naší advokátní kanceláři AK Hora přistupujeme ke každému případu individuálně.</p>
    <ul>
      <li>Analýza problému</li>
      <li>Návrh řešení</li>
      <li>Zastoupení před úřady</li>
    </ul>
    <p>Neváhejte nás kontaktovat pro sjednání osobní schůzky.</p>
  `;

  for(let i = 0; i < 15; i++) {
    if(i < titles.length) {
        posts.push({
            id: `post-gen-${i}`,
            title: titles[i],
            excerpt: `Přečtěte si klíčové informace o tématu "${titles[i]}". Přinášíme praktické rady.`,
            content: `<h2>${titles[i]}</h2>${baseContent}`,
            date: new Date(2024, i % 12, (i * 2) + 1).toLocaleDateString('cs-CZ'),
            author: "Mgr. Ing. Jiří Hora",
            category: categories[i % categories.length],
            image: genImages[i % genImages.length]
        });
    }
  }

  return posts;
};

export const BLOG_POSTS = generateBlogPosts();
