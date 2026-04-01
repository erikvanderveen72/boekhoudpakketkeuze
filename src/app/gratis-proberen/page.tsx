import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ExternalLink, Check, Sparkles } from 'lucide-react';
import { getSoftwarePackages } from '@/lib/supabase';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { formatTrialPeriod } from '@/lib/utils';

const faqItems = [
  { question: 'Welk boekhoudpakket heeft de langste gratis proefperiode?', answer: 'e-Boekhouden.nl biedt de langste gratis proefperiode: maar liefst 15 maanden (450 dagen) gratis voor starters. Moneybird volgt met 6 maanden gratis.' },
  { question: 'Moet ik mijn creditcard opgeven voor een gratis proefperiode?', answer: 'De meeste boekhoudpakketten vragen geen creditcard voor de proefperiode. Je kunt gewoon starten met een e-mailadres en direct aan de slag.' },
  { question: 'Wat gebeurt er na de gratis proefperiode?', answer: 'Na de proefperiode kun je kiezen om een betaald abonnement af te sluiten of te stoppen. Je gegevens blijven meestal nog een periode bewaard zodat je kunt exporteren.' },
  { question: 'Kan ik meerdere boekhoudpakketten tegelijk gratis uitproberen?', answer: 'Ja, dat raden we zelfs aan. Probeer 2-3 pakketten tegelijk uit zodat je kunt vergelijken welke het beste bij jouw werkwijze past.' },
  { question: 'Zijn gratis boekhoudpakketten betrouwbaar?', answer: 'Ja, alle pakketten in ons overzicht zijn gevestigde Nederlandse bedrijven. Gratis proefperiodes zijn een standaard marketingstrategie, geen teken van slechte kwaliteit.' },
];

export const metadata: Metadata = {
  title: 'Gratis Boekhoudpakket Proberen 2026 | Proefperiodes Vergelijken',
  description: 'Probeer boekhoudpakketten gratis uit. Overzicht van alle gratis proefperiodes: van 14 dagen tot 15 maanden gratis. Vergelijk en kies zonder risico.',
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl/gratis-proberen' },
};

export const revalidate = 60;

export default async function GratisProberen() {
  const packages = await getSoftwarePackages();
  const sorted = [...packages].sort((a, b) => b.trialPeriodDays - a.trialPeriodDays);

  return (
    <>
      <PageHero
        title="Boekhoudpakketten"
        highlightedSubtitle="Gratis Proberen"
        subtitle="Ontdek welk boekhoudpakket bij je past zonder risico. Alle software biedt een gratis proefperiode."
        badge="Alle proefperiodes op een rij"
        breadcrumbs={[{ label: 'Gratis Proberen', href: '/gratis-proberen' }]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {sorted.map((pkg, i) => {
            const isTop = i < 3;
            const label = pkg.trialPeriodDays >= 365 ? 'Topkans!' : pkg.trialPeriodDays >= 90 ? 'Ruim de tijd' : null;
            return (
              <div key={pkg.id} className={`bg-white rounded-2xl border p-6 hover:shadow-lg transition-all ${isTop ? 'border-primary/20' : 'border-border'}`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-text-main">{pkg.name}</h2>
                      {label && <span className="px-2 py-0.5 bg-warning-light text-warning text-xs font-medium rounded-full flex items-center gap-1"><Sparkles className="w-3 h-3" />{label}</span>}
                    </div>
                    <p className="text-sm text-text-muted mb-2">{pkg.bestFor}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pkg.features.bankLink && <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-border rounded-full text-xs"><Check className="w-3 h-3" /> Bankkoppeling</span>}
                      {pkg.features.ocr && <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-border rounded-full text-xs"><Check className="w-3 h-3" /> Scan & Herken</span>}
                      {pkg.features.app && <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-border rounded-full text-xs"><Check className="w-3 h-3" /> App</span>}
                    </div>
                    {pkg.priceNote && <p className="mt-2 text-sm text-emerald-800 font-medium">💡 {pkg.priceNote}</p>}
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-center bg-stone-50 rounded-xl p-3 min-w-[120px]">
                      <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-lg font-bold text-primary">{formatTrialPeriod(pkg.trialPeriodDays)}</div>
                      <div className="text-xs text-text-muted">gratis</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a href={pkg.website} target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors flex items-center gap-1">
                        Probeer <ExternalLink className="w-3 h-3" />
                      </a>
                      <Link href={`/software/${pkg.id}`} className="px-4 py-2 border border-border rounded-xl text-sm font-semibold text-text-main hover:bg-stone-50 transition-colors text-center">
                        Meer info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSchema items={faqItems} />
        </div>
      </section>
    </>
  );
}
