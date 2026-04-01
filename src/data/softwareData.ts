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
    description: 'De toegankelijke allrounder voor starters en ZZP\'ers. Complete suite met boekhouden, factureren en urenregistratie.',
    pros: ['15 maanden gratis voor starters', 'Automatische bankkoppelingen', 'BTW direct versturen', 'Uitgebreide support'],
    cons: ['Interface wat gedateerd', 'Minder geschikt voor handel'],
    bestFor: 'Startende ondernemers',
    website: 'https://www.e-boekhouden.nl',
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
    description: 'Obsessief gericht op dienstverleners. Urenregistratie en projectmanagement zijn de kern van de financiële administratie.',
    pros: ['Uitstekende urenregistratie', 'Projectbudgetten bewaken', 'Topklasse klantenservice', 'Intuïtieve interface'],
    cons: ['Geen voorraadbeheer', 'Duurder bij hoge omzet'],
    bestFor: 'Dienstverleners & Consultants',
    website: 'https://www.moneymonk.nl',
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
    description: 'Boekhouden vanuit design en eenvoud. De moderne tijdlijn-interface maakt administratie bijna leuk.',
    pros: ['Prachtige interface', 'Eigen betaalrekening mogelijk', 'Digitale offertes ondertekenen', '6 maanden proefperiode'],
    cons: ['Geen telefonische support', 'Beperkt voorraadbeheer'],
    bestFor: 'Design-bewuste ondernemers',
    website: 'https://www.moneybird.nl',
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
    description: 'De uitdager met AI-gedreven automatisering. De Boekhoudbot categoriseert transacties automatisch.',
    pros: ['Boekhoudbot automatiseert 99%', 'Realtime fiscale checks', 'Jaarrekening inbegrepen', 'Ondernemer-first filosofie'],
    cons: ['Vereist vertrouwen in algoritmes', 'Minder persoonlijk contact'],
    bestFor: 'DIY ondernemers',
    website: 'https://www.jortt.nl',
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
    description: 'De marktstandaard voor serieuze bedrijven. Volledige ERP-integratie met meer dan 200 koppelingen.',
    pros: ['Volledige ERP mogelijkheden', 'Enorme App Store', 'Salarisadministratie', 'Accountants-standaard'],
    cons: ['Hoger prijspunt', 'Steile leercurve', 'Overkill voor ZZP'],
    bestFor: 'Groeiend MKB',
    website: 'https://www.exact.com/nl',
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
    description: 'ERP-functionaliteit voor een fractie van de prijs. Modulaire opbouw met uitgebreid voorraadbeheer.',
    pros: ['Betaalbaar voorraadbeheer', 'Modulair uitbreidbaar', 'Inkooporders', 'CRM module'],
    cons: ['Interface minder modern', 'Geen mobiele app'],
    bestFor: 'Handelsbedrijven met budget',
    website: 'https://www.silvasoft.nl',
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
    description: 'Ontworpen voor synergie met je boekhouder. Naadloze integratie met accountantskantoren.',
    pros: ['Perfecte boekhouder-samenwerking', 'Bonnetjes scannen app', 'Grote installed base', 'Telefonische support'],
    cons: ['Minder geschikt voor DIY', 'Beperkte urenregistratie'],
    bestFor: 'Samenwerking met boekhouder',
    website: 'https://www.snelstart.nl',
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
    description: 'Embedded Finance - boekhoudsoftware die ook je bank is. Alles vanuit de smartphone.',
    pros: ['Geïntegreerde betaalrekening', 'Beste mobiele app', 'GPS rittenregistratie', 'Snel en simpel'],
    cons: ['Beperkt bij grootbank blijven', 'Minder desktop-focus'],
    bestFor: 'Mobiele ondernemers',
    website: 'https://www.tellow.nl',
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
