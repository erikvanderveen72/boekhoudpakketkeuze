export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  categoryLabel: string;
  icon: string;
  content: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqItems: { question: string; answer: string }[];
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'zelf-boekhouden-vs-boekhouder',
    title: 'Zelf Boekhouden vs. Boekhouder Inhuren',
    summary: 'Wanneer doe je het zelf en wanneer besteed je het uit? We zetten de voor- en nadelen op een rij.',
    category: 'tips',
    categoryLabel: 'Tips',
    icon: '💡',
    content: [
      'Een van de eerste keuzes die je als ondernemer maakt is: doe ik mijn boekhouding zelf, of besteed ik het uit aan een boekhouder? Het antwoord hangt af van je situatie, je kennis en hoeveel tijd je wilt besteden aan administratie.',
    ],
    sections: [
      {
        heading: 'Wanneer kun je het zelf doen?',
        paragraphs: [
          'Als ZZP\'er met een eenvoudige administratie (weinig facturen, geen personeel, geen voorraad) is zelf boekhouden vaak prima haalbaar. Moderne boekhoudpakketten begeleiden je stap voor stap door het proces: van facturen maken tot BTW-aangifte indienen.',
          'De kosten van een boekhoudpakket liggen tussen de €10 en €30 per maand, terwijl een boekhouder al snel €100 tot €300 per maand kost. Voor starters met een beperkt budget kan zelf boekhouden dus flink schelen.',
        ],
      },
      {
        heading: 'Wanneer heb je een boekhouder nodig?',
        paragraphs: [
          'Bij een BV-structuur, personeel, internationale handel of complexe fiscale situaties is een boekhouder vrijwel altijd aan te raden. Ook als je simpelweg geen zin of tijd hebt voor administratie, kan een boekhouder je veel stress besparen.',
          'Een goede tussenvorm is een boekhoudpakket gebruiken voor de dagelijkse administratie (facturen, bonnetjes, bankverwerking) en een boekhouder inschakelen voor de jaarrekening en belastingaangifte.',
        ],
      },
      {
        heading: 'Combinatie: het beste van twee werelden',
        paragraphs: [
          'Steeds meer ondernemers kiezen voor een hybride aanpak. Je doet de dagelijkse boekhouding zelf in een online pakket en geeft je boekhouder meekijktoegang. Zo houdt je de kosten laag en heb je toch professionele controle.',
          'Bijna alle moderne boekhoudpakketten bieden een accountantsportaal waar je boekhouder kan meekijken, correcties kan doen en de jaarrekening kan opstellen. Dit scheelt beide partijen veel tijd.',
        ],
      },
    ],
    faqItems: [
      { question: 'Is zelf boekhouden moeilijk?', answer: 'Met een goed boekhoudpakket is zelf boekhouden niet moeilijk. De software leidt je stap voor stap door het proces. Enige basiskennis van BTW en factureren is wel handig.' },
      { question: 'Hoeveel kost een boekhouder per maand?', answer: 'Een boekhouder kost gemiddeld €100 tot €300 per maand voor een ZZP\'er. Bij een BV of personeel kan dit oplopen tot €500 of meer per maand.' },
      { question: 'Kan ik later overstappen van zelf boekhouden naar een boekhouder?', answer: 'Ja, je kunt altijd overstappen. De meeste boekhoudpakketten bieden een auditfile-export die een boekhouder direct kan inlezen.' },
      { question: 'Mag ik als ZZP\'er zelf mijn BTW-aangifte doen?', answer: 'Ja, als ZZP\'er mag je zelf je BTW-aangifte doen. De meeste boekhoudpakketten berekenen automatisch je BTW en laten je de aangifte direct naar de Belastingdienst versturen.' },
      { question: 'Wat is een accountantsportaal?', answer: 'Een accountantsportaal is een speciale inlog in je boekhoudpakket voor je boekhouder. Hiermee kan de boekhouder meekijken, correcties doen en de jaarrekening opstellen zonder dat je gegevens hoeft te mailen.' },
    ],
  },
  {
    id: '2',
    slug: 'btw-aangifte-zelf-doen',
    title: 'BTW-aangifte Zelf Doen: Complete Handleiding',
    summary: 'Stap voor stap je BTW-aangifte indienen bij de Belastingdienst. Inclusief veelgemaakte fouten.',
    category: 'belastingen',
    categoryLabel: 'Belastingen',
    icon: '📊',
    content: [
      'De BTW-aangifte is voor veel ondernemers een terugkerend klusje. Meestal doe je dit per kwartaal, soms per maand. Met een boekhoudpakket is het proces grotendeels geautomatiseerd, maar het is goed om te begrijpen hoe het werkt.',
    ],
    sections: [
      {
        heading: 'Hoe werkt BTW-aangifte?',
        paragraphs: [
          'Als ondernemer breng je BTW in rekening bij je klanten (uitgaande BTW) en betaal je BTW over je inkopen (voorbelasting). Het verschil draag je af aan de Belastingdienst, of je krijgt geld terug als je meer BTW hebt betaald dan ontvangen.',
          'De aangifte doe je via Mijn Belastingdienst Zakelijk of rechtstreeks vanuit je boekhoudpakket. De meeste moderne pakketten bieden een directe koppeling met de Belastingdienst via SBR (Standard Business Reporting).',
        ],
      },
      {
        heading: 'Stap-voor-stap BTW-aangifte doen',
        paragraphs: [
          'Stap 1: Zorg dat alle facturen en bonnetjes zijn verwerkt in je boekhouding. Stap 2: Controleer of alle bedragen kloppen en de juiste BTW-tarieven zijn toegepast (0%, 9% of 21%). Stap 3: Genereer de BTW-aangifte in je boekhoudpakket. Stap 4: Controleer de berekende bedragen. Stap 5: Verstuur de aangifte naar de Belastingdienst.',
          'De deadline voor kwartaalaangifte is de laatste dag van de maand na het kwartaal. Dus voor Q1 (januari t/m maart) is de deadline 30 april. Te laat indienen kan leiden tot boetes.',
        ],
      },
      {
        heading: 'Veelgemaakte fouten bij BTW-aangifte',
        paragraphs: [
          'De meest voorkomende fouten zijn: het vergeten van bonnetjes (waardoor je te veel BTW afdraagt), het verkeerde BTW-tarief toepassen, en het niet meenemen van privégebruik van zakelijke goederen.',
          'Een ander veelvoorkomend probleem is het niet correct verwerken van BTW bij buitenlandse klanten of leveranciers. Bij handel binnen de EU gelden speciale regels zoals de verleggingsregeling (intracommunautaire prestaties).',
        ],
      },
    ],
    faqItems: [
      { question: 'Hoe vaak moet ik BTW-aangifte doen?', answer: 'De meeste ondernemers doen per kwartaal aangifte. Bij een omzet boven €25.000 BTW per jaar kan de Belastingdienst maandaangifte verplichten.' },
      { question: 'Wat gebeurt er als ik te laat ben met mijn BTW-aangifte?', answer: 'Bij te late aangifte kun je een boete krijgen. Deze begint bij €68 voor de eerste keer en kan oplopen bij herhaaldelijk te laat zijn.' },
      { question: 'Kan ik BTW terugvragen op zakelijke aankopen?', answer: 'Ja, als BTW-ondernemer mag je de BTW op zakelijke aankopen (voorbelasting) aftrekken. Bewaar altijd de factuur als bewijs.' },
      { question: 'Welke boekhoudpakketten versturen BTW-aangifte direct?', answer: 'De meeste pakketten in ons overzicht bieden directe BTW-aangifte via SBR, waaronder e-Boekhouden, MoneyMonk, Moneybird, Jortt en Exact Online.' },
      { question: 'Wat is de kleineondernemersregeling (KOR)?', answer: 'De KOR is een vrijstelling voor ondernemers met een omzet tot €20.000 per jaar. Je hoeft dan geen BTW te berekenen en aan te geven, maar kunt ook geen BTW terugvragen.' },
    ],
  },
  {
    id: '3',
    slug: 'starters-boekhouden-tips',
    title: 'Boekhouden voor Starters: 7 Essentiële Tips',
    summary: 'Alles wat je als startende ondernemer moet weten over je administratie.',
    category: 'tips',
    categoryLabel: 'Tips',
    icon: '🚀',
    content: [
      'Als je net begint als ondernemer kan de administratie overweldigend lijken. BTW, facturen, bonnetjes, bankafschriften — waar begin je? Met deze 7 tips leg je een stevige basis voor je boekhouding.',
    ],
    sections: [
      {
        heading: 'Tip 1-3: De basis op orde',
        paragraphs: [
          'Tip 1: Open een zakelijke bankrekening. Dit scheidt je privé- en zakelijke financiën, wat je administratie enorm vereenvoudigt. Tip 2: Kies direct een boekhoudpakket. Hoe eerder je begint met digitaal boekhouden, hoe minder inhaalwerk je later hebt. Veel pakketten bieden extra lange proefperiodes voor starters.',
          'Tip 3: Bewaar alle bonnetjes digitaal. Gebruik de scan-functie (OCR) van je boekhoudpakket om bonnetjes te fotograferen en automatisch te verwerken. Papieren bonnetjes vervagen na een paar maanden.',
        ],
      },
      {
        heading: 'Tip 4-5: Factureren en BTW',
        paragraphs: [
          'Tip 4: Leer welke gegevens verplicht op een factuur staan. Dit zijn onder andere: je KVK-nummer, BTW-nummer, factuurnummer, datum, omschrijving en het BTW-bedrag. Je boekhoudpakket vult dit automatisch in.',
          'Tip 5: Plan je BTW-aangifte in. Zet een herinnering in je agenda voor de deadline (laatste dag van de maand na het kwartaal). De meeste boekhoudpakketten sturen ook een herinnering.',
        ],
      },
      {
        heading: 'Tip 6-7: Slim werken',
        paragraphs: [
          'Tip 6: Koppel je bankrekening aan je boekhoudpakket via PSD2. Dit synchroniseert je transacties automatisch, waardoor je alleen nog hoeft te categoriseren in plaats van handmatig in te voeren.',
          'Tip 7: Reserveer maandelijks tijd voor je administratie. Een halfuurtje per week is voor de meeste ZZP\'ers voldoende. Laat het niet opbouwen tot het einde van het kwartaal — dat kost veel meer tijd en stress.',
        ],
      },
    ],
    faqItems: [
      { question: 'Welk boekhoudpakket is het beste voor starters?', answer: 'e-Boekhouden.nl is populair bij starters vanwege de 15 maanden gratis proefperiode. Moneybird en Jortt zijn ook goede opties door hun gebruiksgemak.' },
      { question: 'Moet ik als starter een boekhouder inhuren?', answer: 'Bij een eenvoudige ZZP-administratie is dat niet per se nodig. Een goed boekhoudpakket begeleidt je door het hele proces. Bij een BV is een boekhouder wel aan te raden.' },
      { question: 'Hoeveel tijd kost boekhouden per week?', answer: 'Voor de meeste ZZP\'ers is een halfuur per week voldoende als je je administratie bijhoudt. Met automatische bankkoppelingen en OCR-scanning gaat dit nog sneller.' },
      { question: 'Wat zijn de kosten van boekhouden voor een starter?', answer: 'Met een boekhoudpakket betaal je €10-30 per maand. Veel pakketten bieden gratis proefperiodes voor starters. De kosten zijn aftrekbaar als bedrijfskosten.' },
      { question: 'Welke zakelijke bankrekening is het beste voor starters?', answer: 'Populaire keuzes zijn Knab, Bunq Business en N26 Business. Let op de kosten en of je bank een PSD2-koppeling biedt met je boekhoudpakket.' },
    ],
  },
  {
    id: '4',
    slug: 'factureren-regels-nederland',
    title: 'Factuureisen Nederland: Wat Moet Op Een Factuur?',
    summary: 'Welke gegevens zijn verplicht op een factuur? Voorkom boetes met deze checklist.',
    category: 'administratie',
    categoryLabel: 'Administratie',
    icon: '📋',
    content: [
      'Een factuur moet aan wettelijke eisen voldoen. Ontbreken er gegevens, dan kan de Belastingdienst de BTW-aftrek weigeren bij je klant en kun je zelf een boete krijgen. Hieronder vind je alle verplichte gegevens.',
    ],
    sections: [
      {
        heading: 'Verplichte gegevens op een factuur',
        paragraphs: [
          'Elke factuur moet de volgende gegevens bevatten: je bedrijfsnaam en adres, het KVK-nummer, je BTW-identificatienummer (btw-id), de naam en het adres van je klant, een uniek en opeenvolgend factuurnummer, de factuurdatum, een duidelijke omschrijving van het geleverde product of de dienst, het aantal of de omvang, de prijs per eenheid exclusief BTW, het toegepaste BTW-tarief en het BTW-bedrag, en het totaalbedrag inclusief BTW.',
          'Bij de verleggingsregeling (BTW verlegd naar de afnemer) moet je dit vermelden op de factuur. Ook bij de kleineondernemersregeling (KOR) moet je aangeven dat je vrijgesteld bent van BTW.',
        ],
      },
      {
        heading: 'Veelgemaakte fouten op facturen',
        paragraphs: [
          'De meest voorkomende fouten zijn: een ontbrekend of onjuist BTW-nummer, geen opeenvolgende factuurnummers, een te vage omschrijving van de geleverde dienst, en het vergeten van het BTW-bedrag apart te vermelden.',
          'Een boekhoudpakket voorkomt de meeste van deze fouten automatisch. Het vult je bedrijfsgegevens in, genereert opeenvolgende factuurnummers en berekent de BTW. Je hoeft alleen de klant, omschrijving en bedrag in te vullen.',
        ],
      },
      {
        heading: 'Vereenvoudigde factuur',
        paragraphs: [
          'Voor bedragen onder de €100 inclusief BTW mag je een vereenvoudigde factuur sturen. Hierop hoef je minder gegevens te vermelden: je naam en adres, de datum, de omschrijving, het totaalbedrag inclusief BTW en het BTW-tarief volstaan.',
          'Dit is handig voor kleine kassabon-achtige situaties, maar voor de meeste ZZP\'ers is het slimmer om altijd een volledige factuur te sturen via je boekhoudpakket.',
        ],
      },
    ],
    faqItems: [
      { question: 'Moet mijn KVK-nummer op de factuur staan?', answer: 'Ja, je KVK-nummer is een verplicht gegeven op elke factuur. Je boekhoudpakket vult dit automatisch in als je het eenmalig instelt.' },
      { question: 'Wat is een vereenvoudigde factuur?', answer: 'Een vereenvoudigde factuur mag je sturen bij bedragen onder €100 inclusief BTW. Er hoeven minder gegevens op te staan dan op een reguliere factuur.' },
      { question: 'Hoelang moet ik facturen bewaren?', answer: 'Je bent verplicht je facturen 7 jaar te bewaren. Bij onroerend goed is dit zelfs 10 jaar. Digitale opslag in je boekhoudpakket is voldoende.' },
      { question: 'Mag ik een factuur met de hand schrijven?', answer: 'Ja, dat mag. Maar een digitale factuur via een boekhoudpakket is veel handiger: geen fouten, automatische BTW-berekening en directe verwerking in je administratie.' },
      { question: 'Wat als ik een fout op een verstuurde factuur ontdek?', answer: 'Stuur een creditfactuur om de oorspronkelijke factuur te corrigeren. Maak daarna een nieuwe, correcte factuur aan. Je boekhoudpakket kan dit voor je regelen.' },
    ],
  },
  {
    id: '5',
    slug: 'boekhoudpakket-kiezen-gids',
    title: 'Het Juiste Boekhoudpakket Kiezen: Complete Gids',
    summary: 'Hoe kies je het beste boekhoudpakket voor jouw situatie? We helpen je stap voor stap.',
    category: 'software',
    categoryLabel: 'Software',
    icon: '💻',
    content: [
      'Er zijn tientallen boekhoudpakketten op de Nederlandse markt. Hoe kies je het pakket dat perfect bij jouw bedrijf past? In deze gids helpen we je stap voor stap de juiste keuze te maken.',
    ],
    sections: [
      {
        heading: 'Stap 1: Bepaal je bedrijfstype',
        paragraphs: [
          'Het type bedrijf dat je hebt bepaalt voor een groot deel welk boekhoudpakket geschikt is. Een ZZP\'er in de dienstverlening heeft andere behoeften dan een webshop of een BV met personeel.',
          'Voor ZZP-dienstverleners zijn urenregistratie en projectbeheer belangrijk. Voor handelsbedrijven zijn voorraadbeheer en webshopkoppelingen essentieel. Voor BV\'s zijn meergebruikerstoegang en een accountantsportaal onmisbaar.',
        ],
      },
      {
        heading: 'Stap 2: Bepaal je must-have functies',
        paragraphs: [
          'Maak een lijstje van maximaal 3 functies die je echt nodig hebt. De belangrijkste functies om te overwegen zijn: bankkoppeling (PSD2) voor automatische transactieverwerking, Scan & Herken (OCR) voor bonnetjes, BTW-aangifte direct versturen, urenregistratie per project, mobiele app, en meerdere gebruikers.',
          'Gebruik onze vergelijkingstool om te filteren op functies. Zo zie je direct welke pakketten aan jouw eisen voldoen.',
        ],
      },
      {
        heading: 'Stap 3: Vergelijk en probeer',
        paragraphs: [
          'Kies 2-3 pakketten die aan je eisen voldoen en probeer ze gratis uit. Let daarbij op: hoe snel kun je een factuur maken? Is de interface overzichtelijk? Werkt de mobiele app goed? Hoe reageert de klantenservice?',
          'Neem de tijd om elk pakket minimaal een week te gebruiken voordat je beslist. De meeste gratis proefperiodes zijn lang genoeg om een goed beeld te krijgen. Na je proefperiode kun je eenvoudig overstappen als het niet bevalt.',
        ],
      },
    ],
    faqItems: [
      { question: 'Welk boekhoudpakket is het populairst in Nederland?', answer: 'Moneybird is qua gebruikersaantallen het populairst, gevolgd door e-Boekhouden.nl en Exact Online. Populariteit zegt echter niet alles — het beste pakket is het pakket dat bij jouw situatie past.' },
      { question: 'Kan ik later overstappen naar een ander pakket?', answer: 'Ja, alle pakketten bieden export-functies. De meeste zijn maandelijks opzegbaar. Overstappen kost wat tijd maar is altijd mogelijk.' },
      { question: 'Heb ik een boekhoudpakket nodig als ik een boekhouder heb?', answer: 'Een boekhoudpakket maakt de samenwerking met je boekhouder juist makkelijker. Je doet de dagelijkse administratie zelf en je boekhouder kijkt mee via het accountantsportaal.' },
      { question: 'Wat is het goedkoopste boekhoudpakket?', answer: 'Tellow biedt een gratis basispakket voor ZZP\'ers. e-Boekhouden.nl is 15 maanden gratis voor starters. Na proefperiodes beginnen betaalde pakketten vanaf ongeveer €10 per maand.' },
      { question: 'Is een duurder boekhoudpakket automatisch beter?', answer: 'Niet per se. Duurdere pakketten bieden meer functies, maar als je die niet nodig hebt, betaal je onnodig. Kies op basis van je werkelijke behoeften, niet op basis van prijs.' },
    ],
  },
  {
    id: '6',
    slug: 'zzp-administratie-checklist',
    title: 'ZZP Administratie Checklist 2026',
    summary: 'Alles wat je als zzp\'er moet bijhouden voor je administratie. Van facturen tot rittenregistratie.',
    category: 'administratie',
    categoryLabel: 'Administratie',
    icon: '✅',
    content: [
      'Als ZZP\'er ben je wettelijk verplicht een administratie bij te houden. Maar wat moet je precies bewaren en bijhouden? Deze checklist zorgt dat je niets vergeet en altijd klaar bent voor controle.',
    ],
    sections: [
      {
        heading: 'Dagelijkse administratie',
        paragraphs: [
          'De basis van je administratie bestaat uit: alle inkomende en uitgaande facturen, bonnetjes en kassabonnen van zakelijke uitgaven, bankafschriften (worden automatisch gesynchroniseerd via je boekhoudpakket), en offertes en contracten.',
          'Met een boekhoudpakket met bankkoppeling en OCR-scanning is dit grotendeels geautomatiseerd. Je hoeft alleen nog transacties te categoriseren en bonnetjes te scannen zodra je ze ontvangt.',
        ],
      },
      {
        heading: 'Periodieke administratie',
        paragraphs: [
          'Per kwartaal doe je BTW-aangifte (tenzij je onder de KOR valt). Jaarlijks moet je inkomstenbelastingaangifte doen. Heb je personeel? Dan komen daar maandelijkse loonaangiftes bij.',
          'Daarnaast is het slim om per kwartaal je debiteuren (openstaande facturen) te controleren, je kosten te reviewen op mogelijke besparingen, en je winst-en-verliesrekening te bekijken om te zien hoe je bedrijf ervoor staat.',
        ],
      },
      {
        heading: 'Extra registraties',
        paragraphs: [
          'Afhankelijk van je situatie moet je mogelijk ook bijhouden: een rittenregistratie als je zakelijk rijdt (voor autokosten of kilometervergoeding), een urenregistratie als je op uurbasis werkt, een voorraadadministratie als je producten verkoopt, en een personeelsadministratie als je werknemers hebt.',
          'Al deze registraties kun je bijhouden in je boekhoudpakket. De meeste pakketten bieden standaard urenregistratie en sommige ook rittenregistratie. Voor voorraadbeheer heb je een uitgebreider pakket nodig.',
        ],
      },
    ],
    faqItems: [
      { question: 'Hoelang moet ik mijn administratie bewaren?', answer: 'Je bent verplicht je administratie 7 jaar te bewaren. Dit geldt voor facturen, bonnetjes, contracten en bankafschriften. Bij onroerend goed is de bewaartermijn 10 jaar.' },
      { question: 'Wat als de Belastingdienst controle doet?', answer: 'Bij een boekenonderzoek moet je je volledige administratie kunnen tonen. Met een goed bijgehouden boekhoudpakket is dit geen probleem — alles staat digitaal klaar.' },
      { question: 'Moet ik papieren bonnetjes bewaren?', answer: 'Nee, digitale kopieën zijn sinds 2014 voldoende. Scan je bonnetjes met de OCR-functie van je boekhoudpakket en gooi het papier weg.' },
      { question: 'Heb ik een rittenregistratie nodig?', answer: 'Alleen als je zakelijke kilometers wilt aftrekken of een auto op de zaak hebt. Je kunt een rittenregistratie bijhouden in je boekhoudpakket of een aparte app gebruiken.' },
      { question: 'Wat is een fiscale bewaarplicht?', answer: 'De fiscale bewaarplicht verplicht ondernemers om alle administratieve gegevens minimaal 7 jaar te bewaren zodat de Belastingdienst deze kan controleren.' },
    ],
  },
];
