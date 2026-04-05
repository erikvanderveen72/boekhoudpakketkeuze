import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSoftwareBySlug, getSoftwarePackages } from '@/lib/supabase';
import { softwarePackages } from '@/data/softwareData';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Check, X, ExternalLink, Clock, Users, Shield, Smartphone, Building2, Target, CreditCard } from 'lucide-react';

const featureDetails: Record<string, { label: string; description: string }> = {
  ocr: { label: 'Scan & Herken (OCR)', description: 'Fotografeer bonnetjes en facturen, de software leest ze automatisch in.' },
  bankLink: { label: 'Bankkoppeling (PSD2)', description: 'Automatische synchronisatie met alle grote Nederlandse banken.' },
  hours: { label: 'Urenregistratie', description: 'Registreer uren per project en converteer direct naar facturen.' },
  stock: { label: 'Voorraadbeheer', description: 'Beheer voorraad, inkooporders en productmarges.' },
  app: { label: 'Mobiele App', description: 'Volledige functionaliteit op iOS en Android.' },
  vatDirect: { label: 'BTW Direct Versturen', description: 'Verstuur je BTW-aangifte rechtstreeks naar de Belastingdienst.' },
  multiUser: { label: 'Meerdere Gebruikers', description: 'Geef je boekhouder of medewerkers toegang.' },
};

const slugDescriptions: Record<string, string> = {
  'e-boekhouden': 'e-Boekhouden.nl review: 15 maanden gratis, geschikt voor starters. Bekijk prijzen, functies en ervaringen.',
  'moneymonk': 'MoneyMonk review: geschikt voor ZZP\'ers met urenregistratie. Bekijk prijzen, functies en ervaringen.',
  'moneybird': 'Moneybird review: gebruiksvriendelijk en populair. Bekijk prijzen, functies en ervaringen.',
  'jortt': 'Jortt review: simpel boekhouden voor beginners. Bekijk prijzen, functies en ervaringen.',
  'exact-online': 'Exact Online review: professioneel voor MKB. Bekijk prijzen, functies en ervaringen.',
  'snelstart': 'SnelStart review: betrouwbaar en compleet. Bekijk prijzen, functies en ervaringen.',
  'tellow': 'Tellow review: gratis boekhouden voor ZZP. Bekijk functies en ervaringen.',
  'silvasoft': 'Silvasoft review: compleet boekhoudpakket. Bekijk prijzen, functies en ervaringen.',
};

