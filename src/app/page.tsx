import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Zap, Clock, ClipboardCheck } from 'lucide-react';
import { getSoftwarePackages } from '@/lib/supabase';
import SoftwareCard from '@/components/SoftwareCard';
import FAQSchema from '@/components/FAQSchema';
import WizardWrapper from '@/components/WizardWrapper';

export const metadata: Metadata = {
  title: 'Boekhoudpakketten vergelijken in 2026 | Boekhoudpakketkeuze.nl',
  description: 'Vergelijk boekhoudpakketten voor zzp en mkb op prijs, functies, gebruiksgemak en geschiktheid. Bekijk onze transparante beoordelingsmethode.',
};

export const revalidate = 60;

const faqItems = [
  { question: 'Wat is het beste boekhoudpakket voor ZZP\'ers?', answer: 'Welk boekhoudpakket het best past, hangt af van je situatie. Voor starters is e-Boekhouden.nl vaak gekozen (15 maanden gratis). Voor dienstverleners is MoneyMonk interessant door de sterke urenregistratie. Moneybird scoort hoog op gebruiksgemak.' },
  { question: 'Kan ik boekhoudpakketten gratis proberen?', answer: 'Ja, alle boekhoudpakketten in ons overzicht bieden een gratis proefperiode van minimaal 14 dagen tot wel 15 maanden. Zo kun je rustig uitproberen welk pakket het beste bij je past.' },
  { question: 'Wat kost een boekhoudpakket per maand?', answer: 'Boekhoudpakketten kosten tussen de €10 en €50 per maand. Voor ZZP\'ers zijn er goede opties vanaf €10 per maand. MKB-bedrijven betalen doorgaans meer voor extra functies zoals voorraadbeheer en meerdere gebruikers. De meeste pakketten bieden een gratis proefperiode.' },
  { question: 'Hoe vergelijk ik boekhoudpakketten?', answer: 'Gebruik onze vergelijkingstool om pakketten naast elkaar te zetten op functies, prijs en reviews. Of gebruik de keuzehulp voor een persoonlijk advies in 2 minuten.' },
  { question: 'Hoe beoordeelt Boekhoudpakketkeuze.nl de pakketten?', answer: 'Wij beoordelen pakketten op basis van vaste criteria: prijs, functies, gebruiksgemak, ondersteuning, schaalbaarheid en geschiktheid per type ondernemer. Onze beoordelingsmethode en eventuele commerciële samenwerkingen lichten we openbaar toe.' },
];

