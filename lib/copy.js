// lib/copy.js
// Única fuente de copy de la landing. Cero texto debe vivir en componentes.
export const copy = {
  metadata: {
    title: "+500 de Rețete pentru Gustări de Pub",
    description:
      "Gustări crocante, rapide și ușor de făcut acasă. Peste 500 de rețete + 3 bonusuri exclusive. Acces imediat.",
  },

  promoBar: {
    text: "Această ofertă expiră astăzi:",
    icon: "Flame",
  },

  hero: {
    eyebrow: "Ediție Specială · Acces Imediat",
    titleEmoji: "🍻",
    headline: "Peste 500 de Rețete pentru Gustări Ca la Pub!",
    subheadline: "Pentru serile tale de relaxare și răsfăț suprem, tot anul.",
    paragraphPrefix: "Gata cu aceleași",
    paragraphHighlight:
      "ronțăieli fade și plictisitoare. Dă-le un upgrade chiar azi cu cartea noastră!",
    imageAlt: "Coperta e-book-ului Peste 500 de Rețete",
    badge: "Acces pe viață",
    regularPriceLabel: "De la",
    regularPrice: "485 Lei",
    offerPrefix: "doar",
    offerPrice: "35 Lei",
    cta: "VREAU REȚETELE!",
    stats: [
      { value: "500+", label: "Rețete exclusive" },
      { value: "3", label: "Bonusuri cadou" },
      { value: "100%", label: "Acces digital" },
    ],
  },

  benefits: {
    eyebrow: "De ce o să te cucerească din prima",
    headline: "Prin ce este unică această colecție",
    items: [
      { title: "Peste 500 de gustări de pub, clasice și moderne", icon: "BookOpen" },
      { title: "O diversitate uriașă de rețete pentru poftele oricui", icon: "Sparkles" },
      { title: "Preparate rapide, crocante și fără bătăi de cap", icon: "Zap" },
      { title: "Idei perfecte pentru musafiri, petreceri și seri pe canapea", icon: "Users" },
      { title: "Variante mai sănătoase, fără ulei, special pentru Airfryer", icon: "Wind" },
      { title: "Ingrediente accesibile, pe care probabil le ai deja prin casă", icon: "Carrot" },
      { title: "Acces instant online sau format gata de printat", icon: "Printer" },
    ],
  },

  carouselSection: {
    eyebrow: "Trage cu ochiul înăuntru",
    headline: "Gustări crocante și rapide – direct la tine în bucătărie.",
    paragraph1:
      "Această carte digitală rezolvă odată pentru totdeauna problema gustărilor obosite, scumpe și greu de preparat.",
    paragraph2:
      "Cu peste 500 de rețete de pub, vei învăța să prepari clasice irezistibile, combinații crocante și sosuri care dau dependență. Am inclus și versiuni fără ulei la Airfryer, pentru cei care iubesc gustul autentic, dar preferă o masă mai lejeră.",
    closingLines: [
      "Totul se face simplu, practic și fără să lași un dezastru în urmă.",
      "Dacă îți e poftă de ceva crocant pentru diseară, abia ți-ai găsit soluția."
    ],
    images: [
      { src: "/carousel/slide-1.webp", alt: "Interior din cartea de gustări — slide 1" },
      { src: "/carousel/slide-2.webp", alt: "Interior din cartea de gustări — slide 2" },
    ],
    chips: [
      { icon: "CheckCircle2", label: "Fără dezastru în bucătărie" },
      { icon: "Clock", label: "Gata în câteva minute" },
      { icon: "BookOpen", label: "Peste 500 de rețete" },
    ],
    cta: "VREAU REȚETELE!",
    a11y: {
      prev: "Precedent",
      next: "Următor",
      goToSlide: "Mergi la slide-ul",
    },
  },

  features: {
    eyebrow: "Spune adio gustărilor fade, scumpe și pline de ulei",
    headline: "Crocante, rapide și floare la ureche de preparat",
    badge: "Uite ce primești direct în cartea digitală (PDF):",
    ingredientsLabel: "Ingrediente:",
    timeLabel: "Timp:",
    items: [
      {
        title: "Chifteluțe Crocante",
        description:
          "Crocante la exterior, suculente la interior. Clasicul irezistibil la care toți mai cer o porție.",
        image: "/recipes/bolitas-carne.webp",
        ingredients: 3,
        time: "10 min",
      },
      {
        title: "Creveți ca la Pub",
        description:
          "Zemoși, bine condimentați și gata imediat. Gustarea care impresionează prin simplitate și savoare.",
        image: "/recipes/camarones-bar.webp",
        ingredients: 2,
        time: "8 min",
      },
      {
        title: "Cârnați la Airfryer",
        description:
          "O crustă perfectă, un interior suculent și gata în câteva minute. Porția ideală de împărțit cu gașca.",
        image: "/recipes/chorizo-airfryer.webp",
        ingredients: 3,
        time: "7 min",
      },
      {
        title: "Platoul Imens de Bar",
        description:
          "Diversitate, textură crocantă și vibe de pub pe un singur platou. Dă pe spate orice musafir, instant.",
        image: "/recipes/tabla-bar.webp",
        ingredients: 7,
        time: "18 min",
      },
      {
        title: "Cartofi cu Cheddar și Bacon",
        description:
          "Crocanti, cremoși și cu un gust de-a dreptul brutal. Clasicul căruia efectiv nimeni nu-i poate rezista.",
        image: "/recipes/papas-cheddar.webp",
        ingredients: 3,
        time: "8 min",
      },
      {
        title: "Pâinică Aromată cu Usturoi",
        description:
          "Moale înăuntru, crocantă afară și plină de savoare. Prima care dispare, fără excepție, de pe masă.",
        image: "/recipes/pan-ajo.webp",
        ingredients: 3,
        time: "6 min",
      },
      {
        title: "Cartofi Picanți (Patatas Bravas)",
        description:
          "Crocanti, condimentați perfect și dependenți. Din ăia de-i mănânci fără să-ți dai seama până vezi fundul farfuriei.",
        image: "/recipes/papas-bravas.webp",
        ingredients: 3,
        time: "10 min",
      },
      {
        title: "Bulete de Pui Crocante",
        description:
          "Savuroase, fragede și fără pic de ulei. Gustarea supremă care pune pe toată lumea de acord.",
        image: "/recipes/pollo-frito.webp",
        ingredients: 2,
        time: "5 min",
      },
      {
        title: "Platou cu Mix de Gustări",
        description:
          "Rapid, sățios și perfect pentru a da startul la povești. Compania ideală pentru o bere rece.",
        image: "/recipes/aperitivos-variados.webp",
        ingredients: 5,
        time: "12 min",
      },
      {
        title: "Batoane de Cașcaval Pane",
        description:
          "Crustă crocantă, brânză topită. O gustare atât de simplă și rapidă, din care e imposibil să mănânci doar una.",
        image: "/recipes/queso-bar.webp",
        ingredients: 2,
        time: "6 min",
      },
    ],
    moreBlock: {
      title: "ȘI MULTE, MULTE ALTELE...",
      text: "Astea sunt doar câteva din cele peste 500 de rețete, perfecte pentru oricine adoră bunătățile de pub, dar caută ceva rapid și comod acasă.",
    },
    cta: "VREAU REȚETELE!",
  },

  bonuses: {
    eyebrowMain: "Bonusurile pe care le înșfaci",
    eyebrowSuffix: "dacă dai comanda azi:",
    freeLabel: "GRATUIT ASTĂZI",
    items: [
      {
        badge: "Bonus 1",
        title: "Lista completă de sosuri și condimente de pub",
        subtext: "Ingrediente secrete, combinații magice și condimentele de bază",
        image: "/bonuses/bonus-1-salsas.webp",
        imageAlt: "Bonus 1 — Lista de sosuri și condimente",
        price: "45 Lei",
      },
      {
        badge: "Bonus 2",
        title: "Meniu săptămânal de gustări la Airfryer",
        subtext: "Idei organizate inteligent pentru fiecare zi a săptămânii",
        image: "/bonuses/bonus-2-menu-airfryer.webp",
        imageAlt: "Bonus 2 — Meniu săptămânal",
        price: "30 Lei",
      },
      {
        badge: "Bonus 3",
        title: "Ghidul garniturilor rapide",
        subtext: "Cruste speciale, sosuri (dips) și salate fresh pentru toată gașca",
        image: "/bonuses/bonus-3-acompanamientos.webp",
        imageAlt: "Bonus 3 — Garnituri rapide",
        price: "40 Lei",
      },
    ],
  },

  finalCta: {
    eyebrow: "Oferta Ta",
    headline: "Acces instant — plătești o singură dată, te bucuri de ele pe viață",
    subheadline: "Tot ce ai nevoie, adunat convenabil într-un singur loc.",
    plans: [
      {
        kind: "super",
        ribbon: "Super Ofertă",
        popularLabel: "🔥 CEA MAI CUMPĂRATĂ",
        title: "Peste 500 de Rețete pentru Gustări de Pub",
        bullets: [
          "Peste 500 de rețete de gustări de bar",
          "Rețete adaptate special pentru Airfryer",
          "Variante delicioase cu și fără ulei",
          "Acces pe viață la formatul PDF",
          "Livrare instantă pe adresa ta de email"
        ],
        bonusBullets: [
          "Lista completă de sosuri și condimente de pub",
          "Meniu săptămânal de gustări la Airfryer",
          "Înlocuitori isteți și ieftini pentru diverse ingrediente",
        ],
        regularPrice: "485 Lei",
        discountTag: "-90%",
        offerPrice: "35 Lei",
        priceFootnote: "Plată unică",
        cta: "CUMPĂRĂ ACUM",
        analyticsId: "aperitivos_bar_super",
        analyticsName: "Super Oferta - +500 Recetas + Bonos",
        priceValue: 35,
      },
    ],
    trust: {
      secure: "Plată Securizată",
      guarantee: "30 de Zile Garanție",
    },
  },

  testimonials: {
    eyebrow: "Comunitatea Noastră",
    headline: "Ce spun clienții care au testat deja",
    actions: ["Îmi place", "Comentează", "Distribuie"],
    items: [
      {
        name: "Maria Ionescu",
        time: "Acum 2 ore",
        content:
          "Rețete super bune! Am făcut chifteluțele crocante și au ieșit demențiale 🔥",
        likes: 23,
        avatar: "/testimonials/maria.webp",
      },
      {
        name: "George Popescu",
        time: "Acum 5 ore",
        content:
          "Mamă, ce rețete faine! Ieri am încercat creveții și nevastă-mea a rămas mască de cât de buni au ieșit.",
        likes: 34,
        avatar: "/testimonials/juan.webp",
      },
      {
        name: "Elena Dumitrescu",
        time: "Acum 1 zi",
        content:
          "Oameni buni, nu mi-am imaginat niciodată că poți face atâtea feluri de gustări. Am încercat deja 3 rețete și toate au fost geniale! ❤️",
        likes: 45,
        avatar: "/testimonials/ana.webp",
      },
      {
        name: "Nicolae Radu",
        time: "Acum 1 zi",
        content:
          "A meritat fiecare bănuț. De mai bine de un an nu am repetat nicio gustare. Familia mea e super încântată de achiziție.",
        likes: 28,
        avatar: "/testimonials/carlos.webp",
      },
      {
        name: "Silvia Toma",
        time: "Acum 2 zile",
        content:
          "Am luat-o ieri și m-am pus direct să fac câteva rețete din carte... au ieșit al naibii de bune. Recomand din tot sufletul!",
        likes: 52,
        avatar: "/testimonials/lucia.webp",
      },
    ],
    cta: "VREAU REȚETELE!",
  },

  story: {
    eyebrow: "DESPRE AUTOR",
    headline: "CHEF IONUȚ",
    image: "/chef-juan-carlos.webp",
    imageAlt: "Chef Ionuț",
    paragraphs: [
      { text: "Salut, sunt Chef Ionuț!", style: "bold" },
      {
        text: "Mereu am crezut că o gustare bună este sufletul oricărei petreceri. Nu trebuie să fie ceva ultra-complicat, ci doar să aibă gustul ăla inconfundabil.",
        style: "default",
      },
      {
        text: "După ani de zile la cârma unor bucătării profesioniste și văzând cum oamenii adoră să ciugulească ceva bun lângă o bere rece, mi-am dat seama că mulți se chinuie acasă cu chipsuri din comerț sau cartofi prăjiți obosiți, doar pentru că sunt în pană de idei.",
        style: "default",
      },
      {
        text: "Așa s-a născut ideea acestui ghid: să adun peste 500 de moduri diferite de a prepara gustări de pub — practice, al naibii de gustoase și cu ingrediente care nu te lasă cu buzunarul gol.",
        style: "highlight",
      },
      {
        text: "Am pregătit totul cu mare grijă ca să-ți demonstrez că e perfect posibil să aduci fix gustul ăla autentic de pub la tine acasă, în fiecare zi.",
        style: "default",
      },
      { text: "Ne apucăm de treabă împreună?", style: "bold-accent" },
    ],
    cta: "VREAU REȚETELE!",
  },

  faq: {
    eyebrow: "FAQ",
    headline: "ÎNTREBĂRI FRECVENTE",
    items: [
      {
        q: "Cum voi primi materialele?",
        a: "Accesul la e-book și la bonusuri îți este trimis direct pe adresa de email, imediat după ce se confirmă plata.",
      },
      {
        q: "Cartea poate fi printată?",
        a: "Da! Fișierul este un format PDF de înaltă calitate, perfect atât pentru a fi citit pe telefon, tabletă sau laptop, cât și pentru a fi listat la imprimantă.",
      },
      {
        q: "Există rețete și pentru începători absoluți?",
        a: "Da, absolut toate rețetele sunt explicate pas cu pas, simplu și la obiect. Sunt perfecte chiar și pentru cineva care a ars o oală cu apă în trecut.",
      },
      {
        q: "Aveți și rețete fără ulei?",
        a: "Clar! Multe dintre ele sunt adaptate special pentru Airfryer sau cuptor, păstrând exact gustul intens, dar fără bălți de ulei.",
      },
      {
        q: "Rețetele astea sunt practice și ușor de făcut?",
        a: "100%. Tot focusul a fost pus pe ideea de a fi practic. Ideea e să te relaxezi, nu să pierzi ore în șir prin bucătărie.",
      },
      {
        q: "Dacă nu mă pricep la gătit deloc... e pentru mine cartea asta?",
        a: "Fără niciun dubiu. Instrucțiunile sunt foarte clare, iar ingredientele le găsești ușor la orice magazin de la colțul blocului.",
      },
      {
        q: "O pot citi direct de pe telefonul meu?",
        a: "Da, formatul este perfect compatibil și se adaptează pe orice smartphone.",
      },
      {
        q: "Și dacă nu-mi place? Există vreo garanție?",
        a: "Îți oferim o garanție necondiționată de 30 de zile. Dacă te uiți peste ea și simți că nu e de tine, pur și simplu dă-ne un email și îți dăm banii înapoi pe loc.",
      },
    ],
  },

  closing: {
    eyebrow: "Ultima strigare",
    headline: "Adu atmosfera și gustul de pub la tine acasă, chiar de azi",
    paragraph:
      "Ai acces instant, plata se face o singură dată și ești acoperit de o garanție beton de 30 de zile. Nu ai absolut niciun risc: primești doar gustări crocante, practice și de neuitat.",
    cta: "VREAU REȚETELE!",
  },

  footer: {
    brand: "Peste 500 de Rețete pentru Gustări de Pub",
    tagline: "Gustul autentic de pub — adus direct în bucătăria ta.",
    rightsPrefix: "Toate drepturile rezervate ©",
    disclaimer:
      "Acest site nu face parte din platforma Facebook sau Facebook Inc. De asemenea, acest site NU este susținut sau aprobat de Facebook în niciun fel. FACEBOOK este o marcă înregistrată a FACEBOOK, Inc.",
  },
};