export async function generateStaticParams() {
  return softwarePackages.map(pkg => ({ id: pkg.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const software = await getSoftwareBySlug(id);
  if (!software) return { title: 'Software niet gevonden' };
  const desc = slugDescriptions[software.id] || `${software.name}: bekijk prijzen, functies, voor- en nadelen.`;
  return {
    title: `${software.name} Review — Prijzen, Functies & Ervaringen`,
    description: desc,
    alternates: { canonical: `https://boekhoudpakketkeuze.nl/software/${software.id}` },
  };
}

const audienceLabels: Record<string, string> = {
  'zzp-service': 'ZZP Dienstverlening',
  'zzp-trade': 'ZZP Handel',
  'mkb-small': 'Klein MKB',
  'mkb-large': 'Groot MKB',
  'starter': 'Starters',
};

export default async function SoftwareDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const software = await getSoftwareBySlug(id);
  if (!software) notFound();

  return (
    <>
      <PageHero
        title={software.name}
        highlightedSubtitle={software.usp}
        subtitle={software.description}
        badge={`${software.reviewScore.toFixed(1)} ★ · ${software.reviewCount} reviews`}
        breadcrumbs={[
          { label: 'Software', href: '/software' },
          { label: software.name, href: `/software/${software.id}` },
        ]}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: software.name,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: software.monthlyPrice.toString(),
              priceCurrency: 'EUR',
              priceValidUntil: '2026-12-31',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: software.reviewScore.toString(),
              bestRating: '10',
              ratingCount: software.reviewCount.toString(),
            },
          }),
        }}
      />

      {/* Price + CTA Card */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Audience badges */}
              <div className="flex flex-wrap gap-2">
                {software.targetAudience.map(a => (
                  <span key={a} className="px-3 py-1 rounded-full border border-border text-sm text-text-muted">{audienceLabels[a]}</span>
                ))}
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-emerald-600 flex items-center gap-2 mb-4"><Check className="w-5 h-5" /> Voordelen</h3>
                  <ul className="space-y-3">
                    {software.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-700"><Check className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-red-600 flex items-center gap-2 mb-4"><X className="w-5 h-5" /> Nadelen</h3>
                  <ul className="space-y-3">
                    {software.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-700"><X className="w-4 h-4 text-red-400 mt-1 shrink-0" />{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-6">Functies</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(featureDetails).map(([key, { label, description }]) => {
                    const hasFeature = software.features[key as keyof typeof software.features];
                    return (
                      <div key={key} className={`bg-white rounded-xl p-4 border border-border ${!hasFeature ? 'opacity-50' : ''}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-text-main">{label}</span>
                          {hasFeature ? <Check className="w-4 h-4 text-emerald-500" /> : <X className="w-4 h-4 text-red-400" />}
                        </div>
                        <p className="text-sm text-text-muted">{description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Detailed Review */}
              {software.detailedReview && (
                <div>
                  <h2 className="text-2xl font-bold text-text-main mb-4">Uitgebreide Review</h2>
                  <div className="bg-white rounded-2xl p-6 border border-border">
                    <p className="text-text-muted leading-relaxed whitespace-pre-line">{software.detailedReview}</p>
                  </div>
                </div>
              )}

              {/* Pricing Details */}
              {software.pricingDetails && (
                <div>
                  <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-primary" /> Prijzen & Abonnementen
                  </h2>
                  <div className="bg-white rounded-2xl p-6 border border-border">
                    <p className="text-text-muted leading-relaxed">{software.pricingDetails}</p>
                  </div>
                </div>
              )}

              {/* Ideal For */}
              {software.idealFor && software.idealFor.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" /> Geschikt voor
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {software.idealFor.map((useCase, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-text-muted">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div>
              <div className="bg-white rounded-2xl p-6 border border-border sticky top-20">
                <div className="text-center mb-6">
                  {software.priceLabel ? (
                    <>
                      <div className="text-xl font-bold text-primary">{software.priceLabel}</div>
                      {software.priceExclBtw && <p className="text-xs text-text-muted">excl. btw</p>}
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-primary">{software.monthlyPrice === 0 ? 'Gratis' : <>&euro;{software.monthlyPrice.toFixed(2)}</>}</div>
                      <p className="text-sm text-text-muted">per maand{software.priceExclBtw ? ' excl. btw' : ''}</p>
                    </>
                  )}
                  {software.priceNote && <span className="inline-block mt-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-sm font-semibold rounded-full border border-emerald-200">{software.priceNote}</span>}
                </div>
                <div className="flex justify-between text-sm mb-6">
                  <span className="text-text-muted">Proefperiode</span>
                  <span className="font-medium">{software.trialPeriodDays} dagen</span>
                </div>
                <a
                  href={software.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors mb-3"
                >
                  Bezoek Website <ExternalLink className="inline w-4 h-4 ml-1" />
                </a>
                <a
                  href={software.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center border border-border py-3 rounded-xl font-semibold text-text-main hover:bg-stone-50 transition-colors"
                >
                  Gratis Proberen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - per pakket unieke vragen */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSchema items={software.faqItems || []} />
        </div>
      </section>

      {/* Vergelijk CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-main mb-3">{software.name} vergelijken met alternatieven?</h2>
          <p className="text-text-muted mb-6">Bekijk hoe {software.name} scoort tegenover andere boekhoudpakketten.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/vergelijken" className="px-5 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
              Vergelijk alle pakketten
            </Link>
            <Link href="/software" className="px-5 py-2.5 border border-border rounded-xl font-semibold text-text-main hover:bg-stone-50 transition-colors">
              Bekijk alle software
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