export default async function HomePage() {
  const packages = await getSoftwarePackages();
  const topThree = [...packages].sort((a, b) => b.reviewScore - a.reviewScore).slice(0, 3);
  const topTen = [...packages].sort((a, b) => b.reviewScore - a.reviewScore).slice(0, 10);

  return (
    <>
      {/* Hero Section - Kenner Style */}
      <section className="relative overflow-hidden bg-stone-950 py-20 md:py-28">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-600 opacity-10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-stone-300 text-sm font-medium">Transparant beoordeeld op basis van vaste criteria</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Boekhoudpakketten<br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              vergelijken in 2026
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-stone-400 max-w-2xl mx-auto">
            Vergelijk boekhoudpakketten voor zzp en mkb op prijs, functies, gebruiksgemak en geschiktheid per type ondernemer. Onze aanbevelingen zijn gebaseerd op vaste beoordelingscriteria die je hieronder kunt bekijken.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WizardWrapper />
            <Link
              href="/software"
              className="bg-white/5 backdrop-blur border border-white/15 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Bekijk alle pakketten
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-stone-400">
              <Shield className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-medium">Transparant beoordeeld</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <Zap className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-medium">Alle populaire pakketten</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <Clock className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-medium">Gratis keuzehulp in 2 minuten</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe wij beoordelen */}
      <section className="py-12 bg-stone-50 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <ClipboardCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-main mb-2">Hoe wij beoordelen</h2>
              <p className="text-text-muted leading-relaxed">
                Wij vergelijken boekhoudpakketten op basis van prijs, functies, gebruiksgemak, ondersteuning, schaalbaarheid en geschiktheid per type ondernemer. Sommige vermeldingen kunnen commerciële samenwerkingen bevatten. Daarom tonen we onze beoordelingscriteria openbaar en houden we aanbevelingen, advertorials en vergelijkingen duidelijk van elkaar gescheiden.
              </p>
              <Link href="/beoordelingsmethode" className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary hover:underline">
                Bekijk onze beoordelingsmethode &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Software */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">Boekhoudpakketten vergelijken in 2026</h2>
            <p className="mt-4 text-lg text-text-muted">De volgorde op deze pagina is gebaseerd op onze eigen beoordelingsmethode. We kijken onder meer naar prijs, functies, gebruiksgemak, support en geschiktheid per doelgroep.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topThree.map((pkg, i) => (
              <SoftwareCard
                key={pkg.id}
                software={pkg}
                matchLabel={i === 0 ? 'Hoogste Totaalscore' : i === 1 ? 'Vaak Gekozen door Starters' : 'Sterke Prijs-Kwaliteit'}
                matchTooltip={i === 0 ? 'Gebaseerd op de totale beoordeling over alle criteria.' : i === 1 ? 'Geschikt voor ondernemers die eenvoudig willen starten.' : 'Interessant voor ondernemers die op functies én prijs letten.'}
                rank={i + 1}
              />
            ))}
          </div>

          {/* Compact list for remaining */}
          <div className="mt-8 space-y-3">
            {topTen.slice(3).map((pkg, index) => (
              <div key={pkg.id} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-white p-4 hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-sm font-bold text-stone-500">{index + 4}</span>
                  <div>
                    <h3 className="font-semibold text-text-main">{pkg.name}</h3>
                    <p className="text-sm text-text-muted">{pkg.bestFor}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="hidden sm:block text-sm font-bold text-amber-600">&#11088; {pkg.reviewScore.toFixed(1)}</span>
                  <div className="text-right font-bold text-text-main">
                    {pkg.monthlyPrice === 0 ? 'Gratis' : `€${pkg.monthlyPrice.toFixed(2)}/mnd`}
                  </div>
                  <Link href={`/software/${pkg.id}`} className="px-3 py-1.5 rounded-lg border border-border text-sm font-medium hover:bg-stone-50 transition-colors">
                    Bekijk &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/software" className="inline-block px-6 py-3 rounded-xl border border-border text-sm font-semibold text-text-main hover:bg-stone-50 transition-colors">
              Bekijk alle pakketten &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-main mb-6">Waar moet je op letten bij het kiezen van een boekhoudpakket?</h2>
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>Het kiezen van het juiste boekhoudpakket is een belangrijke beslissing voor elke ondernemer. Of je nu als zzp&apos;er net begint of een groeiend mkb-bedrijf runt, het beste boekhoudprogramma is het programma dat precies aansluit op jouw situatie. Wij vergelijken de populairste pakketten op prijs, functies en gebruikerservaringen. Lees meer over <Link href="/beoordelingsmethode" className="text-primary hover:underline font-medium">onze beoordelingsmethode</Link> of bekijk de pagina <Link href="/over-ons" className="text-primary hover:underline font-medium">over ons</Link>.</p>
            <h3 className="text-2xl font-semibold text-text-main mt-10">BTW-aangifte: automatisch of handmatig?</h3>
            <p>Een van de belangrijkste functies is ondersteuning voor BTW-aangifte. De beste pakketten berekenen automatisch je BTW, maken een overzichtelijke aangifte klaar, en laten je deze direct versturen naar de Belastingdienst. In onze <Link href="/vergelijken" className="text-primary hover:underline font-medium">vergelijkingstabel</Link> kun je zien welke pakketten dit ondersteunen.</p>
            <h3 className="text-2xl font-semibold text-text-main mt-10">Bankkoppelingen: automatisch transacties verwerken</h3>
            <p>Een bankkoppeling via PSD2 zorgt dat je banktransacties automatisch worden gesynchroniseerd met je boekhouding. Dit bespaart uren handmatig werk per maand. Bekijk onze <Link href="/tips" className="text-primary hover:underline font-medium">tips</Link> voor meer informatie.</p>
            <h3 className="text-2xl font-semibold text-text-main mt-10">Hoe kun je boekhoudpakketten vergelijken?</h3>
            <p>Gebruik onze <Link href="/vergelijken" className="text-primary hover:underline font-medium">vergelijkingstool</Link> om pakketten naast elkaar te leggen. Of gebruik onze <Link href="/software?wizard=true" className="text-primary hover:underline font-medium">keuzehulp</Link> voor persoonlijk advies in twee minuten.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Klaar om te kiezen?</h2>
          <p className="text-stone-400 mb-8">Gebruik onze gratis keuzehulp en vind binnen 2 minuten het boekhoudpakket dat bij jou past.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/software?wizard=true" className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all">
              Start de Keuzehulp &rarr;
            </Link>
            <Link href="/vergelijken" className="border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
              Vergelijk alle pakketten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
