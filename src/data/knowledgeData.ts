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
      'Een van de eerste keuzes die je als ondernemer maakt is: doe ik mijn boekhouding zelf, of besteed ik het uit aan een boekhouder? Het antwoord hangt af van je situatie, je kennis, je budget en hoeveel tijd je wilt besteden aan administratie. Dit artikel helpt je een weloverwogen beslissing te nemen.',
    ],
    sections: [
      {
        heading: 'Wanneer kun je het zelf doen?',
        paragraphs: [
          'Als ZZP\'er met een eenvoudige administratie (weinig facturen, geen personeel, geen voorraad) is zelf boekhouden vaak prima haalbaar. Moderne boekhoudpakketten begeleiden je stap voor stap door het proces: van facturen maken tot BTW-aangifte indienen. Met online handvatten en video-tutorials leer je snel hoe alles werkt.',
          'De kosten van een boekhoudpakket liggen doorgaans tussen de €8 en €50 per maand, afhankelijk van het pakket en de functies. Sommige pakketten bieden een gratis instapniveau. Een boekhouder kost al snel €100 tot €300 per maand. Voor starters met een beperkt budget kan zelf boekhouden dus flink schelen.',
          'Zelf boekhouden geeft je ook direct inzicht in je financiële situatie. Je ziet real-time hoeveel je hebt verdiend, waar je geld naartoe gaat en wat je winst is. Dit helpt je betere zakelijke beslissingen te nemen. Bovendien ben je minder afhankelijk van anderen — je hebt volledige controle over je gegevens.',
          'Voor ondernemers die graag zelf controle willen houden en die geld willen besparen, kan zelf boekhouden passend zijn. Met iets van discipline en 30 minuten per week hou je je administratie up-to-date.',
        ],
      },
      {
        heading: 'Wanneer heb je een boekhouder nodig?',
        paragraphs: [
          'Bij bepaalde bedrijfsstructuren en situaties is een boekhouder vrijwel altijd aan te raden. Als je een BV hebt in plaats van eenmanszaak, moet je verplicht jaarrekeningen laten controleren. Bovendien zijn de vereisten veel complexer: consolidatie, fiscale structurering en compliance met wetgeving.',
          'Heb je personeel werkzaam in je bedrijf? Dan moet je maandelijks loonaangiftes doen, werkgeverslasten afstorten en jaarlijks jaarverslagen indienen. Dit is technisch ingewikkeld en fouten kunnen kostbaar zijn. Een boekhouder volgt alle regelgeving en zorgt dat alles op tijd wordt gedaan.',
          'Internationale handel of transacties zijn ook reden om een boekhouker in te schakelen. Bij export en import gelden speciale BTW-regels. Als je klanten in andere landen hebt of goederen invoert, word je snel vogelvrij zonder professionele begeleiding.',
          'Ook als je simpelweg geen zin of tijd hebt voor administratie kan een boekhouker je veel stress besparen. Veel ondernemers realiseren zich dat ze liever hun tijd besteden aan het runnen van hun bedrijf in plaats van administratie. Dat is een volkomen begrijpelijke keuze.',
        ],
      },
      {
        heading: 'Combinatie: het beste van twee werelden',
        paragraphs: [
          'Steeds meer ondernemers kiezen voor een hybride aanpak. Dit bleek uit een enquête van de KvK waar 64% van de respondenten zei dat ze liever zelf boekhouden met hulp van een professional. Je doet de dagelijkse boekhouding zelf in een online pakket en geeft je boekhouder meekijktoegang. Zo houdt je de kosten laag en heb je toch professionele controle.',
          'Bijna alle moderne boekhoudpakketten bieden een accountantsportaal waar je boekhouder kan meekijken, correcties kan doen en de jaarrekening kan opstellen. Dit scheelt beide partijen veel tijd. Je boekhouder hoeft niet handmatig alles in te voeren — die gegevens staan al in het systeem.',
          'De praktijk gaat zo: je voert dagelijks je facturen in, koppeert je bank automatisch en scant je bonnetjes met OCR. Je boekhouder bekijkt dit maandelijks, corrigeert waar nodig en stelt aan het einde van het jaar je jaarrekening op. Dit model kost veel minder dan volledige uitbesteding, maar geeft je wel professionele ondersteuning.',
          'Dit past bij ondernemers die graag wat zelf willen doen maar toch zekerheid willen hebben. Ook als je bedrijf groeit en ingewikkelder wordt, kun je geleidelijk meer werk naar je boekhouder verschuiven. Het systeem is flexibel en schaalt mee met je behoeften.',
        ],
      },
      {
        heading: 'Hoe kies je het juiste model voor jouw bedrijf?',
        paragraphs: [
          'Begin met jezelf deze vragen te stellen: Hoe groot is mijn bedrijf en hoe ingewikkeld is mijn administratie? Hoeveel uren per maand kan ik vrijmaken voor boekhouding? Wat is mijn budget? Heb ik personeel of internationale klanten? Het antwoord op deze vragen bepaalt welk model het beste past.',
          'Voor een eenvoudige ZZP in dienstverlening is zelf boekhouden meestal genoeg. Bijvoorbeeld een freelance schrijver met 5-10 klanten, geen personeel en geen voorraad. De kosten zijn minimaal en de administratie is overzichtelijk.',
          'Voor een webshop of handelszaak met voorraad, veel transacties en mogelijk internationale klanten is professionele hulp meer aan te raden. Ook als je omzet boven de €100.000 per jaar uitkomt, wordt zelf boekhouden lastiger en riskanter.',
          'Voor een BV of bedrijf met personeel is zelf boekhouden niet haalbaar. Hier moet je verplicht gecontroleerde jaarrekeningen hebben en zijn de regels veel strenger. Een boekhouder is hier een onvermijdelijke bedrijfskosten.',
        ],
      },
    ],
    faqItems: [
      { question: 'Is zelf boekhouden moeilijk?', answer: 'Met een goed boekhoudpakket is zelf boekhouden niet moeilijk. De software leidt je stap voor stap door het proces. Enige basiskennis van BTW en factureren is wel handig, maar je kunt dit leren via de tutorials van je pakket.' },
      { question: 'Hoeveel kost een boekhouder per maand?', answer: 'Een boekhouder kost gemiddeld €100 tot €300 per maand voor een ZZP\'er. Bij een BV of met personeel kan dit oplopen tot €500 of meer per maand. Dit hangt af van hoe ingewikkeld je administratie is.' },
      { question: 'Kan ik later overstappen van zelf boekhouden naar een boekhouder?', answer: 'Ja, je kunt altijd overstappen. De meeste boekhoudpakketten bieden een auditfile-export die een boekhouder direct kan inlezen. Er is dus geen probleem om later een professional in te huren.' },
      { question: 'Mag ik als ZZP\'er zelf mijn BTW-aangifte doen?', answer: 'Ja, als ZZP\'er mag je zelf je BTW-aangifte doen. De meeste boekhoudpakketten berekenen automatisch je BTW en laten je de aangifte direct naar de Belastingdienst versturen. Het is volledig legaal.' },
      { question: 'Wat is een accountantsportaal?', answer: 'Een accountantsportaal is een speciale inlog in je boekhoudpakket voor je boekhouder. Hiermee kan de boekhouder meekijken, correcties doen en de jaarrekening opstellen zonder dat je gegevens hoeft te mailen. Dit is veel veiliger en efficiënter.' },
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
      'De BTW-aangifte is voor veel ondernemers een terugkerend klusje. Meestal doe je dit per kwartaal, soms per maand. Met een boekhoudpakket is het proces grotendeels geautomatiseerd, maar het is goed om te begrijpen hoe het werkt en welke deadlines je moet naleven.',
    ],
    sections: [
      {
        heading: 'Hoe werkt BTW-aangifte?',
        paragraphs: [
          'Als ondernemer breng je BTW in rekening bij je klanten (uitgaande BTW) en betaal je BTW over je inkopen (voorbelasting). Het verschil draag je af aan de Belastingdienst, of je krijgt geld terug als je meer BTW hebt betaald dan ontvangen. Dit principle heet de netto BTW-betaling en is de basis van het hele systeem.',
          'De uitgaande BTW is de belasting die je klanten betalen. In Nederland zijn de meest gebruikelijke tarieven: 0% (voor bepaalde goederen en diensten), 9% (gereduceerd tarief voor bijvoorbeeld voeding) en 21% (standaard tarief voor meeste producten en diensten). Het 0%-tarief geldt bijvoorbeeld voor bepaalde voedingsmiddelen, medicijnen en boeken.',
          'De voorbelasting is de BTW die jij betaalt aan je leveranciers. Deze mag je aftrekken van je uitgaande BTW. Het verschil is wat je afdraagt aan de Belastingdienst. Dus: je ontvangt €1.000 + 21% BTW = €1.210 van je klant. Je betaalt aan leveranciers €500 + 21% BTW = €605. Je draagt af: €210 (uitgaande) - €105 (voorbelasting) = €105 aan de Belastingdienst.',
          'De aangifte doe je via Mijn Belastingdienst Zakelijk of rechtstreeks vanuit je boekhoudpakket. De meeste moderne pakketten bieden een directe koppeling met de Belastingdienst via SBR (Standard Business Reporting). Dit betekent dat je aangifte volledig digitaal wordt doorgestuurd zonder handmatige invoer.',
        ],
      },
      {
        heading: 'Stap-voor-stap BTW-aangifte doen',
        paragraphs: [
          'Stap 1: Zorg dat alle facturen en bonnetjes zijn verwerkt in je boekhouding. Dit is cruciaal. Als je transactie ontbreekt, is je aangifte onjuist. Controleer ook je bankafschrift: alle inkomsten en uitgaven moeten terechtkomen in je boekhoudpakket.',
          'Stap 2: Controleer of alle bedragen kloppen en de juiste BTW-tarieven zijn toegepast (0%, 9% of 21%). Veel fouten ontstaan doordat het verkeerde tarief wordt gebruikt. Bijvoorbeeld: als je als vaste leverancier goederen levert die onder het 9%-tarief vallen, zorg dat dit correct is ingesteld in je systeem.',
          'Stap 3: Genereer de BTW-aangifte in je boekhoudpakket. Je selecteert de periode (bijvoorbeeld Q1: januari t/m maart) en het pakket berekent automatisch het verschil tussen inkomende en uitgaande BTW. Controleer de berekende bedragen nog eens goed.',
          'Stap 4: Controleer de berekende bedragen. Print of download de aangifte en lees het door. Zijn er transacties die niet lijken te kloppen? Veel pakketten laten je ook zien welke facturen zijn meegenomen in de berekening.',
          'Stap 5: Verstuur de aangifte naar de Belastingdienst. In het boekhoudpakket klik je op "Verstuur aangifte" en deze gaat automatisch via SBR naar de Belastingdienst. Je ontvangt een bevestiging. Bewaar dit als bewijs.',
        ],
      },
      {
        heading: 'Deadlines en gevolgen van te late indiening',
        paragraphs: [
          'De deadline voor kwartaalaangifte is altijd de laatste dag van de maand na het kwartaal. Dus: Q1 (januari-maart) → deadline 30 april; Q2 (april-juni) → deadline 31 juli; Q3 (juli-september) → deadline 31 oktober; Q4 (oktober-december) → deadline 31 januari volgend jaar. Dit zijn harde deadlines — daar zijn geen uitzonderingen op.',
          'Te laat indienen kan leiden tot boetes. De minimumboete is €68 voor de eerste keer. Bij herhaaldelijk te laat zijn stijgt dit snel: tweede keer €100, derde keer €135. Bij zeer late indiening kan dit oplopen tot 10% van het verschuldigde BTW-bedrag, met een minimum van €500.',
          'Daarom is het slim om jezelf een herinnering in te stellen. De meeste boekhoudpakketten sturen ook automatisch een herinnering een week voor de deadline. Zet dit in je agenda zodat je nooit vergeet.',
          'Je hebt ook mogelijkheid om uitstel aan te vragen, maar dit moet je ruim voor de deadline doen bij de Belastingdienst. Dit wordt niet zomaar goedgekeurd — je moet een redelijke reden hebben. Normaal gesproken is het beter om op tijd in te dienen.',
        ],
      },
      {
        heading: 'Veelgemaakte fouten bij BTW-aangifte',
        paragraphs: [
          'De meest voorkomende fouten zijn: het vergeten van bonnetjes (waardoor je te veel BTW afdraagt), het verkeerde BTW-tarief toepassen, en het niet meenemen van privégebruik van zakelijke goederen. Bijvoorbeeld: je koopt een auto voor je bedrijf en rijdt ook privé mee. Die privé-kilometers mag je niet aftrekken als zakelijk.',
          'Een ander veelvoorkomend probleem is het niet correct verwerken van BTW bij buitenlandse klanten of leveranciers. Bij handel binnen de EU gelden speciale regels zoals de verleggingsregeling (intracommunautaire prestaties). Bij diensten naar landen buiten de EU gelden weer andere regels. Deze fouten kunnen heel duur uitvallen.',
          'Ook het niet registreren van nultarief-leveringen (zoals bepaalde voedingsmiddelen) leidt tot fouten. Je denkt geen BTW door te geven, maar vergeet dit op je factuur te vermelden. De Belastingdienst accepteert dit dan niet.',
          'Tot slot: veel ondernemers vergeten kleine transacties. Een kopje koffie voor €3,50 met bonnetje lijkt onbelangrijk, maar over een heel kwartaal kan dit uitlopen. Scan alle bonnetjes, ook de kleine.',
        ],
      },
    ],
    faqItems: [
      { question: 'Hoe vaak moet ik BTW-aangifte doen?', answer: 'De meeste ondernemers doen per kwartaal aangifte (4 keer per jaar). Bij een omzet boven €25.000 BTW per jaar kan de Belastingdienst maandaangifte verplichten (12 keer per jaar). Dit is ingevoerd ter bestrijding van fraude.' },
      { question: 'Wat gebeurt er als ik te laat ben met mijn BTW-aangifte?', answer: 'Bij te late aangifte krijg je een automatische boete. Deze begint bij €68 voor de eerste keer en stijgt naar €100 en €135 bij herhaaldelijk te laat zijn. Zeer laat indienen (meer dan 6 maanden) kan oplopen tot 10% van het verschuldigde bedrag.' },
      { question: 'Kan ik BTW terugvragen op zakelijke aankopen?', answer: 'Ja, als BTW-ondernemer mag je de BTW op zakelijke aankopen (voorbelasting) aftrekken. Je moet wel een factuur hebben die voldoet aan alle eisen. Bewaar altijd de originele factuur als bewijs.' },
      { question: 'Welke boekhoudpakketten versturen BTW-aangifte direct?', answer: 'Bijna alle moderne pakketten in ons overzicht bieden directe BTW-aangifte via SBR, waaronder e-Boekhouden, MoneyMonk, Moneybird, Jortt, Exact Online, Snelstart en Twinfield. Dit scheelt je handmatige invoer in Mijn Belastingdienst.' },
      { question: 'Wat is de kleineondernemersregeling (KOR)?', answer: 'De KOR is een vrijstelling voor ondernemers met een omzet tot €20.000 per jaar. Je hoeft dan geen BTW te berekenen en aan te geven, maar kunt ook geen BTW terugvragen op je aankopen. Dit kun je aanvragen bij de Belastingdienst.' },
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
      'Als je net begint als ondernemer kan de administratie overweldigend lijken. BTW, facturen, bonnetjes, bankafschriften — waar begin je? Met deze 7 tips leg je een stevige basis voor je boekhouding en vermijd je dure fouten later.',
    ],
    sections: [
      {
        heading: 'Tip 1-3: De basis op orde',
        paragraphs: [
          'Tip 1: Open een zakelijke bankrekening. Dit scheidt je privé- en zakelijke financiën, wat je administratie enorm vereenvoudigt. Je kunt niet zomaar je privérekening gebruiken voor zakelijke transacties — de Belastingdienst kijkt hier erg kritisch naar. Een zakelijke rekening kost meestal €5-15 per maand, wat je terug betaalt door te besparen op administratietijd. Bovendien: zonder afzonderlijke bankrekening accepteert de Belastingdienst je administratie niet als je wordt gecontroleerd.',
          'Tip 2: Kies direct een boekhoudpakket. Hoe eerder je begint met digitaal boekhouden, hoe minder inhaalwerk je later hebt. Veel pakketten bieden extra lange proefperiodes voor starters: e-Boekhouden geeft 15 maanden gratis, wat je flink kan sparen. Start nu al, niet later — het enige wat je nodig hebt is je facturen en bonnetjes.',
          'Tip 3: Bewaar alle bonnetjes digitaal. Gebruik de scan-functie (OCR) van je boekhoudpakket om bonnetjes te fotograferen en automatisch te verwerken. OCR (Optical Character Recognition) herkent automatisch het bedrag, de datum en de leverancier. Papieren bonnetjes vervagen na een paar maanden en zijn moeilijk terug te vinden. Digitaal bewaren bespaart je ontzettend veel tijd.',
          'Deze drie stappen vormen de basis. Zonder goede scheiding van rekeningen, zonder goede software en zonder correct bewaarde bonnetjes zit je als starter al snel in de problemen. Richt dit meteen goed in.',
        ],
      },
      {
        heading: 'Tip 4-5: Factureren en BTW',
        paragraphs: [
          'Tip 4: Leer welke gegevens verplicht op een factuur staan. Dit zijn onder andere: je bedrijfsnaam en adres, je KVK-nummer, BTW-nummer (als je BTW-ondernemer bent), factuurnummer, datum, omschrijving van de dienst/goederen, aantal/hoeveelheid, prijs per eenheid, het BTW-tarief (0%, 9% of 21%), het BTW-bedrag apart vermeld, en het totaal inclusief BTW. Je boekhoudpakket vult het meeste automatisch in als je het eenmalig instelt.',
          'Tip 5: Plan je BTW-aangifte in. Zet een herinnering in je agenda voor de deadline (laatste dag van de maand na het kwartaal). De deadlines zijn: Q1 → 30 april; Q2 → 31 juli; Q3 → 31 oktober; Q4 → 31 januari. Veel fouten ontstaan doordat starters te laat indienen en vervolgens boetes krijgen. De meeste boekhoudpakketten sturen automatisch een herinnering, maar zet het ook jezelf in.',
          'Factureren is niet alleen belangrijk voor je administratie — het is ook cruciaal voor je cashflow. Als je klanten factures stuurt en je betalingscondities goed aangeeft (bijvoorbeeld "betaal binnen 14 dagen"), weet je beter wat je te wachten staat financieel.',
          'Ook belangrijk: maak een sjabloon met je vaste gegevens. Dit bespaart je veel tijd en voorkomt fouten. Kopieer je sjabloon voor elke nieuwe factuur.',
        ],
      },
      {
        heading: 'Tip 6-7: Slim werken met technologie',
        paragraphs: [
          'Tip 6: Koppel je bankrekening aan je boekhoudpakket via PSD2. Dit synchroniseert je transacties automatisch, waardoor je alleen nog hoeft te categoriseren in plaats van handmatig in te voeren. PSD2 (Payment Services Directive 2) is een Europese verplichting die zorgt dat je bank je gegevens veilig kan delen met je boekhoudpakket. Dit scheelt je minstens 4-5 uur per maand.',
          'Tip 7: Reserveer maandelijks tijd voor je administratie. Een halfuurtje per week is voor de meeste ZZP\'ers voldoende als je je administratie up-to-date houdt. Laat het niet opbouwen tot het einde van het kwartaal — dan heb je ineens 10-15 uur werk en veel stress. Ook: de Belastingdienst accepteert administratie slecht op dat moment — het moet actueel zijn.',
          'Gebruik ook je mobiele telefoon slim. Veel boekhoudpakketten hebben een app waarmee je ter plekke bonnetjes kunt scannen. Zit je in een restaurant en krijg je de bon? Scan hem meteen in plaats van hem in je tas te stoppen en te vergeten.',
          'Tot slot: maak gebruik van automatisering. Veel boekhoudpakketten bieden regels waarmee je transacties automatisch categoriseren. Zo kun je instellen dat alle transacties naar je internetprovider automatisch onder "telefoon en internet" worden gecategoriseerd.',
        ],
      },
      {
        heading: 'Starten: de eerste weken',
        paragraphs: [
          'Je eerste weken als ondernemer zijn het meest kritiek. Zorg dat je directe stappen neemt: 1) Open een zakelijke bankrekening (dit duurt 1-3 werkdagen). 2) Kies en installeer een boekhoudpakket (dit duurt 1-2 uur). 3) Voer je basisgegevens in (bedrijfsnaam, adres, KVK, BTW-nummer). 4) Koppel je bankrekening (dit duurt 10 minuten).',
          'Daarna: begin meteen met je eerste facturen en bonnetjes in te voeren. Zorg dat je niks mist. Veel starters beginnen op het verkeerde moment — ze wachten tot ze "klaar zijn" met opzetten. Maar administratie moet van dag 1 gebeuren, anders bouw je schuld op.',
          'Ook handig: meld jezelf gelijk aan bij de Belastingdienst als je dat nog niet hebt gedaan. Dit duurt ongeveer 2 weken. Je ontvangt dan je BTW-nummer. Voor veel boekhoudpakketten heb je dit nodig om BTW-aangifte in te dienen.',
          'Als je dit goed aanpakt in je eerste weken, ben je voor de rest van je ondernemerscarrière veel minder stress kwijt.',
        ],
      },
    ],
    faqItems: [
      { question: 'Welk boekhoudpakket is het beste voor starters?', answer: 'e-Boekhouden.nl is populair bij starters vanwege de 15 maanden gratis proefperiode en gemak van gebruik. Moneybird en Jortt zijn ook goede opties door hun gebruiksgemak en goede support. Voor heel kleine starters is het gratis Tellow pakket een optie.' },
      { question: 'Moet ik als starter een boekhouder inhuren?', answer: 'Bij een eenvoudige ZZP-administratie is dat niet per se nodig. Een goed boekhoudpakket begeleidt je door het hele proces. Zodra je een BV opricht of personeel gaat aannemen, wordt een boekhouder wel praktisch noodzakelijk.' },
      { question: 'Hoeveel tijd kost boekhouden per week?', answer: 'Voor de meeste ZZP\'ers is een halfuur per week voldoende als je je administratie bijhoudt. Met automatische bankkoppelingen en OCR-scanning gaat dit nog sneller — soms 15 minuten per week.' },
      { question: 'Wat zijn de kosten van boekhouden voor een starter?', answer: 'Met een boekhoudpakket betaal je doorgaans €8-50 per maand, afhankelijk van het pakket. Sommige pakketten bieden een gratis instapniveau of lange gratis proefperiode. Deze kosten zijn aftrekbaar als bedrijfskosten. Als je een boekhouder inhuurt, ben je gauw €100-300 per maand kwijt.' },
      { question: 'Welke zakelijke bankrekening is het beste voor starters?', answer: 'Populaire keuzes zijn Knab (gratis), Bunq Business (€9/maand) en N26 Business (€10/maand). Let op de kosten en of je bank PSD2 ondersteunt voor koppeling met je boekhoudpakket. De meeste grote banken bieden dit wel.' },
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
      'Een factuur moet aan wettelijke eisen voldoen. Ontbreken er gegevens, dan kan de Belastingdienst de BTW-aftrek weigeren bij je klant en kun je zelf een boete krijgen. Hieronder vind je alle verplichte gegevens en praktische tips voor correct factureren.',
    ],
    sections: [
      {
        heading: 'Verplichte gegevens op een factuur',
        paragraphs: [
          'Elke factuur moet de volgende verplichte gegevens bevatten: je bedrijfsnaam en adres, je KVK-nummer (voor herkenning), je BTW-identificatienummer (btw-id), de naam en het adres van je klant, een uniek en opeenvolgend factuurnummer, de factuurdatum, een duidelijke omschrijving van het geleverde product of de dienst, het aantal of de omvang van het product/dienst, de prijs per eenheid exclusief BTW, het van toepassing zijnde BTW-tarief en het BTW-bedrag apart vermeld, en het totaalbedrag inclusief BTW.',
          'Dit zijn de minimale vereisten volgens de BTW-richtlijn. Als één van deze gegevens ontbreekt of onjuist is, accepteert de Belastingdienst je factuur niet. Dit leidt niet direct tot een boete, maar je klant kan de BTW niet aftrekken — dus je klant kan boos worden.',
          'Bij de verleggingsregeling (BTW verlegd naar de afnemer) moet je dit duidelijk vermelden op de factuur. Ook bij de kleineondernemersregeling (KOR) moet je aangeven dat je vrijgesteld bent van BTW. Dit zijn speciale situaties, maar belangrijk als ze op je van toepassing zijn.',
          'Een goede praktijk is om al je factuurnummers opeenvolgend nummeren. Dus: 001, 002, 003, etc. Of: 2026-001, 2026-002 (met jaar). Dit voorkomt verwarring en helpt je overzicht te behouden. Jump in factuurnummers (bijvoorbeeld van 005 naar 010) roept vragen op bij de Belastingdienst.',
        ],
      },
      {
        heading: 'Veelgemaakte fouten op facturen',
        paragraphs: [
          'De meest voorkomende fout is een ontbrekend of onjuist BTW-nummer. Je BTW-nummer is verplicht op elke factuur. Dit nummer krijg je van de Belastingdienst als je je aanmeldt. Het formaat is NL12345678B01 (voor eenmanszaken). Controleer dit dubbel — één foutieve letter en je factuur wordt niet geaccepteerd.',
          'Een volgende veel gemaakte fout: geen opeenvolgende factuurnummers. Veel starters gebruiken willekeurige nummers, wat rood licht doet branden bij controles. De Belastingdienst gaat ervan uit dat je alle facturen registreert — gaten in de nummering suggereren dat je gegevens verbergt.',
          'Ook veel voorkomend: een te vage omschrijving van de geleverde dienst. "Diensten" of "Consultancy" is te vaag. Je moet duidelijk maken wat je hebt gedaan. Bijvoorbeeld: "Advies digitale marketing — 5 uur à €100/uur" is veel beter dan alleen "Advies".',
          'Tot slot: het vergeten van het BTW-bedrag apart te vermelden. Je mag niet alleen het totaal inclusief BTW weergeven — je moet het bedrag ZONDER BTW en het BTW-BEDRAG apart tonen. Veel te snel vergeten, maar cruciaal. Een boekhoudpakket doet dit automatisch.',
        ],
      },
      {
        heading: 'Vereenvoudigde factuur',
        paragraphs: [
          'Voor bedragen onder de €100 inclusief BTW mag je een vereenvoudigde factuur sturen. Hierop hoef je veel minder gegevens te vermelden: alleen je naam en adres, de datum, een korte omschrijving, het totaalbedrag inclusief BTW en het BTW-tarief volstaan.',
          'Dit is handig voor kleine kassabon-achtige situaties. Bijvoorbeeld: je verkoopt kleine spulletjes via je webshop en elke bestelling is onder de €100. Dan kun je vereenvoudigde facturen sturen.',
          'Voor de meeste ZZP\'ers is het slimmer om altijd een volledige factuur te sturen via je boekhoudpakket. Dit is professioneler en voorkomt verwarring. Vereenvoudigde facturen zijn eigenlijk vooral interessant voor horeca en retail met veel kleine transacties.',
          'Let op: ook vereenvoudigde facturen moeten duidelijk en correct zijn. Ze worden net zo streng gecontroleerd als volledige facturen. De "vereenvoudiging" zit alleen in de hoeveelheid informatie, niet in de nauwkeurigheid.',
        ],
      },
      {
        heading: 'Digitale en elektronische facturering',
        paragraphs: [
          'Je mag facturen zowel in papier als digitaal versturen. Digitale facturen zijn eigenlijk te prefereren — minder risico op verlies, makkelijker op te slaan en automatisch in te voeren in je boekhouding.',
          'Voor grote bedrijven (omzet >€10 miljoen) is B2B-elektronische facturering verplicht. Dit gaat via e-invoicing standaarden zoals e-INVOICE of UBL. Voor ZZP\'ers is dit niet verplicht, maar veel grote klanten vragen erom. Je boekhoudpakket kan dit meestal regelen.',
          'Zorg dat je digitale facturen duidelijk zijn. PDF is het standaard formaat. Stuur ze via je boekhoudpakket of e-mail, niet via gratis file-sharing services — dit ziet er unprofessioneel uit.',
          'Ook belangrijk: bewaar alle verzonden facturen. Je bent verplicht dit 7 jaar te doen. Een boekhoudpakket bewaart dit automatisch.',
        ],
      },
    ],
    faqItems: [
      { question: 'Moet mijn KVK-nummer op de factuur staan?', answer: 'Ja, je KVK-nummer is een verplicht gegeven op elke factuur. Je boekhoudpakket vult dit automatisch in als je het eenmalig instelt. Zonder KVK-nummer accepteert de Belastingdienst je factuur niet.' },
      { question: 'Wat is een vereenvoudigde factuur?', answer: 'Een vereenvoudigde factuur mag je sturen bij bedragen onder €100 inclusief BTW. Er hoeven minder gegevens op te staan. Voor de meeste ZZP\'ers is een volledige factuur echter te prefereren omdat dit professioneler overkomt.' },
      { question: 'Hoelang moet ik facturen bewaren?', answer: 'Je bent verplicht je facturen 7 jaar te bewaren. Bij onroerend goed is dit zelfs 10 jaar. Digitale opslag in je boekhoudpakket is volledig voldoende — papieren originals zijn niet meer nodig sinds 2014.' },
      { question: 'Mag ik een factuur met de hand schrijven?', answer: 'Ja, dat mag technisch gezien. Maar een digitale factuur via een boekhoudpakket is veel handiger: geen fouten, automatische BTW-berekening en directe verwerking in je administratie. Hand geschreven facturen zien er ook minder professioneel uit.' },
      { question: 'Wat als ik een fout op een verstuurde factuur ontdek?', answer: 'Stuur een creditfactuur om de oorspronkelijke factuur te corrigeren. Dit is eigenlijk een factuur met negatieve bedragen. Maak daarna een nieuwe, correcte factuur aan. Je boekhoudpakket kan dit voor je regelen.' },
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
      'Er zijn tientallen boekhoudpakketten op de Nederlandse markt. Hoe kies je het pakket dat perfect bij jouw bedrijf past? In deze gids helpen we je stap voor stap de juiste keuze te maken door je bedrijfstype, behoeften en budget te analyseren.',
    ],
    sections: [
      {
        heading: 'Stap 1: Bepaal je bedrijfstype',
        paragraphs: [
          'Het type bedrijf dat je hebt bepaalt voor een groot deel welk boekhoudpakket geschikt is. Een ZZP\'er in de dienstverlening heeft andere behoeften dan een webshop of een BV met personeel.',
          'Voor ZZP-dienstverleners zijn urenregistratie en projectbeheer belangrijk. Je wilt zien hoeveel uur je aan welke klant hebt gewerkt. Voor handelsbedrijven zijn voorraadbeheer en webshopkoppelingen essentieel. Je moet je voorraad up-to-date houden en orders van je shop automatisch in je administratie krijgen.',
          'Voor BV\'s zijn meergebruikerstoegang en een accountantsportaal belangrijk. Je boekhouder moet kunnen meekijken en correcties kunnen doen. Ook rapporten en analyses zijn belangrijk.',
          'Denk je dit goed door: wat zijn je unieke behoeften? Niet wat je denkt nodig te hebben, maar wat je écht nodig hebt.',
        ],
      },
      {
        heading: 'Stap 2: Bepaal je must-have functies',
        paragraphs: [
          'Maak een lijstje van maximaal 3 functies die je echt nodig hebt. Dit helpt je de keuze te beperken. De belangrijkste functies om te overwegen zijn: bankkoppeling (PSD2) voor automatische transactieverwerking, Scan & Herken (OCR) voor bonnetjes, BTW-aangifte direct versturen naar de Belastingdienst, urenregistratie per project, mobiele app, meergebruikerstoegang, voorraadbeheer, e-commercekoppelingen (Shopify, WooCommerce), facturering en salesrepresentation.',
          'Bankkoppeling via PSD2 is eigenlijk voor bijna iedereen een must. Dit scheelt je ontzettend veel tijd — je transacties worden automatisch gedownload en hoef je alleen nog te categoriseren. OCR (bonnetje scannen) scheelt ook heel veel tijd, vooral als je veel onkosten hebt.',
          'BTW-aangifte direct versturen betekent dat je de aangifte niet handmatig hoeft in te voeren op Mijn Belastingdienst. Je klikt op "verstuur" en het pakket stuurt alles automatisch via SBR (Standard Business Reporting). Dit scheelt administratieve fouten.',
          'Gebruik onze vergelijkingstool op onze website om te filteren op functies. Zo zie je direct welke pakketten aan jouw eisen voldoen en hoef je niet tientallen pakketten handmatig te checken.',
        ],
      },
      {
        heading: 'Stap 3: Vergelijk en probeer',
        paragraphs: [
          'Kies 2-3 pakketten die aan je eisen voldoen en probeer ze gratis uit. Let daarbij op: hoe snel kun je een factuur maken? Is de interface overzichtelijk? Werkt de mobiele app goed? Hoe reageert de klantenservice? Is er Nederlandse support?',
          'Neem de tijd om elk pakket minimaal een week te gebruiken voordat je beslist. De meeste gratis proefperiodes zijn lang genoeg om een goed beeld te krijgen. Vul je eerste transacties in, maak een factuur, test de BTW-aangifte. Dit geeft je het beste inzicht.',
          'Na je proefperiode kun je eenvoudig overstappen als het niet bevalt. Alle pakketten bieden export-functies en zijn meestal maandelijks opzegbaar. Geen lange contracten nödig.',
          'Ook handig: lees reviews op onafhankelijke sites. Maar let op — negatieve reviews kunnen van concurrenten komen. Kijk naar het aantal reviews en of de feedback realistisch is. De beste test is jezelf proberen.',
        ],
      },
      {
        heading: 'Stap 4: Budget en lange termijn',
        paragraphs: [
          'Maak een budgetplan voor het eerste jaar en daarna. De meeste pakketten bieden gratis proefperiodes (soms maanden), dus je eerste jaar kan goedkoop zijn. Let op: veel starters kiezen een goedkoop pakket, maar zeggen al snel op omdat het niet goed genoeg is. Kies iets wat je echt nodig hebt.',
          'Houd ook rekening met groei. Wat nodig je vandaag, kan al snel niet genoeg zijn over 6 maanden. Sommige pakketten bieden goede "upgrade paths" — je kunt gemakkelijk naar een betaald plan gaan of naar meer gebruikers. Dit is belangrijk voor je long-term planning.',
          'Ook belangrijk: exportmogelijkheden. Als je later van pakket wilt switchen, moet dit makkelijk kunnen. Alle serieuze pakketten bieden dit, maar check van tevoren.',
          'Denk ook aan verborgen kosten: ondersteuning, training, integraties. Sommige pakketten rekenen voor alles. Dit kan snel duur worden.',
        ],
      },
    ],
    faqItems: [
      { question: 'Welk boekhoudpakket is het populairst in Nederland?', answer: 'Moneybird is qua gebruikersaantallen het populairst, gevolgd door e-Boekhouden.nl en Exact Online. Populariteit zegt echter niet alles — het beste pakket is het pakket dat bij jouw situatie en wensen past.' },
      { question: 'Kan ik later overstappen naar een ander pakket?', answer: 'Ja, alle serieuze pakketten bieden export-functies. De meeste zijn maandelijks opzegbaar. Overstappen kost wat tijd (enkele uren tot een dag) maar is altijd mogelijk. De gegevens kunnen meestal direct worden ingelezen in het nieuwe systeem.' },
      { question: 'Heb ik een boekhoudpakket nodig als ik een boekhouder heb?', answer: 'Een boekhoudpakket maakt de samenwerking met je boekhouder juist makkelijker en goedkoper. Je doet de dagelijkse administratie zelf en je boekhouder kijkt mee via het accountantsportaal. Dit is efficiënter dan alles handmatig door te geven.' },
      { question: 'Wat is het goedkoopste boekhoudpakket?', answer: 'Tellow biedt een gratis basispakket voor ZZP\'ers. e-Boekhouden.nl is 15 maanden gratis voor starters. Na proefperiodes beginnen betaalde pakketten vanaf ongeveer €10 per maand. Sommige pakketten bieden nog goedkoper abonnementen voor kleine bedrijven.' },
      { question: 'Is een duurder boekhoudpakket automatisch beter?', answer: 'Niet per se. Duurdere pakketten bieden meer functies en schalen beter voor grote bedrijven. Maar als je die functies niet nodig hebt, betaal je onnodig veel. Kies op basis van je werkelijke behoeften, niet op basis van prijs alleen.' },
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
      'Als ZZP\'er ben je wettelijk verplicht een administratie bij te houden. Maar wat moet je precies bewaren en bijhouden? Deze checklist zorgt dat je niets vergeet en altijd klaar bent voor controle door de Belastingdienst.',
    ],
    sections: [
      {
        heading: 'Dagelijkse administratie',
        paragraphs: [
          'De basis van je administratie bestaat uit: alle inkomende en uitgaande facturen (voor jezelf en voor je klanten), bonnetjes en kassabonnen van zakelijke uitgaven, bankafschriften (worden automatisch gesynchroniseerd via je boekhoudpakket met PSD2), en offertes en contracten ter ondersteuning.',
          'Met een boekhoudpakket met bankkoppeling en OCR-scanning is dit grotendeels geautomatiseerd. Je hoeft alleen nog transacties te categoriseren en bonnetjes te scannen zodra je ze ontvangt. Dit voorkomt dat je dingen vergeet.',
          'De dagelijkse routine zou moeten zijn: 1) Elke dag: factor als je deze verstuurt; 2) Een paar keer per week: bonnetjes scannen; 3) Maandelijks: controleer of alles klopt. Niet meer dan dat is nodig.',
          'Zorg dat je alle facturen nummert en opeenvolgend houdt. Gaten in factuurnummering roepen vragen op bij de Belastingdienst. Ook al verzend je van mei naar oktober niets — de nummers moeten opeenvolgend zijn.',
        ],
      },
      {
        heading: 'Periodieke administratie',
        paragraphs: [
          'Per kwartaal doe je BTW-aangifte (tenzij je onder de KOR valt of maandaangifte bent verplicht). De deadlines zijn: Q1 (jan-mrt) → 30 april; Q2 (apr-jun) → 31 juli; Q3 (jul-sep) → 31 oktober; Q4 (okt-dec) → 31 januari. Dit zijn harde deadlines — zet ze in je agenda.',
          'Jaarlijks moet je inkomstenbelastingaangifte doen (meestal tussen mei en juni). Dit is belangrijk — dit bepaalt je belastingbetaling. Heb je personeel? Dan komen daar maandelijkse loonaangiftes bij (volledig ander verhaal, veel ingewikkelder).',
          'Daarnaast is het slim om per kwartaal je debiteuren (openstaande facturen) te controleren. Wie heeft nog niet betaald? Stuur herinneringen. Ook: controleer je kosten op mogelijke besparingen. En kijk op je winst-en-verliesrekening om te zien hoe je bedrijf ervoor staat financieel.',
          'Deze periodieke controles nemen elk 30-60 minuten in beslag per kwartaal. Het scheelt je later veel tijd en problemen als je dit netjes bijhoudt.',
        ],
      },
      {
        heading: 'Extra registraties',
        paragraphs: [
          'Afhankelijk van je situatie moet je mogelijk ook bijhouden: een rittenregistratie als je zakelijk rijdt (voor autokosten of kilometervergoeding), een urenregistratie als je op uurbasis werkt, een voorraadadministratie als je producten verkoopt, en een personeelsadministratie als je werknemers hebt.',
          'Rittenregistratie is belangrijk als je je auto wilt aftrekken als bedrijfskosten. Je houdt bij: wanneer, vanaf waar, naar waar, hoeveel kilometer, doel van de rit. Je mag dit digitaal doen in je boekhoudpakket of in een apart app. Een simpel notitieboekje of Excel is ook legaal, maar digitaal is handiger.',
          'Urenregistratie per project is cruciaal als je op uurbasis werkt. Dit helpt je ook om te zien waar je tijd naar toe gaat. Veel boekhoudpakketten hebben dit ingebouwd. Als je het echt nodig hebt, kun je ook Toggl of Clockify gebruiken.',
          'Voorraadbeheer (voor winkeliers, webshops) is ingewikkelder. Je moet je voorraad waarderen en vast stellen wat je hebt. Dit kan in je boekhoudpakket, maar ook in Shopify of een ander voorradsysteem. Koppel dit met je boekhouding.',
        ],
      },
      {
        heading: 'Archivering en bewaarplichten',
        paragraphs: [
          'Je bent verplicht je administratie 7 jaar te bewaren. Dit geldt voor: facturen (in- en uitgaand), bonnetjes, contracten, bankafschriften, betalingsbewijzen, correspondentie met klanten/leveranciers en alle andere bedrijfsdocumenten. Bij onroerend goed is de bewaartermijn 10 jaar.',
          'Digitale kopieën zijn sinds 2014 volledig voldoende. Je hoeft papieren originals niet meer te bewaren. Scan alles goed in (OCR werkt het best) en gooi het papier weg. Dit scheelt veel ruimte.',
          'Zorg wel voor goede beveiliging. Bewaar je gegevens in de cloud (je boekhoudpakket doet dit automatisch) of op een externe drive. Eén harde schijf in je huis is niet voldoende — wat als het huis brandt?',
          'Bij een boekenonderzoek (controle door de Belastingdienst) moet je alles kunnen tonen. Met goed bijgehouden digitale administratie is dit geen probleem — je klikt een paar keer en alles staat er.',
        ],
      },
    ],
    faqItems: [
      { question: 'Hoelang moet ik mijn administratie bewaren?', answer: 'Je bent verplicht je administratie 7 jaar te bewaren. Dit geldt voor facturen, bonnetjes, contracten en bankafschriften. Bij onroerend goed is de bewaartermijn 10 jaar. Digitale opslag in je boekhoudpakket is volledig voldoende.' },
      { question: 'Wat gebeurt er als de Belastingdienst controle doet?', answer: 'Bij een boekenonderzoek moet je je volledige administratie kunnen tonen. Met een goed bijgehouden boekhoudpakket is dit geen probleem — alles staat digitaal klaar en is gemakkelijk te raadplegen en uit te printen.' },
      { question: 'Moet ik papieren bonnetjes bewaren?', answer: 'Nee, digitale kopieën zijn sinds 2014 voldoende. Scan je bonnetjes met de OCR-functie van je boekhoudpakket en gooi het papier weg. Dit is volledig legaal en scheelt veel ruimte.' },
      { question: 'Heb ik een rittenregistratie nodig?', answer: 'Alleen als je zakelijke kilometers wilt aftrekken of een auto op de zaak hebt. Je kunt een rittenregistratie bijhouden in je boekhoudpakket of een aparte app gebruiken. Dit is niet verplicht, maar wel handig voor je bedrijfskosten.' },
      { question: 'Wat is een fiscale bewaarplicht?', answer: 'De fiscale bewaarplicht verplicht ondernemers om alle administratieve gegevens minimaal 7 jaar te bewaren zodat de Belastingdienst deze kan controleren. Dit is een wettelijke verplichting.' },
    ],
  },
  {
    id: '7',
    slug: 'bankkoppeling-psd2',
    title: 'Bankkoppeling PSD2: Hoe Werkt Het?',
    summary: 'Automatische banktransacties in je boekhouding via PSD2-koppeling. Hoe werkt het en waarom is het essentieel?',
    category: 'software',
    categoryLabel: 'Software',
    icon: '🏦',
    content: [
      'PSD2-bankkoppeling is een van de handigste functies van moderne boekhoudpakketten. Je bankrekening wordt automatisch gesynchroniseerd, waardoor je handmatige invoer voorkomen kan. Maar hoe werkt dit eigenlijk en hoe zet je het op?',
    ],
    sections: [
      {
        heading: 'Wat is PSD2 en waarom bestaat het?',
        paragraphs: [
          'PSD2 staat voor Payment Services Directive 2. Dit is een Europese regelgeving die sinds 2021 van kracht is. Het doel: zorgen dat je als consument en ondernemer betere controle hebt over je bankgegevens en dat je deze veilig kunt delen met andere partijen.',
          'Vóór PSD2 kon je je boekhoudpakket niet direct koppelen met je bank. Je moest zelf al je transacties handmatig invoeren, wat enorm veel tijd kostte en fouten introduceerde. Nu kan je bankgegevens automatisch in je administratiesysteem terechtkomen.',
          'PSD2 verplicht banken om hun gegevens beschikbaar te stellen aan gekwalificeerde derden (zoals boekhoudpakketten). Dit gebeurt via sterke encryptie en verificatie, dus je bankgegevens blijven veilig. Je bank ziet precies welke gegevens je deelt en met wie.',
          'Het voordeel voor jou: je hoeft niet meer handmatig al je transacties in te voeren. Dit scheelt je minstens 5-10 uur per maand, afhankelijk van hoe veel transacties je hebt.',
        ],
      },
      {
        heading: 'Hoe stel je PSD2-koppeling in?',
        paragraphs: [
          'De setup is meestal heel simpel. In je boekhoudpakket zoek je naar "Bankrekening toevoegen" of "PSD2-koppeling". Je klikt op "Koppel mijn bank". Het pakket vraagt dan naar je bank (Rabobank, ING, ABN AMRO, SNS Bank, etc.) en je login-gegevens.',
          'Vervolgens word je doorgestuurd naar je bank. Hier log je in met je normale bankinloggegevens en autoriseer je het boekhoudpakket om je transacties op te halen. Dit is een veilige verbinding — je bank en je boekhoudpakket spreken met elkaar, niet je computers.',
          'Na autorisatie stuur je terug naar je boekhoudpakket. Dit synchroniseert alle transacties van de afgelopen periode (meestal 3-6 maanden). Daarna worden transacties automatisch gedownload, meestal dagelijks of eens per 2 dagen.',
          'Je hoeft je logingegevens niet op te slaan in je boekhoudpakket — die blijven alleen bij de bank. Dit is veel veiliger dan vroeger, toen je logingegevens in het boekhoudpakket werden opgeslagen.',
        ],
      },
      {
        heading: 'Wat kun je ermee doen na koppeling?',
        paragraphs: [
          'Na koppeling ziet je boekhoudpakket alle inkomende en uitgaande transacties van je bankrekening. Je hoeft ze niet handmatig in te voeren — ze staan daar al. Je taak is nu om ze te categoriseren.',
          'Dit betekent: voor elke transactie bepaal je: is dit inkomsten, zijn dit onkosten, en onder welke categorie valt dit? Je boekhoudpakket kan dit deels automatiseren. Bijvoorbeeld: alle transacties naar je internetprovider worden automatisch onder "telefoon en internet" gezet.',
          'De automatiese categorisering werkt steeds beter dankzij kunstmatige intelligentie. Nadat je eenmalig hebt aangegeven dat een bepaalde leverancier "telefoon en internet" is, onthoudt je pakket dit. Na verloop van tijd hoef je steeds minder handmatig aan te passen.',
          'Een groot voordeel: je ziet nu ook automatisch welke facturen nog niet zijn betaald. De transactie staat niet in je bankrekening, dus het boekhoudpakket kan je daar op wijzen. Dit helpt bij het incasseren van openstaande facturen.',
        ],
      },
      {
        heading: 'Welke banken ondersteunen PSD2?',
        paragraphs: [
          'Vrijwel alle Nederlandse banken ondersteunen nu PSD2. Dit geldt voor: Rabobank, ING, ABN AMRO, SNS Bank, Bunq, Wise, Knab, ASN Bank, Triodos Bank, N26 en veel andere. Als je bank niet in je boekhoudpakket staat, ga je direct naar je bank en autoriseer je de app vanuit je bankingstoftware.',
          'Grote banken die nog niet volledig ondersteund zijn, bieden alternatieve verbindingen aan. Bunq beispielsweise biedt een eigen API aan. Knab en andere fintech-banken zijn meestal sneller met PSD2-ondersteuning.',
          'Is je bank heel klein of specialized? Dan is het mogelijk dat je geen PSD2-koppeling hebt. In dat geval kun je je bankafschriften meestal handmatig downloaden als CSV of SWIFT-bestand, en deze in je boekhoudpakket importeren. Dit is niet ideaal, maar wel mogelijk.',
          'Check altijd of je bank en je boekhoudpakket together werken voordat je je aanmeldt. De meeste grote combinaties worden ondersteund, maar er zijn uitzonderingen.',
        ],
      },
      {
        heading: 'Veiligheid van PSD2-koppeling',
        paragraphs: [
          'PSD2 is veel veiliger dan de oude manier van bankgegevens delen. Je dient je logingegevens nooit in bij je boekhoudpakket. In plaats daarvan word je automatisch doorgestuurd naar je bank (via een beveiligde verbinding) waar je zelf inlogt.',
          'De verbinding tussen bank en boekhoudpakket is versleuteld en gebruikt tweerichtingsverificatie. Dit betekent dat ze elkaar verifiëren voordat ze gegevens uitwisselen. Dit voorkomt phishing en man-in-the-middle attacks.',
          'Je kunt de koppeling op elk moment verbreken. Je bank heeft een interface waar je kunt zien welke apps/services toegang hebben tot je bankgegevens. Je kunt dit op elk moment intrekken.',
          'De Belastingdienst accepteert PSD2-koppelingen volledig. Transacties die via PSD2 zijn binnengehaald, zijn even geldig als handmatig ingevoerde transacties. Het is volledig legaal.',
        ],
      },
    ],
    faqItems: [
      { question: 'Is PSD2-koppeling veilig?', answer: 'Ja, PSD2 is veel veiliger dan de oudere methoden. Je logingegevens gaan nooit naar je boekhoudpakket — je logt in bij je bank zelf. De verbinding is versleuteld en beide systemen verifiëren elkaar. Je kunt de koppeling op elk moment stopzetten.' },
      { question: 'Hoeveel tijd bespaar ik met PSD2-koppeling?', answer: 'Veel ondernemers besparen 5-10 uur per maand. Je hoeft niet meer handmatig al je transacties in te voeren. Je hoeft alleen nog te categoriseren, wat de meeste pakketten deels automatiseren.' },
      { question: 'Welke boekhoudpakketten ondersteunen PSD2?', answer: 'Bijna alle Nederlandse boekhoudpakketten ondersteunen PSD2. Dit geldt voor: Moneybird, e-Boekhouden, Jortt, Snelstart, Exact Online, Twinfield, en Tellow. Check je pakket om zeker te zijn.' },
      { question: 'Wat als mijn bank PSD2 niet ondersteunt?', answer: 'Alle grote Nederlandse banken ondersteunen PSD2. Kleine of buitenlandse banken misschien niet. In dat geval kun je je bankafschrift meestal als bestand (CSV/OFX) downloaden en importeren in je boekhoudpakket. Dit is minder handig, maar wel mogelijk.' },
      { question: 'Hoe vaak wordt mijn bankrekening gesynchroniseerd?', answer: 'Dit hangt af van je boekhoudpakket. De meeste synchroniseren dagelijks, enkele doen dit eens per 2 dagen. Je ziet meestal dezelfde dag of de volgende dag je nieuwe transacties in je administratie.' },
    ],
  },
  {
    id: '8',
    slug: 'urenregistratie-zzp',
    title: 'Urenregistratie voor ZZP\'ers: Beste Werkwijze',
    summary: 'Hoe hou je bij hoeveel uur je aan welke klant werkt? Tips en tools voor effectieve urenregistratie.',
    category: 'tips',
    categoryLabel: 'Tips',
    icon: '⏱',
    content: [
      'Als ZZP\'er op uurbasis werken betekent dat je je uren goed moet registreren. Dit helpt je niet alleen bij facturering, maar geeft je ook inzicht in je productiviteit en winstgevendheid per project. We leggen uit hoe je dit het beste doet.',
    ],
    sections: [
      {
        heading: 'Waarom is urenregistratie belangrijk?',
        paragraphs: [
          'Urenregistratie dient meerdere doeleinden. Ten eerste: je kunt correct factureren. Als je per uur rekent, moet je weten hoeveel uur je hebt gewerkt. Je kunt deze uren dan op de factuur zetten als bewijs van je werkzaamheden.',
          'Ten tweede: het geeft inzicht in je winstgevendheid per project. Sommige klanten zijn veel lucratiever dan anderen — urenregistratie laat dit zien. Misschien werk je 10 uur per week voor klant A en verdien je daar €1.500 (€150/uur), maar werk je 15 uur voor klant B en verdien je daar maar €900 (€60/uur). Dit inzicht is goud waard.',
          'Ten derde: het helpt je bij planning. Hoe veel uur heb je beschikbaar? Hoeveel klanten kun je redelijk bedienen? Urenregistratie laat dit helder zien.',
          'Ten vierde: de Belastingdienst accepteert urenregistratie als bewijs voor je inkomsten. Als je zegt dat je 100 uur per maand werkt tegen €100/uur, moet je dit kunnen aantonen. Urenregistratie is het bewijs.',
        ],
      },
      {
        heading: 'Waar registreer je je uren?',
        paragraphs: [
          'Veel boekhoudpakketten hebben urenregistratie ingebouwd. Moneybird, e-Boekhouden, Jortt en anderen bieden een module waar je per dag je uren per project invoert. Dit is handig omdat het direct gekoppeld is aan je facturering — je klikt een paar keer en een factuur is gemaakt.',
          'Als je boekhoudpakket dit niet heeft, kun je specialized tools gebruiken zoals Toggl Track, Clockify of Harvest. Deze tools zijn gespecialiseerd in urenregistratie en zijn often makkelijker te gebruiken dan de boekhoudpakket versie. Ze exporteren je uren naar je boekhoudpakket of je kunt ze handmatig invoeren op je factuur.',
          'Het simpelste is een spreadsheet (Excel, Google Sheets). Voordeel: het is gratis en flexibel. Nadeel: je moet manually alle uren overzetten naar je factuur. Dit is foutgevoelig.',
          'Bij veel cloud-tools kun je ook direct de kloktijd registreren. Je start een timer als je begint met werken en stopt deze als je klaar bent. Dit is veel nauwkeuriger dan aan het einde van de dag je uren in te vullen.',
        ],
      },
      {
        heading: 'Hoe zet je urenregistratie correct op?',
        paragraphs: [
          'Stap 1: definieer je projecten of klanten. Voor elke klant maak je een apart project aan. Bijvoorbeeld: "Advisering Marketing voor Acme Corp" of "Content schrijven voor CMS Bedrijf X".',
          'Stap 2: bepaal je uurtarief per project. Dit kan per klant verschillen. Klanten die veel uren bestellen, kunnen je iets goedkoper doen. Andere klanten, specialistischer werk, verdient meer per uur.',
          'Stap 3: begin elke werkdag met urenregistratie. Idealiter: start je timer zodra je begint te werken. Stoppen zodra je klaar bent. Dit geeft de meest nauwkeurige gegevens.',
          'Stap 4: aan het einde van de week of maand: exporteer je uren. Je boekhoudpakket of time-tracking tool genereert een rapport. Controleer dit op fouten of gaten.',
          'Stap 5: maak je factuur. Je voert de uren in (je tool kan dit automatiseren) en stelt de factuur op. Veel pakketten doen dit automatisch: 40 uur × €100/uur = €4.000.',
        ],
      },
      {
        heading: 'Best practices en tips',
        paragraphs: [
          'Start je registratie meteen. Veel ZZP\'ers denken: "Ik herinner me wel wat ik heb gewerkt". Dit werkt niet. Aan het einde van de maand ben je 5-10 uur uren kwijt die je vergeten bent. Registreer dus direct.',
          'Gebruik een aparte project per klant, niet één project "alles". Dit helpt je de winstgevendheid per klant te zien. Ook: klanten vinden het professioneel als je ze per project factuurt.',
          'Hou ervan om pauzes af te trekken. Je werkt van 9:00-17:00, maar je pauzeert van 12:00-13:00. Dan zijn het 7 uren, niet 8. Dit is correcter.',
          'Weekly review: bekijk je urenregistratie elke vrijdag. Controleer op fouten, gaten of vergeten uren. Dit is veel makkelijker dan maandelijks 20 uur inhalen.',
          'Als je veel uren hebt met improductieve tijd (vergaderingen, e-mails, administratie), maak je hier ook aparte projecten voor. Niet alles hoef je te factureren, maar je wilt wel weten hoeveel tijd dit kost.',
          'Communiceer je uren met je klanten. Veel klanten willen een gedetailleerd rapport van je uren. Dit bouwt vertrouwen op. "40 uur aan consultancy" is ok, maar "week 1: 8 uur requirement gathering, week 2: 12 uur design, week 3: 15 uur implementation, week 4: 5 uur testing" is veel duidelijker.',
        ],
      },
    ],
    faqItems: [
      { question: 'Moet ik urenregistratie doen als ik ZZP\'er ben?', answer: 'Het is niet verplicht, maar sterk aan te raden. Het helpt je met correct factureren, inzicht in winstgevendheid en je kan het aan klanten laten zien. Ook: de Belastingdienst accepteert urenregistratie als bewijs van je inkomsten.' },
      { question: 'Hoeveel uur per dag moet ik registreren?', answer: 'Dit hangt af van je klanten. Veel ZZP\'ers werken 6-8 uur per dag aan factureerbare werk. De rest gaat op naar administratie, marketing en zelfontwikkeling. Registreer wat je werkelijk factuurtijd is.' },
      { question: 'Wat is een redelijk uurtarief als ZZP\'er?', answer: 'Dit hangt sterk af van je specialisatie. Diensten variëren van €40-€80 per uur, specialistische werk van €80-€200+ per uur. Kijk naar wat je collega\'s vragen en wat je waarde is.' },
      { question: 'Moet ik een factuur maken per uur gewerkt?', answer: 'Nee, meestal groepeer je je uren per maand of per project. Je maakt één factuur per klant per maand met al je uren. Dit is veel praktischer dan honderden kleine facturen.' },
      { question: 'Welke urenregistratie tool raden jullie aan?', answer: 'Als je boekhoudpakket het kan, gebruik dat. Anders: Toggl Track (gratis en betaald) of Clockify (veel functies, gratis optie) zijn populair. Harvest is goed als je ook projectbeheer nodig hebt.' },
    ],
  },
  {
    id: '9',
    slug: 'boekhoudpakket-webshop',
    title: 'Boekhoudpakket voor Webshop: Waar Let Je Op?',
    summary: 'Hoe kies je het juiste boekhoudpakket voor je webshop? Welke functies zijn essentieel?',
    category: 'software',
    categoryLabel: 'Software',
    icon: '🛍',
    content: [
      'Als je een webshop runt, heb je andere behoeften dan een ZZP\'er in dienstverlening. Orders moeten automatisch in je administratie terechtkomen, voorraad moet bijgehouden worden, verzendgegevens moeten synchroniseren. We leggen uit waar je op moet letten.',
    ],
    sections: [
      {
        heading: 'Waarom een "gewoon" boekhoudpakket niet volstaat',
        paragraphs: [
          'Een standaard boekhoudpakket kan technisch gezien werken voor een webshop. Je hoeft alleen handmatig je orders in te voeren als facturen. Maar dit is enorm veel werk, foutgevoelig en tijdverspilling.',
          'Met 10 orders per dag moet je al 300 facturen per maand handmatig invoeren. Dit kost minstens 3-4 uur per week. Met een geintegeerd systeem gebeurt dit automatisch.',
          'Voorraadbeheer is nog ingewikkelder. Als je 100 producten verkoopt en 50 daarvan per maand, hoe weet je wat je nog in voorraad hebt? Een standaard boekhoudpakket kan dit niet.',
          'BTW-tareven verschillen ook per land. Als je in meerdere landen verkoopt, moet je automatisch de juiste BTW berekenen. Dit kan handmatig niet.',
        ],
      },
      {
        heading: 'Essentiële integratief voor webshops',
        paragraphs: [
          'Shopify-integratie: als je op Shopify runt, wil je dat je bestellingen automatisch in je administratie terechtkomen. De integratie lekt orders als klant, product, bedrag en verzendadres door naar je boekhoudpakket. Je hoeft dit niet handmatig in te voeren.',
          'WooCommerce-integratie: hetzelfde voor WordPress-shops. Orders moeten automatisch gesynchroniseerd worden.',
          'Voorraadbeheer: je pakket moet kunnen bijhouden hoeveel van elk product je in voorraad hebt. Dit moet real-time, zodat je niet overbookt.',
          'Multi-currency: als je internationaal verkoopt, moet je pakket automatisch valuta conversie doen en de juiste BTW toepassen per land.',
          'Verzendintegratie: als je via PostNL, DPD of Sendcloud verzend, wil je dat het pakket de verzendgegevens synchroniseert. Dan weet je hoeveel je hebt betaald aan verzending.',
          'Retourneringen: als klanten iets retourneren, moet dit automatisch in je administratie opgenomen worden. Creditfacturen moeten automatisch gegenereerd worden.',
        ],
      },
      {
        heading: 'Boekhoudpakketten met webshop-mogelijkheden',
        paragraphs: [
          'Exact Online: groot pakket met alle mogelijkheden. Integreert met Shopify, WooCommerce en andere platforms. Voorraadbeheer ingebouwd. Helaas prijzig (€100-300+ per maand). Geschikt voor grotere webshops.',
          'Moneybird: populair, integreert met Shopify en WooCommerce. Basaal voorraadbeheer. Goede prijs-kwaliteit verhouding. Geschikt voor kleine tot middelgrote webshops.',
          'Snelstart: Nederlandse pakket, goed voorraadbeheer, integreert met Shopify. Prijs redelijk (€50-100/maand). Goed voor beginnende webshops.',
          'Twinfield (Wolters Kluwer): groot pakket, zeer robuust. Integreert met alles. Maar complex en duur. Voor professionele operaties.',
          'Lightspeed: eigenlijk een POS- en voorraadbeheer systeem met boekhoudintegratie. Heel goed voor fysieke winkels met online component. Prijzig.',
          'Shopify Plus partner tools: als je op Shopify runt, zijn er gespecialiseerde apps (Glew, Bold, TripleWhale). Deze kunnen orders automatisch exporteren naar je boekhoudpakket. Dit gecombineerd met Moneybird werkt prima.',
        ],
      },
      {
        heading: 'Praktische checklist voor webshop-software',
        paragraphs: [
          'Controleer het volgende: 1) Integreert het pakket met je webshop-platform (Shopify, WooCommerce, enz)? 2) Worden orders automatisch geïmporteerd? 3) Worden voorraadhoeveelheden bijgehouden? 4) Kunnen retours automatisch verwerkt worden? 5) Zijn multi-currency en auto-valutaconversie ingebouwd? 6) Werkt het met je verzendpartner?',
          'Test alles in een proefperiode: 1) Importeer enkele test-orders. 2) Controleer of alle velden kloppen. 3) Maak een factuur en check of die correct is. 4) Controleer voorraadbeheer: voeg product toe, verlaag voorraad, zeg het pakket moet je waarschuwen als je onder het minimum gaat.',
          'Ook belangrijk: 1) Hoe ziet je rapportage eruit? Kun je zien welke producten het meest winst geven? 2) Kun je je gegevens eenvoudig exporteren? 3) Is er Nederlands support? 4) Hoe gaat het met meerdere gebruikers werken (jij, eventueel een accountant)?',
          'Voor webshops in groei is het belangrijk dat je pakket meegroeit. Start slim, niet voor-optimaliseerd. Maar zorg wel dat je later kan upgraden zonder je hele systeem te moeten wijzigen.',
        ],
      },
    ],
    faqItems: [
      { question: 'Kan ik Shopify met een standaard boekhoudpakket gebruiken?', answer: 'Ja technisch, maar het is veel werk. Je moet orders handmatig invoeren. Veel beter is een pakket dat native Shopify-integratie biedt, zoals Moneybird, Snelstart of Exact Online. Dit gebeurt automatisch.' },
      { question: 'Hoe gaat voorraadbeheer in boekhoudpakketten?', answer: 'Boekhoudpakketten hebben basis voorraadbeheer. Je zet een artikel aan met hoeveelheid in voorraad. Als je een factuur maakt, daalt de voorraad. Geavanceerde voorraadbeheer (multi-locatie, automatische herordering) is beter in specialized tools.' },
      { question: 'Kan ik mijn webshop en fysieke winkel in hetzelfde pakket?', answer: 'Ja, als je dat wil. Maar veel gebruiken een POS-systeem (zoals Lightspeed of Vend) voor de fysieke winkel en koppelen dit met hun boekhoudpakket. Dit is vaak handiger.' },
      { question: 'Hoeveel kost boekhoudpakket software voor webshops?', answer: 'Van €10-20/maand (Moneybird Basic) tot €300+/maand (Exact Online Premium). Voor de meeste kleine tot middelgrote webshops is €30-80/maand voldoende.' },
      { question: 'Wat als mijn webshop-platform niet direct integreert?', answer: 'Je kunt usually een middleware-tool gebruiken (Zapier, IFTTT) om orders door te geven. Of je exporteert handmatig orders als CSV en importeert die. Niet ideaal, maar mogelijk.' },
    ],
  },
  {
    id: '10',
    slug: 'inkomstenbelasting-ondernemers',
    title: 'Inkomstenbelasting voor Ondernemers',
    summary: 'Hoe werkt inkomstenbelasting? Wat moet je betalen en hoe bereken je het?',
    category: 'belastingen',
    categoryLabel: 'Belastingen',
    icon: '💰',
    content: [
      'Inkomstenbelasting is waarschijnlijk de belangrijkste belasting voor ondernemers. Je betaalt hierover je winst. Maar hoe werkt het en hoe bereken je het? We leggen het uit in eenvoudige termen.',
    ],
    sections: [
      {
        heading: 'Hoe werkt inkomstenbelasting?',
        paragraphs: [
          'Inkomstenbelasting is een belasting op je winst (niet op je omzet). Dit is belangrijk: je betaalt geen belasting over €100.000 omzet als je €95.000 aan kosten had. Je betaalt alleen over je winst van €5.000.',
          'De berekening gaat als volgt: Omzet (alles wat je verdiend) - Kosten (alles wat je hebt betaald) = Winst. Over die winst betaal je inkomstenbelasting. De belastingtarief hangt af van hoe veel winst je hebt. Dit gaat in stappen (progressief).',
          'Voor 2026 (richtingen) zijn de tarieven ongeveer: 0-20.000 euro: 19,5%; 20.000-50.000 euro: 41,5%; 50.000-100.000 euro: 49,5%; boven 100.000 euro: 49,5%. Dit zijn vereenvoudigde nummers — de werkelijke berekening is ingewikkelder met allerlei aftrekposten.',
          'Je betaalt inkomstenbelasting in twee tranches: in het jaar zelf (belastingavancements), en je doet aangifte in het volgende jaar (mei-juni). De Belastingdienst vergelijkt wat je hebt betaald met wat je werkelijk verschuldigd bent en stuurt je een naheffing (moet je extra betalen) of restitutie (je krijgt geld terug).',
        ],
      },
      {
        heading: 'Wat mag je aftrekken?',
        paragraphs: [
          'Dit is cruciaal: veel kostvan ondernemers weten niet wat ze allemaal mogen aftrekken. Hoe minder je aftrekkt, hoe meer belasting je betaalt. Hier zijn de voornaamste aftrekposten.',
          'Bedrijfskosten: kantoor spullen, computer, bureau, etc. Huur van kantoor (of een deel van je huis). Abonnementen (boekhoudpakket, telefoon, internet). Reiskosten (auto, openbaar vervoer voor zakelijke reizen). Promotie en reclame. Opleidingen en cursussen. Veel van dit kan je volledig aftrekken.',
          'Auto: als je zakelijk rijdt, kun je je auto aftrekken. Je kunt kiezen: 1) werkelijke kosten (benzine, onderhoud, versicherung), 2) de kilometer vergoeding van je bedrijf, of 3) de fiscale vergoeding van €0,19 per kilometer (dit is meestal het voordeligst). Je moet dit wel goed registreren met een rittenregistratie.',
          'Thuiskantoor: werk je thuis? Dan mag je een deel van je huur/hypotheek aftrekken. De regel: 1/7 deel van je huis-kosten per maand (dus ongeveer 15% als je 1 kamer van 7 als kantoor gebruikt). Ook nutzen (elektriciteit, water) kun je deels aftrekken.',
          'Personeel: lonen, sociale lasten, verzekeringen. Maar dit moet correct via de loonadministratie verlopen.',
          'Rente op zakelijke leningen: als je je bedrijf hebt gefinancierd met een lening, kun je de rente aftrekken.',
          'Afschrijvingen: dure spullen (computer, auto, machines) schrijf je af over meerdere jaren. Dit geeft je jaarlijks aftrek.',
        ],
      },
      {
        heading: 'Zelfstandigenaftrek',
        paragraphs: [
          'De zelfstandigenaftrek is een speciale aftrek voor ondernemers. Dit is ongeveer €5.000-7.000 per jaar (exact bedrag wisselt). Dit geeft je automatische belastingvoordeel — je hoeft hier niks voor te doen.',
          'Dit betekent: je mag €5.000 winst aftrekken zonder dit te verantwoorden met bonnetjes. Dit is bedoeld om het ondernemerschap te stimuleren.',
          'In combinatie met andere aftrekposten kun je flink besparen. Veel ZZP\'ers hebben eigenlijk heel weinig belasting te betalen dankzij deze aftrek en hun werkelijke kosten.',
        ],
      },
      {
        heading: 'Hoe doe je inkomstenbelastingaangifte?',
        paragraphs: [
          'Stap 1: Verzamel je gegevens. Dit zijn je omzet (alle inkomsten), je kosten (alle uitgaven), en je aftrekposten (auto, kantoor, etc.). Een goed bijgehouden boekhoudpakket genereert dit automatisch.',
          'Stap 2: Voer je gegevens in op Mijn Belastingdienst. Dit kan handmatig of je kunt je boekhoudpakket laten exporteren naar een speciale aangifte-bestanden (aangifte-software ondersteunt dit vaak).',
          'Stap 3: Controleer alles goed. Veel fouten ontstaan doordat getallen onjuist zijn ingevuld.',
          'Stap 4: Verstuur je aangifte. De deadline is meestal begin juni (exact date wijzigt per jaar). Te laat = boete.',
          'Stap 5: Je krijgt een aanslag. Dit is de Belastingdienst bepaalt hoeveel je moet betalen. Zit je niet goed, je kunt bezwaar maken.',
          'Veel boekhoudpakketten helpen hier (gedeeltelijk mee. Je exporteert je gegevens naar speciale aangifte-software (zoals Taxproof, UltraTax) die het ingewikkelder maakt. Dit is een paar tientjes, maar scheelt veel stress.',
        ],
      },
      {
        heading: 'Tips om inkomstenbelasting laag te houden',
        paragraphs: [
          'Tip 1: Zorg dat je alle kosten registreert. Veel ondernemers vergeten dingen, wat betekent dat ze te veel belasting betalen. Bonnetje van kantoorspullen? Scan het. Benzine? Zet het in je rittenregistratie.',
          'Tip 2: Plan je inkomsten en uitgaven. Heb je grote aankopen gepland? Timing kan invloed hebben. Veel ondernemers "schuiven" uitgaven naar het volgende jaar als ze veel winst hebben.',
          'Tip 3: Maak gebruik van regelingen. Naast zelfstandigenaftrek zijn er nog regelingen (bijvoorbeeld voor startersaftrek als je net bent begonnen). Je accountant kent deze.',
          'Tip 4: Bijzondere situaties? De Belastingdienst heeft vaak oplossingen. Bijvoorbeeld: je bent ziek geweest en hebt minder verdiend. Dit kan invloed hebben op je belasting. Meld dit.',
          'Tip 5: Betaal op tijd. De belastingdienst vraagt om betalingen. Betaal deze op tijd — intrestvergoeding en boetes kunnen snel oplopen.',
          'Tip 6: Werk met een accountant als je veel winst hebt. Voor grote bedrijven loont het zich om professionele hulp in te huren.',
        ],
      },
    ],
    faqItems: [
      { question: 'Hoe veel inkomstenbelasting moet ik betalen?', answer: 'Dit hangt af van je winst. De belasting gaat van 19,5% (bij lage winsten) tot 49,5% (bij hoge winsten). Dit zijn marginale tarieven — je betaalt niet overal hetzelfde percentage.' },
      { question: 'Moet ik betaling vooruit doen?', answer: 'Ja, de Belastingdienst vraagt om belastingbetalingen vooruit (belastingavancements). Je ontvangt hiervoor een betaalpapier. Als je meer betaalt dan nodig, krijg je dit terug. Als je minder betaalt, moet je bijbetalen.' },
      { question: 'Wat is de zelfstandigenaftrek?', answer: 'Dit is een speciale aftrek voor ondernemers (ongeveer €5.000 per jaar). Je mag dit bedrag aftrekken van je winst zonder dit te verantwoorden. Dit is belastingverlaging.' },
      { question: 'Kan ik mijn thuiskantoor aftrekken?', answer: 'Ja, je mag een deel van je huis-kosten aftrekken. De regel is ongeveer 1/7 deel per maand (dus 15% van je woon-kosten). Dit moet je registreren.' },
      { question: 'Wat gebeurt er als ik late ben met mijn aangifte?', answer: 'Late aangifte leidt tot automatische boetes. Deze beginnen bij €100 en kunnen oplopen naar 5-10% van je belastingschuld. Zorg dat je op tijd ingeeft.' },
    ],
  },
  {
    id: '11',
    slug: 'bonnetjes-digitaal-ocr',
    title: 'Digitaal Bonnetjes Bewaren: OCR Uitgelegd',
    summary: 'Hoe werkt OCR en waarom is het belangrijk om bonnetjes digitaal te bewaren?',
    category: 'administratie',
    categoryLabel: 'Administratie',
    icon: '📱',
    content: [
      'Papieren bonnetjes vervagen, gaan verloren en nemen veel ruimte in. OCR-technologie maakt het mogelijk om bonnetjes te scannen en automatisch in je boekhouding in te voeren. We leggen uit hoe dit werkt en waarom het essentieel is.',
    ],
    sections: [
      {
        heading: 'Wat is OCR en hoe werkt het?',
        paragraphs: [
          'OCR staat voor Optical Character Recognition. Het is technologie die afbeeldingen van tekst omzet in herkenbare data. Wanneer je een bonnetje scant of fotografeert, herkent OCR automatisch: de datum, het bedrag, de naam van de winkel/leverancier en andere relevante informatie.',
          'Vroeger moest je handmatig alles opmaken: "Supermarkt Albert Heijn, 15 februari 2026, €47,32, levensmiddelen". Nu hoef je alleen maar het bonnetje te scannen en zegt OCR je automatisch: "Bedrag: €47,32, Datum: 15-02-2026, Leverancier: Albert Heijn".',
          'Hoe beter de OCR-technologie, hoe nauwkeuriger dit werkt. Moderne OCR gebruikt kunstmatige intelligentie (AI) en wordt steeds slimmer. Na verloop van tijd "leert" het pakket je patronen. Bonnetjes van dezelfde leverancier worden steeds correcter herkend.',
          'De meeste boekhoudpakketten hebben OCR ingebouwd in hun mobiele app. Je maakt een foto van het bonnetje, en het pakket herkent automatisch de relevante data. Dit is veel handig dan naar huis gaan, scannen, uploaden, etc.',
        ],
      },
      {
        heading: 'Waarom papieren bonnetjes niet volstaan',
        paragraphs: [
          'Papieren bonnetjes vervagen snel. Met thermische printers (wat veel winkels gebruiken) vervaagt het bonnetje in 3-6 maanden tot onleesbaar. Je hebt dan geen bewijs meer voor je uitgaven.',
          'Ook: papieren bonnetjes nemen veel ruimte in. 7 jaar bewaarplicht betekent 7 jaar dozen met papieren. Dit is impraktisch.',
          'Papieren bonnetjes gaan makkelijk verloren. Je hoeft een tas fout om te gooien en poef — alles weg. Digitale kopieën in je boekhoudpakket zijn veel veiliger.',
          'De Belastingdienst accepteert digitale kopieën volledig sinds 2014. Je hoeft papieren originals niet meer te bewaren. Dit is de wet.',
          'Voor je boekhoudpakket is digitaal beter: je kunt eenvoudig zoeken op bedrag, datum, of leverancier. Met papieren bonnetjes moet je alles handmatig doorzoeken.',
        ],
      },
      {
        heading: 'Hoe scan je bonnetjes correct?',
        paragraphs: [
          'Stap 1: Zorg voor goede belichting. Foto\'s in zwak licht geven slechte OCR-resultaten. Scan bonnetjes op een wit oppervlak met veel licht.',
          'Stap 2: Zorg dat het bonnetje volledig in beeld is. Niet afgekapt. OCR kan niet lezen wat het niet ziet.',
          'Stap 3: Gebruik je smartphone. De ingebouwde scanner in je boekhoudpakket is vaak beter dan je computer-scanner, omdat je gelijk kunt aanpassen.',
          'Stap 4: Check of OCR alles correct heeft herkend. Veel pakketten laten je de herkende gegevens zien, zodat je fouten kunt corrigeren. Dit wordt steeds nauwkeuriger naarmate je meer scant.',
          'Stap 5: Categoriseer je transactie. OCR herkent het bonnetje, maar niet altijd op welke boekhoudrekening het moet. Jij bepaalt: is dit "voedingsmiddelen", "kantoormateriaal" of "reiskosten"?',
          'Stap 6: Gooi het papieren bonnetje weg. Je hebt nu een digitale kopie. Papier hoeft niet meer.',
        ],
      },
      {
        heading: 'Nauwkeurigheid van OCR en veelgemaakte fouten',
        paragraphs: [
          'OCR is niet perfect. Getallen kunnen verkeerd herkend worden (1 wordt 7, 0 wordt O). Bedragen met decimalen kunnen misgaan. Leveranciers met vreemde lettertypes kunnen niet herkend worden.',
          'Daarom: controleer altijd wat OCR heeft herkend. De meeste pakketten tonen je dit, zodat je fouten kunt corrigeren. Dit kost 10 seconden per bonnetje, maar voorkomt fouten.',
          'Sommige bonnetjes zijn gewoon slecht te lezen (heel oud, verkeerd afgedrukt, nat geworden). Hier kan zelfs geavanceerde OCR niet mee om. In dit geval: typ het handmatig in.',
          'OCR werkt beter met schone, heldere bonnetjes. Bonnetjes van grote winkels (AH, Jumbo) worden meestal perfect herkend. Handgeschreven bonnetjes zijn lastiger.',
          'Blijf alert: controleer je herkende gegevens. Na verloop van tijd leert OCR je patronen, maar het eerste opzet is handmatig checken.',
        ],
      },
      {
        heading: 'Digitale bewaring: best practices',
        paragraphs: [
          'Bewaar je OCR-gegevens in je boekhoudpakket. Dit is veilig (back-ups, encryptie, meerdere locaties). Veel beter dan zelf mappen op je computer.',
          'Tag en categoriseer je bonnetjes goed. "Voeding", "Reiskosten", "Kantoor" — zorg dat je later kunt zoeken. Dit helpt bij controles en analyses.',
          'Maak ook af en toe een handmatige back-up. Export je volledige administratie elk kwartaal naar je eigen computer als veiligheidsmaatregelen.',
          'Zorg dat je inloggegevens veilig zijn. Tweeledige authenticatie (2FA) is aan te raden, zodat hackers niet in je boekhoudpakket kunnen.',
          'Vergeet niet: je moet je administratie 7 jaar bewaren. Zorg dat je boekhoudpakket dit kan. Veel cloud-providers bewaren dit vanzelf.',
        ],
      },
    ],
    faqItems: [
      { question: 'Is digitale bewaring van bonnetjes legaal?', answer: 'Ja, volledig. Sinds 2014 accepteert de Belastingdienst digitale kopieën. Je hoeft papieren originals niet meer te bewaren, zolang je goed gescande afbeeldingen hebt.' },
      { question: 'Hoe nauwkeurig is OCR?', answer: 'Modern OCR is zeer nauwkeurig (95%+). Maar het is niet perfect. Controleer altijd wat OCR heeft herkend. Na verloop van tijd wordt het beter dankzij machine learning.' },
      { question: 'Welke boekhoudpakketten hebben OCR?', answer: 'Bijna alle Nederlandse boekhoudpakketten hebben OCR. Moneybird, e-Boekhouden, Jortt, Snelstart — allemaal hebben dit ingebouwd in hun mobiele app.' },
      { question: 'Mag ik bonnetjes in mijn eigen systeem scannen?', answer: 'Technisch wel, maar niet aan te raden. Je boekhoudpakket is veilig, gecertificeerd en volgt wettelijke eisen. Zelf scannen is foutgevoelig en niet controleerbaar door de Belastingdienst.' },
      { question: 'Hoe lang moet ik bonnetjes digitaal bewaren?', answer: 'Je moet je administratie 7 jaar bewaren. Dit geldt ook voor gescande bonnetjes. Zorg dat je boekhoudpakket dit doet (automatisch back-up) of maak zelf regelmatig back-ups.' },
    ],
  },
];
