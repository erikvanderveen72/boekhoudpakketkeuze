export interface SoftwarePackage {
  id: string;
  name: string;
  logo: string;
  monthlyPrice: number;
  priceLabel?: string;
  priceNote?: string;
  priceExclBtw?: boolean;
  trialPeriodDays: number;
  targetAudience: ('zzp-service' | 'zzp-trade' | 'mkb-small' | 'mkb-large' | 'starter')[];
  features: {
    ocr: boolean;
    bankLink: boolean;
    hours: boolean;
    stock: boolean;
    app: boolean;
    vatDirect: boolean;
    multiUser: boolean;
  };
  reviewScore: number;
  reviewCount: number;
  usp: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  website: string;
  detailedReview?: string;
  faqItems?: { question: string; answer: string }[];
  pricingDetails?: string;
  idealFor?: string[];
}

export const softwarePackages: SoftwarePackage[] = [
  {
    id: 'e-boekhouden',
    name: 'e-Boekhouden.nl',
    logo: '/logos/e-boekhouden.png',
    monthlyPrice: 9.95,
    priceLabel: 'Vanaf €9,95',
    priceNote: '15 maanden gratis voor starters',
    trialPeriodDays: 450,
    targetAudience: ['starter', 'zzp-service', 'zzp-trade'],
    features: { ocr: true, bankLink: true, hours: true, stock: true, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.9,
    reviewCount: 1250,
    usp: 'Gratis voor starters',
    description: 'e-Boekhouden.nl is geschikt voor starters, zzp\'ers en mkb. Het pakket biedt facturatie, offertes, urenregistratie, relatiebeheer, voorraadbeheer, scan & herken en directe btw-verwerking. Er zijn meerdere abonnementen: ZZP (€9,95 p/m, max. 240 boekingen), Standaard (€14,50 p/m) en Standaard + Factureren (€24,00 p/m). Startende ondernemers kunnen 15 maanden gratis gebruikmaken van het pakket. Een aandachtspunt is dat functies en limieten per abonnement verschillen. Btw-status: niet eenduidig verifieerbaar op moment van controle.',
    pros: [
      '15 maanden gratis voor starters - ruim de tijd om de software te testen voordat je betaalt',
      'Automatische bankkoppelingen met alle Nederlandse banken voor efficiënte transactieregistratie',
      'BTW kan direct naar de belastingdienst verstuurd worden - geen extra stappen nodig',
      'Klantenservice via telefoon, email en chat - toegankelijk voor beginners',
      'Urenregistratie ingebouwd voor dienstverleners en consultants',
      'Multi-user functionaliteit zodat je team ook kan werken in het systeem'
    ],
    cons: [
      'De interface voelt wat gedateerd vergeleken met modernere concurrenten zoals Moneybird',
      'Voorraadbeheer is beschikbaar maar beperkt vergeleken met gespecialiseerde ERP-pakketten',
      'Beperkte integraties met andere tools en platforms',
      'Mobile app is minder intuïtief dan bijvoorbeeld Tellow',
      'Rapportages kunnen beter worden gepresenteerd in de interface'
    ],
    bestFor: 'Startende ondernemers',
    website: 'https://www.e-boekhouden.nl',
    detailedReview: 'e-Boekhouden.nl is al meer dan 20 jaar actief op de Nederlandse markt voor starters en zzp\'ers. De software onderscheidt zich door de ruime gratis proefperiode van 15 maanden. Er zijn drie abonnementen: ZZP (€9,95 p/m, max. 240 boekingen), Standaard (€14,50 p/m) en Standaard + Factureren (€24,00 p/m). De automatische bankkoppelingen werken betrouwbaar. De interface is functioneel maar minder modern dan sommige concurrenten. Het pakket biedt facturatie, offertes, urenregistratie, relatiebeheer, voorraadbeheer, scan & herken en een mobiele app. De btw-integratie werkt goed en het urenregistratiesysteem is adequaat voor dienstverleners. Functies en limieten verschillen per abonnement.',
    faqItems: [
      {
        question: 'Hoeveel kost e-Boekhouden.nl voor starters?',
        answer: 'Voor starters is e-Boekhouden.nl 15 maanden volledig gratis. Er is ook een actie met 12 maanden 50% korting na de gratis periode. Het ZZP-pakket kost daarna €9,95 per maand (max. 240 boekingen). Het Standaard-pakket kost €14,50 per maand en Standaard + Factureren €24,00 per maand. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
      },
      {
        question: 'Kan ik mijn bankrekening automatisch koppelen aan e-Boekhouden?',
        answer: 'Ja, e-Boekhouden.nl ondersteunt automatische bankkoppelingen met alle grote Nederlandse banken. Je transacties worden dagelijks automatisch geïmporteerd en kunnen dan categoriseerd worden. Dit bespaart veel handmatige invoerwerk.'
      },
      {
        question: 'Is e-Boekhouden geschikt voor handel en webshops?',
        answer: 'e-Boekhouden is primair gericht op dienstverleners en niet voorzien van voorraadbeheer. Voor bedrijven met stock wordt aanbevolen uit te wijken naar Exact Online, Silvasoft of een ander pakket met ERP-functies.'
      },
      {
        question: 'Kan mijn accountant mee in e-Boekhouden?',
        answer: 'e-Boekhouden biedt multi-user mogelijkheden, dus je kunt je accountant of boekhouder toegang geven. De gegevens kunnen ook eenvoudig geëxporteerd worden voor uitwisseling met anderen.'
      },
      {
        question: 'Hoe werkt urenregistratie in e-Boekhouden?',
        answer: 'e-Boekhouden heeft een ingebouwde urenregistratie module waarmee je uren per project kunt vastleggen. Dit is nuttig voor dienstverleners die op uurbasis werken. De uren kunnen eenvoudig in facturen worden opgenomen.'
      }
    ],
    pricingDetails: 'e-Boekhouden.nl biedt meerdere abonnementen: ZZP (€9,95 p/m, max. 240 boekingen), Standaard (€14,50 p/m, onbeperkt boekingen) en Standaard + Factureren (€24,00 p/m). Voor startende ondernemers is het pakket 15 maanden gratis beschikbaar. Daarnaast wordt een actie vermeld met 12 maanden 50% korting na de gratis periode. Btw-status: niet eenduidig verifieerbaar op moment van controle. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
    ,
    idealFor: [
      'Startups en pasgestarte zzp\'ers die hun eerste ervaring met boeken willen hebben',
      'Dienstverleners en consultants met gering budget maar wel professionele behoefte',
      'Kleine handelaren zonder voorraadbehoefte die eenvoudige administratie nodig hebben',
      'Ondernemers die samenwerken met een accountant en gestructureerde gegevensuitwisseling nodig hebben'
    ]
  },
  {
    id: 'moneymonk',
    name: 'MoneyMonk',
    logo: '/logos/moneymonk.png',
    monthlyPrice: 7.50,
    priceLabel: 'Gratis tot €5.000 omzet, daarna vanaf €7,50',
    priceNote: 'Omzetafhankelijk prijsmodel',
    trialPeriodDays: 30,
    targetAudience: ['zzp-service'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 9.2,
    reviewCount: 890,
    usp: 'Specialist in uren & projecten',
    description: 'MoneyMonk is specifiek ontwikkeld voor zzp\'ers en kleine dienstverlenende ondernemers die uren, projecten en facturen willen combineren in één pakket. Het pakket biedt facturatie, offertes, urenregistratie, projectadministratie, onkostenregistratie, rittenregistratie en bankkoppeling. Het prijsmodel is omzetafhankelijk: gratis tot €5.000 omzet, daarna Start (€7,50 p/m), Growth (€17,50 p/m) of Pro (€29,50 p/m). Gratis toegang voor boekhouder en onbeperkte telefonische support. Btw-status: niet eenduidig verifieerbaar op moment van controle. Aandachtspunt: het prijsmodel is niet één vast maandbedrag maar afhankelijk van je omzet.',
    pros: [
      'Uitgebreide urenregistratie met real-time tracking en automatische stopwatch',
      'Projectbudgetten bewaken - je ziet direct als je budget overschrijdt',
      'Goede klantenservice met snelle response times en Nederlands sprekend team',
      'Intuïtieve interface speciaal ontworpen voor dienstverleners, niet ingewikkeld',
      'Projectgebonden boekhouden - geschikt voor meerdere klanten tegelijk',
      'Automatische facturering op basis van geloste uren met aangepaste tarieven per project'
    ],
    cons: [
      'Geen voorraadbeheer - dus niet geschikt voor combinaties met productverkoop',
      'Prijs stijgt bij hogere omzet: €7,50 (Start), €17,50 (Growth), €29,50 (Pro)',
      'Beperkt accountant-integration vergeleken met bijvoorbeeld SnelStart',
      'Multi-user kan duur worden voor grotere teams',
      'Minder geschikt als je geen urenregistratie nodig hebt'
    ],
    bestFor: 'Dienstverleners & Consultants',
    website: 'https://www.moneymonk.nl',
    detailedReview: 'MoneyMonk richt zich op dienstverleners en consultants. De urenregistratie staat centraal: je kunt een stopwatch starten, pauseren en later hernemen. Uren worden automatisch aan projecten en klanten gekoppeld. De projectbudgetterings-feature laat zien hoeveel budget je hebt besteed. Het gratis plan tot €5.000 omzet maakt de instap laagdrempelig. Daarboven betaal je op basis van omzet: Start (€7,50), Growth (€17,50) of Pro (€29,50). De telefonische support is onbeperkt beschikbaar. Het pakket biedt ook facturatie, offertes, onkostenregistratie en rittenregistratie. Nadeel: het pakket is minder geschikt als je niet veel uren vastlegt of als je producten verkoopt.',
    faqItems: [
      {
        question: 'Is MoneyMonk echt gratis tot €5.000 omzet?',
        answer: 'Ja, MoneyMonk biedt een volledig gratis plan voor zzp\'ers met omzet tot €5.000 per maand. Dit is aanzienlijk genereuzer dan de standaard 14-30 dagen trial van concurrenten. Je hebt toegang tot alle kernfuncties inclusief urenregistratie en facturering.'
      },
      {
        question: 'Hoe werkt de urenregistratie in MoneyMonk?',
        answer: 'MoneyMonk heeft een ingebouwde stopwatch waarmee je uren real-time kunt tracken. Je start de timer als je aan een project begint, en het systeem registreert automatisch hoeveel uren je hebt doorgebracht. Deze uren kunnen direct in facturen worden opgenomen.'
      },
      {
        question: 'Kan ik meerdere projecten tegelijk beheren?',
        answer: 'Ja, MoneyMonk is gebouwd voor dienstverleners met meerdere klanten en projecten tegelijk. Je kunt per project aparte budgetten instellen en uren per project tracken. Dit maakt het eenvoudig om later per klant af te rekenen.'
      },
      {
        question: 'Wat gebeurt er als mijn omzet boven €5.000 gaat?',
        answer: 'Als je omzet boven €5.000 komt, schakel je over naar het Start-plan (€7,50 p/m bij €5.000-€10.000 omzet). Daarboven geldt Growth (€17,50 p/m bij €10.000-€30.000 omzet) of Pro (€29,50 p/m vanaf €30.001 omzet). Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
      },
      {
        question: 'Werkt MoneyMonk ook met mijn accountant?',
        answer: 'MoneyMonk kan gegevens exporteren voor je accountant. Er is echter geen directe integratie zoals bij SnelStart. Voor intensieve samenwerking met een accountant zijn andere pakketten beter geschikt.'
      }
    ],
    pricingDetails: 'MoneyMonk hanteert een omzetafhankelijk prijsmodel. Gratis tot €5.000 omzet. Daarboven: Start (€7,50 p/m bij €5.000-€10.000 omzet), Growth (€17,50 p/m bij €10.000-€30.000 omzet), Pro (€29,50 p/m vanaf €30.001 omzet). Daarnaast is er een gratis proefperiode van 30 dagen. Gratis toegang voor je boekhouder en gratis bankkoppeling zijn inbegrepen. Btw-status: niet eenduidig verifieerbaar op moment van controle. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
    ,
    idealFor: [
      'Freelance consultants en adviesgevende zzp\'ers die op uurbasis werken',
      'Digitale dienstverleners zoals designers, developers en copywriters',
      'Kleine bureaus met meerdere projecten en klanten tegelijk',
      'Dienstverleners die nauwkeurig hun winst per project willen bijhouden'
    ]
  },
  {
    id: 'moneybird',
    name: 'Moneybird',
    logo: '/logos/moneybird.png',
    monthlyPrice: 15.00,
    priceLabel: 'Gratis pakket beschikbaar, betaald vanaf €15 p/m',
    priceExclBtw: true,
    trialPeriodDays: 60,
    targetAudience: ['zzp-service', 'zzp-trade', 'mkb-small'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.8,
    reviewCount: 2100,
    usp: 'Overzichtelijke interface',
    description: 'Moneybird is een gebruiksvriendelijk boekhoudpakket dat populair is bij freelancers, starters en kleine ondernemers. Het pakket biedt offertes, facturen, inkoopfacturen, boekhouden, btw-aangifte, urenregistratie, online betaalmethoden en een mobiele app. Er is een gratis pakket (beperkt tot 10 transacties, 3 facturen, 3 inkomende documenten, 3 offertes). Betaalde pakketten: €15 p/m (20 banktransacties), €28 p/m (50 banktransacties), €39 p/m (onbeperkt). Alle prijzen zijn exclusief btw. Proefperiode: 60 dagen gratis. Alternatief: 6 maanden gratis bij keuze voor gratis zakelijke rekening. Aandachtspunt: transactielimieten spelen mee in de pakketkeuze.',
    pros: [
      'Overzichtelijke, moderne interface die de administratie toegankelijk maakt',
      'Eigen betaalrekening mogelijk via IBAN-mogelijkheid - bank en boekhouding in één',
      'Digitale offertes kunnen elektronisch ondertekend worden - professioneel en efficiënt',
      '60 dagen gratis proefperiode, of 6 maanden bij keuze voor gratis zakelijke rekening',
      'Tijdlijn-interface waarmee je direct ziet wat er allemaal gebeurt in je administratie',
      'Integraties met veel populaire tools zoals Zapier, Slack en e-commerce platforms'
    ],
    cons: [
      'Geen telefonische support - alleen email en chat beschikbaar',
      'Voorraadbeheer is beperkt - niet geschikt voor serieuze webshops',
      'Betaalde pakketten beginnen bij €15 p/m excl. btw, transactielimieten gelden per pakket',
      'De timeline-interface is mooi maar kan voor grote bedrijven minder geschikt zijn',
      'Geen accountant-integratie zoals SnelStart'
    ],
    bestFor: 'Design-bewuste ondernemers',
    website: 'https://www.moneybird.nl',
    detailedReview: 'Moneybird onderscheidt zich door een moderne en overzichtelijke interface met een tijdlijn-weergave. Er is een gratis pakket beschikbaar met beperkte functionaliteit (max. 10 transacties, 3 facturen). Betaalde pakketten beginnen bij €15 p/m excl. btw (20 banktransacties), met hogere pakketten voor €28 p/m (50 transacties) en €39 p/m (onbeperkt). De proefperiode is 60 dagen gratis, of 6 maanden bij keuze voor een gratis zakelijke rekening. De mogelijkheid om een eigen betaalrekening in te stellen is een onderscheidende functie. Het gebrek aan telefonische support is een aandachtspunt, maar email- en chatondersteuning is beschikbaar. Alle genoemde prijzen zijn exclusief btw.',
    faqItems: [
      {
        question: 'Hoe lang is de proefperiode van Moneybird?',
        answer: 'Moneybird biedt 60 dagen gratis proefperiode. Daarnaast kun je 6 maanden gratis gebruikmaken van het pakket bij keuze voor een gratis zakelijke rekening. Er is ook een gratis pakket beschikbaar met beperkte functionaliteit.'
      },
      {
        question: 'Wat is de "eigen betaalrekening" optie?',
        answer: 'Moneybird biedt de mogelijkheid om een IBAN (betaalrekening) via het platform aan te vragen. Dit maakt Moneybird je volledige bank en boekhoudplatform tegelijk - al je geld loopt via dezelfde rekening.'
      },
      {
        question: 'Kan ik offertes laten digitaal ondertekenen?',
        answer: 'Ja, in Moneybird kun je offertes en contracten digitaal laten ondertekenen door je klanten. Dit bespaart veel heen-en-weer mailen en maakt het proces professioneel.'
      },
      {
        question: 'Heeft Moneybird telefonische support?',
        answer: 'Nee, Moneybird biedt geen telefonische support. Je kunt terecht via email en live chat. De responstijden zijn goed en het team is behulpzaam, maar dit is niet ideaal als je direct iemand aan de telefoon wilt.'
      },
      {
        question: 'Kan ik mijn voorraden beheren in Moneybird?',
        answer: 'Moneybird heeft alleen basisvoorraadbeheer. Voor serieuze voorraadbehoefte (webshops, handelsbedrijven) is het beter uit te wijken naar Exact Online of Silvasoft.'
      }
    ],
    pricingDetails: 'Moneybird biedt een gratis pakket (max. 10 transacties, 3 facturen, 3 inkomende documenten, 3 offertes). Betaalde pakketten: €15 p/m (20 banktransacties), €28 p/m (50 banktransacties), €39 p/m (onbeperkt). Alle prijzen zijn exclusief btw. Proefperiode: 60 dagen gratis proberen. Alternatief: 6 maanden gratis bij keuze voor gratis zakelijke rekening. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
    ,
    idealFor: [
      'Design-georiënteerde zzp\'ers en freelancers die veel waarde hechten aan UX',
      'Jonge ondernemers die moderne technologie waarderen en willen gebruiken',
      'Dienstverleners die professionele communicatie willen (digitale offertes, ondertekening)',
      'Startups en bedrijven die brand en esthetiek belangrijk vinden in hun tooling'
    ]
  },
  {
    id: 'jortt',
    name: 'Jortt',
    logo: '/logos/jortt.png',
    monthlyPrice: 19.95,
    priceLabel: 'Vanaf €19,95 p/m excl. btw',
    priceExclBtw: true,
    trialPeriodDays: 30,
    targetAudience: ['zzp-service', 'zzp-trade', 'mkb-small'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.7,
    reviewCount: 780,
    usp: 'Automatisering & Boekhoudbot',
    description: 'Jortt is geschikt voor zzp\'ers, mkb, bv\'s, stichtingen en verenigingen. Het pakket biedt facturen maken, btw-aangifte met één klik, automatische controle op boekingen en webshopkoppelingen. Het is geschikt voor bedrijven met ongeveer 1 tot 10 werknemers. Pakketten: jortt ZZP (€19,95 p/m), jortt MKB (€24,95 p/m), jortt Plus (€34,95 p/m). Alle prijzen exclusief btw. Na 30 dagen gratis volgen 3 maanden voor €9,95 p/m. Geen opstartkosten. Aandachtspunt: de prijsstructuur heeft een introductiefase en meerdere niveaus.',
    pros: [
      'Boekhoudbot automatiseert tot 99% van de transacties - nagenoeg geen handmatige invoer meer',
      'Realtime fiscale checks zorgen dat je altijd compliant bent met belastingregels en regelgeving',
      'Jaarrekening is inbegrepen in het abonnement - geen extra kosten voor accountantswerk',
      'Ondernemer-first filosofie - elke feature is gemaakt met input van echte ondernemers',
      'Automatische categorisering van bankafschriften bespaard enorm veel tijd',
      'Schoon, modern dashboard dat je bedrijfssituatie duidelijk weergeeft'
    ],
    cons: [
      'Vereist vertrouwen in algoritmes en AI - niet alle ondernemers zijn hier comfortabel mee',
      'Minder persoonlijk contact dan traditionele pakketten met telefonische support',
      'De Boekhoudbot is heel goed maar niet perfect - enkele procenten moet je nog handmatig checken',
      'Voor complexe bedrijfsstructuren kan de automatisering minder geschikt zijn',
      'Nog relatief jong bedrijf vergeleken met meer gevestigde concurrenten'
    ],
    bestFor: 'DIY ondernemers',
    website: 'https://www.jortt.nl',
    detailedReview: 'Jortt zet in op automatisering via de Boekhoudbot, die transacties automatisch categoriseert. Het systeem voert realtime fiscale checks uit. De jaarrekening is inbegrepen. Er zijn drie pakketten: jortt ZZP (€19,95 p/m), jortt MKB (€24,95 p/m) en jortt Plus (€34,95 p/m), alle prijzen exclusief btw. Na 30 dagen gratis volgen 3 maanden voor €9,95 p/m. Het pakket biedt ook facturen maken, btw-aangifte met één klik en webshopkoppelingen. Geschikt voor zzp, mkb, bv, stichting en vereniging, en voor bedrijven met ongeveer 1 tot 10 werknemers. Nadeel: sommige ondernemers voelen zich minder comfortabel met AI-automatisering. Jortt is een relatief jong bedrijf vergeleken met Exact of e-Boekhouden.',
    faqItems: [
      {
        question: 'Hoe goed is de Boekhoudbot van Jortt echt?',
        answer: 'De Boekhoudbot automatiseert ongeveer 99% van transacties goed. Dit betekent dat bijna alles automatisch gecategoriseerd wordt op basis van je patronen en AI. De resterende 1% check je zelf nog handmatig, maar dit bespaart ontzettend veel tijd.'
      },
      {
        question: 'Wat zijn "realtime fiscale checks"?',
        answer: 'Jortt controleert alle transacties real-time op fiscale regelgeving. Als je iets doet dat niet compliant is (bijvoorbeeld foutief btw-percentage), waarschuwt het systeem je direct. Dit voorkomt dure fouten later.'
      },
      {
        question: 'Is de jaarrekening echt al inbegrepen?',
        answer: 'Ja, Jortt neemt de jaarrekening mee in het abonnement. Het jortt ZZP-pakket kost €19,95 p/m excl. btw. Er zijn ook pakketten voor MKB (€24,95 p/m) en Plus (€34,95 p/m). Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
      },
      {
        question: 'Moet ik volledig vertrouwen op de automatisering?',
        answer: 'Nee, je kunt alles altijd controleren en handmatig aanpassen. De automatisering is bedoeld om je werk makkelijker te maken, niet je controle af te nemen. Je hebt volle inzicht in alles wat de Boekhoudbot doet.'
      },
      {
        question: 'Is Jortt geschikt voor complexe bedrijfsstructuren?',
        answer: 'Jortt is het best geschikt voor relatief eenvoudige bedrijven. Voor complexe holdings, meerdere entiteiten of zeer specialistische boekhoudvragen kan een traditioneel pakket zoals Exact Online beter uitkomen.'
      }
    ],
    pricingDetails: 'Jortt biedt drie pakketten: jortt ZZP (€19,95 p/m), jortt MKB (€24,95 p/m) en jortt Plus (€34,95 p/m). Alle prijzen zijn exclusief btw. Na 30 dagen gratis proefperiode volgen 3 maanden voor €9,95 p/m voor de betaalde pakketten. Geen opstartkosten. De jaarrekening is inbegrepen. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
    ,
    idealFor: [
      'Technisch onderlegde zzp\'ers en ondernemers die van automatisering houden',
      'DIY-geiarde ondernemers die hun boeken zelf willen beheren',
      'Starters die snel willen groeien en handmatig werk willen minimaliseren',
      'Bedrijven die waarde hechten aan transparantie en duidelijke prijsstelling'
    ]
  },
  {
    id: 'exact-online',
    name: 'Exact Online',
    logo: '/logos/exact-online.png',
    monthlyPrice: 49.00,
    priceLabel: 'Vanaf €49 p/m excl. btw',
    priceExclBtw: true,
    trialPeriodDays: 30,
    targetAudience: ['mkb-small', 'mkb-large', 'zzp-trade'],
    features: { ocr: true, bankLink: true, hours: true, stock: true, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.4,
    reviewCount: 1650,
    usp: 'Schaalbaarheid & ERP',
    description: 'Exact Online is geschikt voor groeiende bedrijven en complexere administraties. Het pakket biedt btw-aangifte en ICP, bankkoppelingen, mobiele app, online samenwerken, automatische factuurverwerking, factureren, Peppol, debiteurenbeheer en koppeling met accountant. Pakketten: Essentials (€49 p/m, 1 gebruiker), Plus (€99 p/m, 2 gebruikers), Professional (€159 p/m) en Premium (vanaf €299 p/m). Extra gebruikers vanaf €23-€49 p/m. Alle prijzen exclusief btw. Aandachtspunt: hogere prijs en uitgebreider systeem dan veel zzp\'ers nodig hebben.',
    pros: [
      'Volledige ERP mogelijkheden - alles wat je bedrijf nodig heeft is geïntegreerd',
      'Enorme App Store met meer dan 200 koppelingen naar andere business tools',
      'Salarisadministratie ingebouwd - je kunt je werknemersbetalingen volledig in Exact beheren',
      'Accountants-standaard - vrijwel alle accountants en belastingadviseurs werken met Exact',
      'Professioneel voorraadbeheer met real-time stock tracking en multichannel support',
      'Schaalbaarheid - het groeit mee met je bedrijf van klein tot groot'
    ],
    cons: [
      'Vanafprijs €49 p/m excl. btw (Essentials, 1 gebruiker) - niet geschikt voor kleine zzp\'ers met beperkt budget',
      'Steile leercurve - meer features betekent ook meer complexiteit en trainingstijd',
      'Overkill voor ZZP zonder employees of voorraadbehoefte - veel functies ga je niet gebruiken',
      'Interface kan overweldigend voelen met alle opties en menupunten',
      'Setup vereist meer initiële investering in tijd en eventueel consultants'
    ],
    bestFor: 'Groeiend MKB',
    website: 'https://www.exact.com/nl',
    detailedReview: 'Exact Online is een gevestigd bedrijf met meer dan 40 jaar ervaring in Nederland. Het pakket is gebouwd voor bedrijven die groeien. De ERP-mogelijkheden zijn uitgebreid: voorraadbeheer, meerdere locaties, meerdere valuta\'s. De integratie met salarisadministratie maakt het een breed systeem. Met meer dan 200 app-integraties zijn veel koppelingen mogelijk. Pakketten: Essentials (€49 p/m, 1 gebruiker), Plus (€99 p/m, 2 gebruikers), Professional (€159 p/m), Premium (vanaf €299 p/m). Extra gebruikers kosten €23-€49 p/m afhankelijk van het pakket. Alle prijzen exclusief btw. Nadeel: complex om in te richten en waarschijnlijk grotendeels overkill voor kleine ondernemers.',
    faqItems: [
      {
        question: 'Is Exact Online geschikt voor kleine bedrijven?',
        answer: 'Exact Online is meer gericht op groeiend MKB dan op kleine zzp\'ers. Voor eenmanszaken is het waarschijnlijk overkill. Als je groeit naar meerdere werknemers, voorraad of meerdere winstcentra, wordt Exact relevant.'
      },
      {
        question: 'Kan ik salarisadministratie via Exact Online doen?',
        answer: 'Ja, Exact Online heeft volledige salarisadministratie ingebouwd. Je kunt je werknemers aanmaken, hun salaris beheren, belastingen berekenen en overboekingen doen - allemaal vanuit hetzelfde systeem.'
      },
      {
        question: 'Hoeveel apps kun je met Exact Online integreren?',
        answer: 'Exact Online heeft koppelingen met meer dan 200 business tools. Dit omvat CRM-systemen, e-commerce platforms, verzendplatforms, e-mailingtools en veel meer. De integraties zijn goed gedocumenteerd.'
      },
      {
        question: 'Werken accountants graag met Exact Online?',
        answer: 'Ja, Exact Online is de standaard in de accountantsindustrie in Nederland. Vrijwel alle accountants en belastingadviseurs zijn vertrouwd met het systeem en kunnen direct met je data werken.'
      },
      {
        question: 'Hoe moeilijk is het om Exact Online in te richten?',
        answer: 'Exact Online heeft meer setup-werk nodig dan kleinere pakketten. Het is raadzaam om hier tijd voor uit te trekken of een consultant in te huren. Eenmaal ingesteld werkt het zeer betrouwbaar.'
      }
    ],
    pricingDetails: 'Exact Online Boekhouden biedt vier pakketten: Essentials (€49 p/m, 1 gebruiker), Plus (€99 p/m, 2 gebruikers), Professional (€159 p/m) en Premium (vanaf €299 p/m). Extra gebruikers kosten €23 tot €49 p/m afhankelijk van het pakket. Alle prijzen zijn exclusief btw. 30 dagen gratis proefperiode. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
    ,
    idealFor: [
      'Handelsbedrijven en webshops met ernstige voorraadbehoefte',
      'Bedrijven met meerdere werknemers die salarisadministratie nodig hebben',
      'Groeiende bedrijven die zich voorbereiden op professionele groei',
      'Bedrijven die veel met accountants en belastingadviseurs samenwerken'
    ]
  },
  {
    id: 'silvasoft',
    name: 'Silvasoft',
    logo: '/logos/silvasoft.png',
    monthlyPrice: 13.95,
    priceLabel: 'Modulair, boekhouden vanaf €13,95',
    trialPeriodDays: 30,
    targetAudience: ['zzp-trade', 'mkb-small', 'mkb-large'],
    features: { ocr: true, bankLink: true, hours: true, stock: true, app: false, vatDirect: true, multiUser: true },
    reviewScore: 8.5,
    reviewCount: 420,
    usp: 'Modulair & voorraadbeheer',
    description: 'Silvasoft is geschikt voor ondernemers die hun pakket modulair willen opbouwen. Beschikbare modules: Boekhouden (€13,95), Facturatie (€8,95), Offertes & orders (€6,95), Sales (€6,95), Product- & voorraadbeheer (€7,95), Projectmanagement (€6,95), Urenregistratie (€3,95), HRM (€3,95), Taken & agenda (€4,95), CRM (€4,95). Prijsmodel per administratie, 30 dagen gratis proefperiode. Toegang voor boekhouder/accountant beschikbaar. Btw-status: niet eenduidig verifieerbaar op moment van controle. Aandachtspunt: de prijs is niet één vast bedrag maar afhankelijk van gekozen modules.',
    pros: [
      'Voorraadbeheer als losse module (€7,95 p/m) - modulair en naar behoefte inzetbaar',
      'Modulair uitbreidbaar - je betaalt alleen voor wat je echt gebruikt',
      'Inkooporders volledig beheerd - je kunt leveranciersorders volledig in het systeem afhandelen',
      'CRM module ingebouwd - klantgegevens en verkoopgeschiedenis samen met boekhouddata',
      'Modulaire prijsstructuur - je betaalt per module die je nodig hebt',
      'Ondersteunt meerdere winkels/locaties - geschikt voor ketens of multi-channel verkoop'
    ],
    cons: [
      'Interface is minder modern en voelt wat gedateerd vergeleken met nieuwere concurrenten',
      'Geen mobiele app beschikbaar - je bent gebonden aan desktop of webinterface',
      'Kleiner bedrijf dan Exact - minder established track record hoewel nog steeds betrouwbaar',
      'Minder integraties beschikbaar vergeleken met Exact Online App Store',
      'Leercurve voor setup en inrichting kan behoorlijk zijn'
    ],
    bestFor: 'Handelsbedrijven met budget',
    website: 'https://www.silvasoft.nl',
    detailedReview: 'Silvasoft biedt een modulair systeem met losse modules die je naar behoefte combineert. De boekhoudmodule kost €13,95 per administratie, daarnaast kun je modules toevoegen als Facturatie (€8,95), Voorraadbeheer (€7,95), CRM (€4,95), Projectmanagement (€6,95) en meer. Het voorraadbeheer biedt voorraadwaarschuwingen, voorraadwaarde-inzicht en er is geen genoemde limiet op aantallen producten. Toegang voor boekhouder/accountant is beschikbaar. De interface is functioneel maar minder modern dan nieuwere concurrenten. Er is geen mobiele app. Btw-status: niet eenduidig verifieerbaar op moment van controle. Voor ondernemers die specifieke modules nodig hebben zonder voor een compleet ERP-pakket te betalen kan Silvasoft passend zijn.',
    faqItems: [
      {
        question: 'Is Silvasoft echt betaalbaarder dan Exact Online?',
        answer: 'Silvasoft hanteert een modulair prijsmodel. Boekhouden kost €13,95 per administratie, voorraadbeheer €7,95 extra. Exact Online begint bij €49 p/m excl. btw. De totaalprijs hangt af van welke modules je combineert. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
      },
      {
        question: 'Hoe werkt de modulaire opbouw van Silvasoft?',
        answer: 'Silvasoft is opgebouwd uit losse modules die je naar behoefte combineert: boekhouding, voorraadbeheer, CRM, facturering, etc. Je betaalt alleen voor modules die je gebruikt. Dit maakt het flexibel en kosteneffectief.'
      },
      {
        question: 'Is het voorraadbeheer in Silvasoft professioneel genoeg?',
        answer: 'Ja, het voorraadbeheer in Silvasoft is professioneel en volledig. Je kunt meerdere locaties beheren, automatische herbestelpunten instellen, inkooporders verwerken en real-time stock tracking doen. Het is zeker geschikt voor serieuze handel.'
      },
      {
        question: 'Heeft Silvasoft CRM-functies?',
        answer: 'Ja, Silvasoft bevat een CRM-module waarmee je klantgegevens, contactgeschiedenis en verkoopkansen kunt beheren. Dit is erg handig als je je klanten beter wil kennen.'
      },
      {
        question: 'Kan ik van meerdere locaties werken?',
        answer: 'Ja, Silvasoft ondersteunt meerdere winkels of locaties. Dit is ideaal voor ketens of bedrijven die op meerdere plekken verkopen (winkel + online bijvoorbeeld).'
      }
    ],
    pricingDetails: 'Silvasoft hanteert een modulair prijsmodel per administratie. Modules en prijzen: Boekhouden (€13,95), Facturatie (€8,95), Offertes & orders (€6,95), Sales (€6,95), Product- & voorraadbeheer (€7,95), Projectmanagement (€6,95), Urenregistratie (€3,95), HRM (€3,95), Taken & agenda (€4,95), CRM (€4,95). 30 dagen gratis proefperiode. Btw-status: niet eenduidig verifieerbaar op moment van controle. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
    ,
    idealFor: [
      'Kleine handelsbedrijven en webshops met beperkt IT-budget',
      'Bedrijven die groeien maar nog niet klaar zijn voor Exact Online',
      'Multi-locatie bedrijven die één geïntegreerd systeem willen',
      'Bedrijven die voorraadbeheer nodig hebben zonder enterprise-software-complexiteit'
    ]
  },
  {
    id: 'snelstart',
    name: 'SnelStart',
    logo: '/logos/snelstart.png',
    monthlyPrice: 8.50,
    priceLabel: 'Vanaf €8,50 p/m excl. btw',
    priceExclBtw: true,
    trialPeriodDays: 30,
    targetAudience: ['zzp-service', 'zzp-trade', 'mkb-small'],
    features: { ocr: true, bankLink: true, hours: false, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.3,
    reviewCount: 1890,
    usp: 'Accountants-integratie',
    description: 'SnelStart is geschikt voor zzp\'ers en mkb die willen samenwerken met hun boekhouder en stapsgewijs willen uitbreiden. Het pakket biedt offertes en facturen, btw- en ICP-aangifte, mobiele app, samenwerking met boekhouder/accountant en digitale aanlevering van bonnen. Pakketten: inOrde (€8,50 p/m), inStap (€14,50 p/m), inKaart (€20,50 p/m), inBalans (€37,50 p/m). SnelStart Bankieren: €7,50 p/m. Alle prijzen exclusief btw. 30 dagen gratis proefperiode. Automatisering en debiteurenbeheer zitten in hogere pakketten. Aandachtspunt: functies verschillen duidelijk per pakket.',
    pros: [
      'Directe boekhouder-samenwerking - je accountant kan direct in je SnelStart werken',
      'Bonnetjes scannen app - makkelijk onkosten vastleggen via fotografie',
      'Grote installed base in Nederland - veel accountants zijn ervaren met SnelStart',
      'Telefonische support beschikbaar - handig voor ondernemers die graag een mens aan de telefoon hebben',
      'Proven track record - SnelStart bestaat al vele jaren en is betrouwbaar',
      'Goed voor construction en andere vakgebonden industrieën'
    ],
    cons: [
      'Minder geschikt voor DIY-aanpak zonder accountant - het systeem verwacht samenwerking',
      'Beperkte urenregistratie - niet de sterkste in urentracking',
      'Geen voorraadbeheer ingebouwd',
      'Interface voelt wat gedateerd vergeleken met moderne concurrenten',
      'Minder geschikt voor bedrijven die willen groeien naar meer zelfstandigheid'
    ],
    bestFor: 'Samenwerking met boekhouder',
    website: 'https://www.snelstart.nl',
    detailedReview: 'SnelStart biedt vier pakketten: inOrde (€8,50 p/m), inStap (€14,50 p/m), inKaart (€20,50 p/m) en inBalans (€37,50 p/m). Alle prijzen exclusief btw. Daarnaast is er SnelStart Bankieren (€7,50 p/m). Het pakket onderscheidt zich door sterke accountant-integratie: je boekhouder kan rechtstreeks in je SnelStart werken. De bonnetjes scan-app (via smartphone) maakt onkosten vastleggen eenvoudig. Automatisering en debiteurenbeheer zitten in hogere pakketten. Bij inKaart en inBalans worden betaalrekeningen, betaalpas en rente op saldo genoemd. Nadeel: het systeem is minder geschikt voor ondernemers die alles zelf willen doen zonder accountant.',
    faqItems: [
      {
        question: 'Kan mijn accountant direct in mijn SnelStart werken?',
        answer: 'Ja, dit is zelfs het sterke punt van SnelStart. Je accountant kan rechtstreeks inloggen in jouw SnelStart omgeving en daar aan je boekhoudadministratie werken. Dit voorkomt het heen-en-weer sturen van bestanden.'
      },
      {
        question: 'Is de bonnetjes scan-app echt handig?',
        answer: 'Ja, SnelStart biedt een dedicated app waarmee je bonnetjes/kvitanties kan fotograferen. Het systeem herkent bedragen en kan deze automatisch verwerken. Dit bespaart veel handmatige invoer.'
      },
      {
        question: 'Heeft SnelStart urenregistratie?',
        answer: 'SnelStart heeft basisurenregistratie, maar dit is niet de sterkste feature. Als uitgebreide urenregistratie belangrijk is, kijk dan naar MoneyMonk of Moneybird.'
      },
      {
        question: 'Is SnelStart geschikt als ik geen accountant heb?',
        answer: 'SnelStart is gebouwd voor samenwerking met accountants. Zonder accountant kan het minder ideaal zijn. Voor pure DIY boekhouden zijn pakketten zoals Jortt of e-Boekhouden beter geschikt.'
      },
      {
        question: 'Hoe zit het met support?',
        answer: 'SnelStart biedt telefonische support van 8:30-17:00 op werkdagen. Dit is een voordeel voor ondernemers die graag iemand aan de lijn hebben. Veel concurrenten bieden alleen email en chat.'
      }
    ],
    pricingDetails: 'SnelStart biedt vier pakketten: inOrde (€8,50 p/m), inStap (€14,50 p/m), inKaart (€20,50 p/m) en inBalans (€37,50 p/m). Daarnaast is er SnelStart Bankieren (€7,50 p/m). Alle prijzen zijn exclusief btw. 30 dagen gratis proefperiode beschikbaar. Automatisering en debiteurenbeheer zitten in hogere pakketten. Bij inKaart en inBalans worden 5 betaalrekeningen, betaalpas en rente op saldo genoemd. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
    ,
    idealFor: [
      'Ondernemers die intensief met hun accountant werken',
      'Vakgebonden bedrijven (construction, vastgoed, elektriciens)',
      'Ondernemers die graag telefonische support willen',
      'Bedrijven in branches waar SnelStart al \'the standard\' is'
    ]
  },
  {
    id: 'tellow',
    name: 'Tellow',
    logo: '/logos/tellow.png',
    monthlyPrice: 0,
    priceLabel: 'Gratis pakket, betaald vanaf €12,99 p/m excl. btw',
    priceExclBtw: true,
    trialPeriodDays: 14,
    targetAudience: ['zzp-service', 'starter'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: false },
    reviewScore: 8.6,
    reviewCount: 560,
    usp: 'Mobile-first & bankieren',
    description: 'Tellow is geschikt voor zzp\'ers en kleine ondernemers die bankieren en boekhouden willen combineren. Het pakket biedt een betaalrekening met Nederlandse IBAN, virtuele kaart, gratis fysieke pinpas, facturen, offertes, bonnen scannen, bankintegraties, automatische berekening btw-aangifte en een mobiele app. Pakketten: Gratis (€0), Basis (€12,99 p/m), Plus (€22,99 p/m), Compleet (€69,99 p/m). Alle betaalde prijzen exclusief 21% btw. 14 dagen niet-goed-geld-terug-garantie. Meerdere betaalrekeningen koppelen en onbeperkt gebruikers toevoegen zitten in Plus. Aandachtspunt: sommige functies zitten pas in hogere pakketten.',
    pros: [
      'Geïntegreerde betaalrekening (IBAN) - je bank EN je boekhoudadministratie zijn één',
      'Sterke mobiele app - ontworpen voor telefoon, niet aangepast vanuit web',
      'GPS rittenregistratie - geschikt voor ondernemers die veel onderweg zijn',
      'Snel en simpel - minimaal onderhoud en overhead in de administratie',
      'Real-time inzicht in je geld - in en uitkomsten zijn direct zichtbaar',
      'Integratie met Paysafe betaalterminals beschikbaar voor fysieke verkoop'
    ],
    cons: [
      'Beperkt als je groot je groeit en je eigen bank wilt bijhouden',
      'Minder desktop-focus - als je achter een bureau werkt is dit niet ideaal',
      'Multi-user alleen beschikbaar in Plus-pakket en hoger',
      'Minder geavanceerde rapportages voor serieuze boekhoudanalyse',
      'Nog relatief jong bedrijf - minder proven track record dan e-Boekhouden'
    ],
    bestFor: 'Mobiele ondernemers',
    website: 'https://www.tellow.nl',
    detailedReview: 'Tellow combineert bankieren en boekhouden in één mobile-first platform. Je krijgt een betaalrekening met Nederlandse IBAN, virtuele kaart en gratis fysieke pinpas. Er zijn vier pakketten: Gratis (€0), Basis (€12,99 p/m), Plus (€22,99 p/m) en Compleet (€69,99 p/m), alle betaalde prijzen exclusief 21% btw. In het Plus-pakket kun je meerdere betaalrekeningen koppelen en onbeperkt gebruikers toevoegen. De mobiele app is specifiek ontworpen voor telefoongebruik. GPS-rittenregistratie is beschikbaar voor ondernemers die veel onderweg zijn. 14 dagen niet-goed-geld-terug-garantie voor betaalde niveaus. Aandachtspunt: sommige functies zitten pas in hogere pakketten.',
    faqItems: [
      {
        question: 'Wat betekent "embedded finance" en waarom is dit handig?',
        answer: 'Embedded finance betekent dat je bank en boekhouding geïntegreerd zijn. Je krijgt een eigen IBAN zodat al je geld via Tellow loopt. Dit betekent dat je geen handmatige bankkoppelingen meer nodig hebt - je bank IS je boekhouding.'
      },
      {
        question: 'Kan ik Tellow gebruiken als ik mijn eigen bank wil houden?',
        answer: 'Tellow is speciaal ontworpen voor zijn eigen IBAN. Je kunt niet met je bestaande bankrekening werken. Dit is een bewuste keuze van Tellow om het proces te vereenvoudigen.'
      },
      {
        question: 'Hoe goed is de mobiele app echt?',
        answer: 'De Tellow app is specifiek ontworpen voor smartphones, niet aangepast vanuit een webversie. Veel ondernemers beheren hun hele administratie via de app.'
      },
      {
        question: 'Wat is die GPS rittenregistratie?',
        answer: 'Tellow kan automatisch GPS tracken welke afstanden je rijdt. Dit is handig voor ondernemers met kilometervergoeding (btw-voordeel). Geschikt voor loodgieters, elektriciens en andere ondernemers die veel onderweg zijn.'
      },
      {
        question: 'Is Tellow geschikt voor meerdereinvesteerders/partner?',
        answer: 'Onbeperkt gebruikers toevoegen zit in het Plus-pakket (€22,99 p/m excl. btw) en hoger. In het gratis en Basis-pakket is multi-user niet beschikbaar.'
      }
    ],
    pricingDetails: 'Tellow biedt vier pakketten: Gratis (€0), Basis (€12,99 p/m), Plus (€22,99 p/m) en Compleet (€69,99 p/m). Alle betaalde prijzen zijn exclusief 21% btw. Het gratis pakket bevat basisfuncties. In het Plus-pakket kun je meerdere betaalrekeningen koppelen en onbeperkt gebruikers toevoegen. 14 dagen niet-goed-geld-terug-garantie voor betaalde niveaus. Prijs kan wijzigen. Controleer altijd de aanbieder voor actuele tarieven.'
    ,
    idealFor: [
      'Mobiele ondernemers zoals bezoekers, loodgieters, en elektriciens',
      'Startups die minimaal administratieve overhead willen',
      'Eenmanszaken die hun hele bedrijf van telefoon willen runnen',
      'Ondernemers met fysieke verkoop die betaalterminal integratie willen'
    ]
  },
];

export type WizardAnswer = {
  isStarter: boolean;
  activity: 'service' | 'trade' | 'construction' | null;
  needsStock: boolean;
  bookkeeper: 'diy' | 'collaboration' | 'outsource' | null;
  features: string[];
};

export function calculateMatchScores(answers: WizardAnswer): { package: SoftwarePackage; score: number; label?: string }[] {
  const scores: Map<string, number> = new Map();
  softwarePackages.forEach(pkg => scores.set(pkg.id, 50));
  if (answers.isStarter) {
    scores.set('e-boekhouden', (scores.get('e-boekhouden') || 0) + 40);
    scores.set('tellow', (scores.get('tellow') || 0) + 20);
  }
  if (answers.activity === 'service') {
    scores.set('moneymonk', (scores.get('moneymonk') || 0) + 35);
    scores.set('moneybird', (scores.get('moneybird') || 0) + 25);
    scores.set('jortt', (scores.get('jortt') || 0) + 20);
    scores.set('exact-online', (scores.get('exact-online') || 0) - 15);
    scores.set('silvasoft', (scores.get('silvasoft') || 0) - 20);
  } else if (answers.activity === 'trade') {
    scores.set('silvasoft', (scores.get('silvasoft') || 0) + 35);
    scores.set('exact-online', (scores.get('exact-online') || 0) + 30);
    scores.set('moneymonk', (scores.get('moneymonk') || 0) - 30);
    if (answers.needsStock) {
      scores.set('silvasoft', (scores.get('silvasoft') || 0) + 20);
      scores.set('exact-online', (scores.get('exact-online') || 0) + 20);
    }
  } else if (answers.activity === 'construction') {
    scores.set('snelstart', (scores.get('snelstart') || 0) + 25);
    scores.set('e-boekhouden', (scores.get('e-boekhouden') || 0) + 15);
  }
  if (answers.bookkeeper === 'diy') {
    scores.set('jortt', (scores.get('jortt') || 0) + 30);
    scores.set('moneybird', (scores.get('moneybird') || 0) + 20);
  } else if (answers.bookkeeper === 'collaboration') {
    scores.set('snelstart', (scores.get('snelstart') || 0) + 35);
    scores.set('exact-online', (scores.get('exact-online') || 0) + 20);
    scores.set('e-boekhouden', (scores.get('e-boekhouden') || 0) + 15);
  }
  if (answers.features.includes('ritten')) {
    scores.set('tellow', (scores.get('tellow') || 0) + 25);
    scores.set('moneymonk', (scores.get('moneymonk') || 0) + 15);
  }
  if (answers.features.includes('app')) {
    scores.set('tellow', (scores.get('tellow') || 0) + 20);
    scores.set('moneybird', (scores.get('moneybird') || 0) + 15);
    scores.set('silvasoft', (scores.get('silvasoft') || 0) - 15);
  }
  const results = softwarePackages.map(pkg => ({
    package: pkg,
    score: Math.min(100, Math.max(0, scores.get(pkg.id) || 0)),
  }));
  results.sort((a, b) => b.score - a.score);
  const labeled = results.map((result, index) => {
    let label: string | undefined;
    if (index === 0) label = 'Hoogste match';
    else if (result.package.id === 'e-boekhouden' && answers.isStarter) label = 'Vaak gekozen door starters';
    else if (result.package.id === 'moneymonk' && answers.activity === 'service') label = 'Geschikt voor dienstverleners';
    else if (result.package.id === 'exact-online') label = 'Interessant bij groei';
    return { ...result, label };
  });
  return labeled;
}
