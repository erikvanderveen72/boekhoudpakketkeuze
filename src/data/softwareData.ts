export interface SoftwarePackage {
  id: string;
  name: string;
  logo: string;
  monthlyPrice: number;
  priceNote?: string;
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
    priceNote: '15 maanden gratis voor starters',
    trialPeriodDays: 450,
    targetAudience: ['starter', 'zzp-service', 'zzp-trade'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.9,
    reviewCount: 1250,
    usp: 'Gratis voor starters',
    description: 'De toegankelijke allrounder voor starters en ZZP\'ers. e-Boekhouden.nl biedt een complete suite met boekhouden, factureren, urenregistratie en directe BTW-verwerking. De platform ondersteunt automatische bankkoppelingen waardoor je geen handmatige invoer meer nodig hebt. Met 15 maanden gratis voor nieuwe ondernemers is het een kosteneffectieve manier om je administratie op orde te krijgen zonder dat je meteen een duur pakket nodig hebt.',
    pros: [
      '15 maanden gratis voor starters - ideaal om de software eerst te testen voordat je betaalt',
      'Automatische bankkoppelingen met alle Nederlandse banken voor efficiënte transactieregistratie',
      'BTW kan direct naar de belastingdienst verstuurd worden - geen extra stappen nodig',
      'Uitgebreide klantenservice via telefoon, email en chat - ideaal voor beginners',
      'Urenregistratie ingebouwd voor dienstverleners en consultants',
      'Multi-user functionaliteit zodat je team ook kan werken in het systeem'
    ],
    cons: [
      'De interface voelt wat gedateerd vergeleken met modernere concurrenten zoals Moneybird',
      'Voorraadbeheer is niet beschikbaar - niet geschikt voor webshops of handelsbedrijven',
      'Beperkte integraties met andere tools en platforms',
      'Mobile app is minder intuïtief dan bijvoorbeeld Tellow',
      'Rapportages kunnen beter worden gepresenteerd in de interface'
    ],
    bestFor: 'Startende ondernemers',
    website: 'https://www.e-boekhouden.nl',
    detailedReview: 'e-Boekhouden.nl is al meer dan 20 jaar een vertrouwde partner voor Nederlandse starters en zzp\'ers. De software onderscheidt zich vooral door de ruime gratis proefperiode van 15 maanden, wat uniek is in de markt. Dit geeft nieuwe ondernemers de mogelijkheid om de hele workflow van facturering tot btw-aangifte zonder kosten uit te proberen. De automatische bankkoppelingen werken betrouwbaar en besparen veel administratieve tijd. De interface is wel aan vernieuwing toe - het voelt soms als uit een ander tijdperk. Toch maken de lage kosten (€9,95 per maand), de gratis proefperiode en de soepele, Nederlandse klantenservice het aantrekkelijk voor starters. Het pakket kan later altijd nog opgewaardeerd worden naar meer geavanceerde functies naarmate je bedrijf groeit. De btw-integratie werkt naadloos en het urenregistratiesysteem is volkomen adequaat voor dienstverleners.',
    faqItems: [
      {
        question: 'Hoeveel kost e-Boekhouden.nl voor starters?',
        answer: 'Voor starters is e-Boekhouden.nl 15 maanden volledig gratis. Na deze periode betaal je €9,95 per maand. Dit maakt het de goedkoopste optie om je administratie in te richten zonder meteen grote investeringen te doen.'
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
    pricingDetails: 'De prijsmodel van e-Boekhouden.nl is sterk gericht op het bereiken van starters. Het basispakket kost normaal €9,95 per maand, maar dit kun je volledig gratis 15 maanden lang testen. Dit is uniek in de markt en veel aantrekkelijker dan de 14-30 dagen trial van concurrenten. Na de gratis periode hoef je niet vast te gaan, je kunt op elk moment opzeggen. Er zijn geen verborgen kosten of setup fees. Extra diensten zoals geavanceerde rapportages of API-koppelingen kosten extra, maar de basisfunctionaliteit is compleet.'
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
    monthlyPrice: 25.00,
    priceNote: 'Gratis tot €5.000 omzet',
    trialPeriodDays: 30,
    targetAudience: ['zzp-service'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 9.2,
    reviewCount: 890,
    usp: 'Specialist in uren & projecten',
    description: 'MoneyMonk is obsessief gericht op dienstverleners en heeft urenregistratie en projectmanagement als kern van zijn financiële administratie. Het systeem is speciaal ontworpen voor consultants, freelancers en adviesbureaus die op projectbasis werken. MoneyMonk biedt een gratis plan voor omzet tot €5.000 per maand, wat veel startende dienstverleners toestaat zonder kosten te beginnen. De intuïtieve interface maakt het eenvoudig om uren in te tracken en deze direct aan projecten en facturen te koppelen.',
    pros: [
      'Uitstekende urenregistratie met real-time tracking en automatische stopwatch',
      'Projectbudgetten bewaken - je ziet direct als je budget overschrijdt',
      'Topklasse klantenservice met snelle response times en Nederlands sprekend team',
      'Intuïtieve interface speciaal ontworpen voor dienstverleners, niet ingewikkeld',
      'Projectgebonden boekhouden - ideaal voor meerdere klanten tegelijk',
      'Automatische facturering op basis van geloste uren met aangepaste tarieven per project'
    ],
    cons: [
      'Geen voorraadbeheer - dus niet geschikt voor combinaties met productverkoop',
      'Duurder bij hogere omzet (€25/maand base, hogere plans voor grotere teams)',
      'Beperkt accountant-integration vergeleken met bijvoorbeeld SnelStart',
      'Multi-user kan duur worden voor grotere teams',
      'Minder geschikt als je geen urenregistratie nodig hebt'
    ],
    bestFor: 'Dienstverleners & Consultants',
    website: 'https://www.moneymonk.nl',
    detailedReview: 'MoneyMonk onderscheidt zich sterk als de specialist voor dienstverleners en consultants. Waar andere pakketten boekhouden centraal stellen, staat bij MoneyMonk het projectwerk en urenregistratie voorop. Dit is fundamenteel anders ingedeeld. De urenregistratie-functie is echt uitstekend: je kunt een stopwatch starten, pauseren en later hernemen. De uren worden automatisch aan projecten en klanten gekoppeld. Dit maakt factuurstelling eenvoudig - je selecteert welke uren je wilt factureren en de factuur wordt automatisch aangemaakt. De projectbudgetterings-feature is voor dienstverleners essentieel: je ziet precies hoeveel budget je hebt besteed en waar je risico loopt om negatief uit te vallen. Het gratis plan tot €5.000 omzet is genereus. De klantenservice is legendarisch goed - echte Nederlanders die snel reageren. Nadeel: het is niet ideaal als je niet veel uren vastleggt of als je producten verkoopt.',
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
        answer: 'Als je gratis plan omzet je grens overschrijdt, schakel je over naar een betaald plan. MoneyMonk heeft verschillende abonnementniveaus (€15-€49/maand) afhankelijk van je teamgrootte en behoeften.'
      },
      {
        question: 'Werkt MoneyMonk ook met mijn accountant?',
        answer: 'MoneyMonk kan gegevens exporteren voor je accountant. Er is echter geen directe integratie zoals bij SnelStart. Voor intensieve samenwerking met een accountant zijn andere pakketten beter geschikt.'
      }
    ],
    pricingDetails: 'MoneyMonks prijsstrategie is zeer aantrekkelijk voor starters. Het gratis plan gaat tot €5.000 omzet per maand - dit is veel royaler dan concurrenten. Eenmaal boven dit bedrag betaal je €15 per maand voor het Professional plan, €25 voor Team (tot 5 mensen), en €49 voor het Enterprise plan. Er zijn geen verborgen kosten. Alle plannen hebben dezelfde kernfuncties. De gratis plan kan onbeperkt lang gebruikt worden, je kunt op elk moment upgraden.'
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
    monthlyPrice: 14.00,
    trialPeriodDays: 180,
    targetAudience: ['zzp-service', 'zzp-trade', 'mkb-small'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.8,
    reviewCount: 2100,
    usp: 'Superieure UX & design',
    description: 'Moneybird bewijst dat boekhouden niet saai hoeft te zijn. Met een moderne, intuïtieve tijdlijn-interface maakt Moneybird het administratieve werk bijna prettig. Het pakket biedt alle essentiële functies voor zzp\'ers en kleine bedrijven: automatische bankkoppelingen, urenregistratie, offertestelling en digitale ondertekening. De 6 maanden gratis proefperiode is een van de genereuze trials in de branche. Voor ondernemers die waarde hechten aan esthetiek en gebruikerservaring is Moneybird een uitstekende keuze.',
    pros: [
      'Prachtige, moderne interface die administratie aangenaam maakt in plaats van belastend',
      'Eigen betaalrekening mogelijk via IBAN-mogelijkheid - bank en boekhouding in één',
      'Digitale offertes kunnen elektronisch ondertekend worden - professioneel en efficiënt',
      '6 maanden gratis proefperiode - zeer genereus voor het testen van alle functies',
      'Tijdlijn-interface waarmee je direct ziet wat er allemaal gebeurt in je administratie',
      'Integraties met veel populaire tools zoals Zapier, Slack en e-commerce platforms'
    ],
    cons: [
      'Geen telefonische support - alleen email en chat beschikbaar',
      'Voorraadbeheer is beperkt - niet geschikt voor serieuze webshops',
      'Iets duurder dan e-Boekhouden (€14 vs €9,95 per maand)',
      'De timeline-interface is mooi maar kan voor grote bedrijven minder geschikt zijn',
      'Geen accountant-integratie zoals SnelStart'
    ],
    bestFor: 'Design-bewuste ondernemers',
    website: 'https://www.moneybird.nl',
    detailedReview: 'Moneybird heeft bewezen dat boekhouden niet in kantoorgrijs hoeft te zijn. Het bedrijf heeft duidelijk geïnvesteerd in gebruikerservaring en dit voelt je bij elke interactie. De tijdlijn-interface is uniek en vernieuwend - in plaats van die afgebrokkelde "dashboard" schermen als veel concurrenten, toont Moneybird je alles op chronologische volgorde. Dit maakt het intuïtief en prettig om je administratie bij te houden. De 6 maanden gratis probeerperiode is extreem genereus en laat zien dat Moneybird echt vertrouwt op de kwaliteit van hun product. De mogelijkheid om een eigen betaalrekening in te stellen (embedded finance) is modern en handig - je bankrekening en boekhouding worden één. Het gebrek aan telefonische support is jammer, maar de email- en chatondersteuning is responsief. Voor zzp\'ers en kleine bedrijven die waarde hechten aan esthetiek en gebruiksgemak is Moneybird zeer aan te bevelen.',
    faqItems: [
      {
        question: 'Hoe lang is de proefperiode van Moneybird?',
        answer: 'Moneybird biedt 6 maanden gratis probeerperiode - een van de langste in de markt. Dit geeft je veel tijd om alle functies uitgebreid te testen voordat je een betaald abonnement start.'
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
    pricingDetails: 'Moneybbirds prijsmodel is zeer interessant vanwege de zeer lange gratis proefperiode van 6 maanden. Dit alleen al onderscheidt hen van veel concurrenten. Na deze periode betaal je €14 per maand voor het basisplan. Dit plan is volledig geschikt voor de meeste zzp\'ers. Hogere plans (€21 en €49 per maand) zijn beschikbaar voor grotere bedrijven met meer gebruikers. Er zijn geen setup fees of verborgen kosten. Je kunt op elk moment upgraden of downgraden.'
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
    trialPeriodDays: 30,
    targetAudience: ['zzp-service', 'zzp-trade', 'mkb-small'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.7,
    reviewCount: 780,
    usp: 'Automatisering & Boekhoudbot',
    description: 'Jortt is de innovatieve uitdager op de Nederlandse boekhoudmarkt met geavanceerde AI-gedreven automatisering. De Boekhoudbot categoriseert transacties automatisch zodat je praktisch niets handmatig hoeft in te voeren. Het systeem voert realtime fiscale checks uit om te zorgen dat je altijd compliant bent met belastingregels. Uniek is dat Jortt de jaarrekening al inbegrepen heeft in het abonnement - geen extra kosten. Dit is een modern, ondernemer-first gericht platform dat duidelijk nadenkt over wat ondernemers werkelijk nodig hebben.',
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
    detailedReview: 'Jortt vertegenwoordigt de volgende generatie boekhoudplatforms waar AI en automatisering centraal staan. Waar e-Boekhouden handmatig blijft en Moneymonk gericht is op uren, zet Jortt volledig in op slimme automatisering. De Boekhoudbot is echt indrukwekkend - hij leert van je patronen en categoriseert nieuwe transacties automatisch. In de praktijk werkt dit voor zo\'n 99% goed, wat betekent dat je je administratie niet meer als last ervaart. De realtime fiscale checks zijn waardevol: het systeem waarschuwt je als je iets doet dat fiscaal riskant is. Het feit dat de jaarrekening inbegrepen is, is uniek en toont dat Jortt denkt aan het gehele administratieve plaatje. Dit is ideaal voor DIY-geiarde ondernemers die modern willen werken. Nadeel: sommige ondernemers voelen zich oncomfortabel met AI-automatisering. Ook is Jortt nog relatief jong en kleinere bedrijf vergeleken met Exact of e-Boekhouden.',
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
        answer: 'Ja, Jortt neemt de jaarrekening voor je account mee in het abonnement van €19,95 per maand. Dit bespaard je de kosten van een aparte accountant voor die taak - een flinke besparing.'
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
    pricingDetails: 'Jortt hanteert een eerlijk prijsmodel: €19,95 per maand, en dat is alles wat je nodig hebt. Dit bedrag dekt alles: het boekhoudplatform, de Boekhoudbot met AI-automatisering, realtime fiscale checks, en zelfs de jaarrekening. Er zijn geen verborgen kosten, geen extra fees voor features, niets. Dit is veel transparanter dan concurrenten die allerleie toeslagen hanteren. Jortt werkt op een 30-dagen trial zodat je het kunt testen.'
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
    monthlyPrice: 42.00,
    trialPeriodDays: 30,
    targetAudience: ['mkb-small', 'mkb-large', 'zzp-trade'],
    features: { ocr: true, bankLink: true, hours: true, stock: true, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.4,
    reviewCount: 1650,
    usp: 'Schaalbaarheid & ERP',
    description: 'Exact Online is de marktstandaard voor serieuze bedrijven en groeiend MKB. Het biedt volledige ERP-integratie met meer dan 200 koppelingen naar andere systemen. Het platform is ontwikkeld door Exact - een Nederlands bedrijf dat sinds 1981 boekhoud- en bedrijfssoftware levert. Exact Online is niet zomaar boekhouden; het is een volledig bedrijfsmanagementsysteem met voorraadbeheer, salarisadministratie, CRM en nog veel meer. Dit is de keuze voor bedrijven die echt groeien en meer nodig hebben dan alleen facturering.',
    pros: [
      'Volledige ERP mogelijkheden - alles wat je bedrijf nodig heeft is geïntegreerd',
      'Enorme App Store met meer dan 200 koppelingen naar andere business tools',
      'Salarisadministratie ingebouwd - je kunt je werknemersbetalingen volledig in Exact beheren',
      'Accountants-standaard - vrijwel alle accountants en belastingadviseurs werken met Exact',
      'Professioneel voorraadbeheer met real-time stock tracking en multichannel support',
      'Schaalbaarheid - het groeit mee met je bedrijf van klein tot groot'
    ],
    cons: [
      'Hoger prijspunt van €42 per maand - niet geschikt voor kleine zzp\'ers met beperkt budget',
      'Steile leercurve - meer features betekent ook meer complexiteit en trainingstijd',
      'Overkill voor ZZP zonder employees of voorraadbehoefte - veel functies ga je niet gebruiken',
      'Interface kan overweldigend voelen met alle opties en menupunten',
      'Setup vereist meer initiële investering in tijd en eventueel consultants'
    ],
    bestFor: 'Groeiend MKB',
    website: 'https://www.exact.com/nl',
    detailedReview: 'Exact Online is een bedrijf dat respect verdient - meer dan 40 jaar ervaring in Nederland en jarenlange track record van stabiliteit. Waar kleinere pakketten zoals e-Boekhouden of Moneybird gericht zijn op starters, is Exact Online duidelijk gebouwd voor bedrijven die serieus groeien. De ERP-mogelijkheden zijn werkelijk uitgebreid: je kunt voorraden beheren, meerdere locaties ondersteunen, meerdere valuta\'s handelen, en veel meer. De integratie met HR en salarisadministratie maakt het een compleet HR-systeem. Met meer dan 200 app-integraties kun je bijna alles wat je wenst koppelen. Accountants werken graag met Exact omdat de data export standaard werkt. Nadelen: het is duur (€42/maand), complex om in te richten, en waarschijnlijk grotendeels overkill als je klein bent. Voor handelsbedrijven die groeien of bedrijven met werknemers is het een sterke keuze.',
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
    pricingDetails: 'Exact Online kost €42 per maand voor het basisplan - aanzienlijk meer dan kleinere concurrenten. Dit plan is geschikt voor het merendeel van de kleine bedrijven. Hogere plans zijn beschikbaar voor grotere organisaties met meer gebruikers (tot €120/maand voor Enterprise). Alle plannen hebben dezelfde kernfuncties, je betaalt vooral voor gebruikslicenties. Er zijn geen verborgen kosten, maar je kunt optioneel kozen voor implementatieservices van Exact zelf.'
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
    monthlyPrice: 12.95,
    trialPeriodDays: 30,
    targetAudience: ['zzp-trade', 'mkb-small', 'mkb-large'],
    features: { ocr: true, bankLink: true, hours: true, stock: true, app: false, vatDirect: true, multiUser: true },
    reviewScore: 8.5,
    reviewCount: 420,
    usp: 'Modulair & voorraadbeheer',
    description: 'Silvasoft biedt ERP-functionaliteit voor een fractie van de prijs van Exact Online. Met modulaire opbouw en uitgebreid voorraadbeheer is het ideaal voor handelsbedrijven en kleine bedrijven met voorraadbehoeften. Silvasoft is een Nederlands bedrijf dat zich richt op het betaalbaarder maken van professionele bedrijfssoftware. Het systeem kan volledig naar wens worden samengesteld: je neemt alleen de modules die je nodig hebt, waardoor de kostprijs laag blijft. De voorraadbeheermodule is echt uitgebreid met real-time stock tracking, inkooporderbeheer en multichannel support.',
    pros: [
      'Betaalbaar voorraadbeheer - veel goedkoper dan Exact Online maar toch professioneel',
      'Modulair uitbreidbaar - je betaalt alleen voor wat je echt gebruikt',
      'Inkooporders volledig beheerd - je kunt leveranciersorders volledig in het systeem afhandelen',
      'CRM module ingebouwd - klantgegevens en verkoopgeschiedenis samen met boekhouddata',
      'Flexibele prijsstructuur - betaalbaarder naarmate je bedrijf groeit',
      'Ondersteunt meerdere winkels/locaties - ideaal voor ketens of multi-channel verkoop'
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
    detailedReview: 'Silvasoft is een interessant alternatief als je voorraadbeheer nodig hebt maar niet de €42 per maand van Exact Online wil betalen. Voor €12,95 per maand krijg je al een behoorlijk uitgerust systeem met voorraadbeheer, boekhoudingfuncties en CRM. Het voorraadbeheer is werkelijk professioneel: je kunt stock levels per locatie beheren, automatisch herbestelmomentom ingesteld, en inkooporders volledig in het systeem verwerken. De modulariteit is een voordeel - je voegt modules toe naarmate je ze nodig hebt. Dit maakt het ideaal voor groeiende handelsbedrijven met beperkt budget. Nadeel: het bedrijf is kleiner dan Exact, dus support en stabiel kunnen iets minder zijn. Ook voelt de interface wat ouder - niet slecht, maar zeker niet modern. Er is geen mobiele app, dus je werkt desktop-based. Voor handelsbedrijven met beperkt budget en oprechte voorraadbehoefte is Silvasoft een slimme keuze.',
    faqItems: [
      {
        question: 'Is Silvasoft echt betaalbaarder dan Exact Online?',
        answer: 'Ja, Silvasoft kost €12,95 per maand terwijl Exact Online €42 per maand is. Voor handelsbedrijven die voorraadbeheer nodig hebben is Silvasoft dus ongeveer 1/3 van de prijs, met soortgelijke basisfeatures.'
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
    pricingDetails: 'Silvasoft hanteert een modulaire prijsstructuur. Het basispakket start op €12,95 per maand en bevat al veel functionaliteit. Extra modules (CRM, voorraadbeheer, salarisadministratie) kunnen worden bijgeboekt. In totaal betaal je voor de modules die je werkelijk gebruikt, wat zeer kosteneffectief is. Dit maakt Silvasoft aanzienlijk goedkoper dan Exact Online terwijl je nog steeds professionele ERP-functionaliteit krijgt.'
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
    monthlyPrice: 12.50,
    trialPeriodDays: 30,
    targetAudience: ['zzp-service', 'zzp-trade', 'mkb-small'],
    features: { ocr: true, bankLink: true, hours: false, stock: false, app: true, vatDirect: true, multiUser: true },
    reviewScore: 8.3,
    reviewCount: 1890,
    usp: 'Accountants-integratie',
    description: 'SnelStart is ontworpen voor synergie met je boekhouder met naadloze integratie in accountantskantoren. Het platform biedt een grote installed base in Nederland met tientallen jaren ervaring. SnelStart is ideaal voor ondernemers die hun administratie samen met hun accountant willen beheren - geen separate imports/exports, maar direct samenwerken in dezelfde omgeving. De dedicated bonnetjes scan-app en telefonische support maken SnelStart toegankelijk voor ondernemers die graag wat handholding willen.',
    pros: [
      'Perfecte boekhouder-samenwerking - je accountant kan direct in je SnelStart werken',
      'Bonnetjes scannen app - makkelijk onkosten vastleggen via fotografie',
      'Grote installed base in Nederland - veel accountants zijn ervaren met SnelStart',
      'Telefonische support beschikbaar - perfect voor ondernemers die graag een mens aan de telefoon hebben',
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
    detailedReview: 'SnelStart is het klassieke Nederlandse boekhoudpakket met ruim 25 jaar track record. Het onderscheidt zich niet door innovatie, maar door betrouwbaarheid en sterke accountant-integratie. Als je met een accountant werkt, is SnelStart een uitstekende keuze omdat je accountant rechtstreeks in je SnelStart kan werken - geen gegevens heen en weer sturen, maar echt samenwerken. De dedicated bonnetjes scan-app (via smartphone) maakt onkosten vastleggen makkelijk. De telefonische support is goud waard voor ondernemers die wat begeleiding willen. De grote installed base betekent dat veel accountants hier mee willen werken. Nadeel: SnelStart is niet ideaal als je DIY wil gaan - het systeem is gebouwd op de aanname dat je met een accountant werkt. Ook voelt de interface wat oud. Voor ondernemers in construction, vastgoed en andere vakgebonden industrieën is SnelStart echter nog steeds de standaard keuze.',
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
    pricingDetails: 'SnelStart kost €12,50 per maand - zeer competitive prijs. Dit bedrag geeft je toegang tot alle basisfuncties inclusief de bonnetjes scan-app. Hogere plans zijn beschikbaar voor bedrijven met meer werknemers (tot €30+/maand), maar de basisversie is voor de meeste kleine bedrijven voldoende. Er zijn geen verborgen kosten.'
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
    monthlyPrice: 12.99,
    trialPeriodDays: 14,
    targetAudience: ['zzp-service', 'starter'],
    features: { ocr: true, bankLink: true, hours: true, stock: false, app: true, vatDirect: true, multiUser: false },
    reviewScore: 8.6,
    reviewCount: 560,
    usp: 'Mobile-first & bankieren',
    description: 'Tellow is het baanbrekende concept van embedded finance - boekhoudsoftware die tegelijkertijd je bank is. Tellow geeft je een eigen IBAN-rekeningummer zodat al je geld via Tellow loopt. Dit elimineert veel administratieve koppelingen omdat je bank en boekhoudadministratie één zijn. Het is echt mobile-first: alles is optimaliseerd voor smartphone en veel ondernemers beheren hun hele administratie vanuit hun telefoon. GPS rittenregistratie voor ondernemers die veel mobiel werken, en snelheid staat voorop.',
    pros: [
      'Geïntegreerde betaalrekening (IBAN) - je bank EN je boekhoudadministratie zijn één',
      'Beste mobiele app in de markt - echt ontworpen voor telefoon, niet web-adapted',
      'GPS rittenregistratie - perfect voor bezoekers, loodgieters, elektriciens en bezorgdiensten',
      'Snel en simpel - minimaal onderhoud en overhead in de administratie',
      'Real-time inzicht in je geld - in en uitkomsten zijn direct zichtbaar',
      'Perfecte integratie met Paysafe betaalterminals - voor ondernemers met fysieke verkoop'
    ],
    cons: [
      'Beperkt als je groot je groeit en je eigen bank wilt bijhouden',
      'Minder desktop-focus - als je achter een bureau werkt is dit niet ideaal',
      'Geen multi-user - alleen geschikt voor eenmanszaken',
      'Minder geavanceerde rapportages voor serieuze boekhoudanalyse',
      'Nog relatief jong bedrijf - minder proven track record dan e-Boekhouden'
    ],
    bestFor: 'Mobiele ondernemers',
    website: 'https://www.tellow.nl',
    detailedReview: 'Tellow vertegenwoordigt een revolutionair nieuwe benadering: waarom zou je boekhouding en bankieren gescheiden houden? Tellow combineert beide in één modern mobile-first platform. Je krijgt een eigen IBAN-rekeningnummer, dus al je geld loopt via Tellow. Dit heeft twee voordelen: (1) geen handmatige bankkoppelingen nodig omdat je bank EN je boekhouding dezelfde data is, en (2) je hebt alle geld-informatie op één plek. De mobiele app is werkelijk uitstekend: Tellow heeft dit niet zomaar web-gebaseerd en op mobiel afgestemd, maar het is echt ontworpen voor telefoon-gebruik. Dit maakt het ideaal voor ondernemers die veel onderweg zijn. De GPS rittenregistratie is handig voor bezoekers die veel rijden. Het bedrijf richt zich op snelheid en simpliciteit - geen overbodige complexiteit. Nadeel: het is minder geschikt als je groeit en je eigen bank wilt houden. Ook is er geen multi-user support. Voor één persoon die veel mobiel werkt en waarde hecht aan eenvoud is Tellow uitstekend.',
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
        answer: 'De Tellow app is werkelijk een van de beste boekhoudapps op de markt. Het is niet zomaar een web-interface op mobiel, maar echt native gebouwd voor smartphones. Veel ondernemers beheren hun hele administratie via de app.'
      },
      {
        question: 'Wat is die GPS rittenregistratie?',
        answer: 'Tellow kan automatisch GPS tracken welke afstanden je rijdt. Dit is handig voor ondernemers met kilometervergoeding (btw-voordeel). Perfect voor loodgieters, elektriciens en andere bezoekers.'
      },
      {
        question: 'Is Tellow geschikt voor meerdereinvesteerders/partner?',
        answer: 'Nee, Tellow ondersteunt geen multi-user toegang. Het is ontworpen voor eenmanszaken. Als je partner ook toegang nodig hebt, kijk dan naar e-Boekhouden of Moneybird.'
      }
    ],
    pricingDetails: 'Tellow kost €12,99 per maand. Dit bedrag dekt het volledige platform: boekhoudsoftware, je eigen IBAN-rekeningummer met bankfuncties, de mobiele app en alles wat daarbij hoort. Er zijn geen verborgen kosten. Je betaalt alleen voor het abonnement - geen transactiekosten of verbergen charges. Dit is erg transparant en betaalbaarvergeleken met het voordeel dat je geen aparte bankrekening kost.'
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
    if (index === 0) label = 'Beste Match';
    else if (result.package.id === 'e-boekhouden' && answers.isStarter) label = 'Beste voor Starters';
    else if (result.package.id === 'moneymonk' && answers.activity === 'service') label = 'Beste voor Dienstverleners';
    else if (result.package.id === 'exact-online') label = 'Beste voor Groei';
    return { ...result, label };
  });
  return labeled;
}
