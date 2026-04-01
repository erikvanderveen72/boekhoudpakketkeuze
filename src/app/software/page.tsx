import { Metadata } from 'next';
import Link from 'next/link';
import { getSoftwarePackages } from '@/lib/supabase';
import PageHero from '@/components/PageHero';
import SoftwareCard from '@/components/SoftwareCard';

export const metadata: Metadata = {
  title: 'Alle Boekhoudpakketten 2026 | Overzicht & Reviews',
  description: 'Bekijk en vergelijk de populairste boekhoudpakketten voor ZZP\'ers en MKB. Reviews, prijzen en beoordelingen per pakket. Vind het pakket dat bij jou past.',
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl/software' },
};

export const revalidate = 60;

export default async function SoftwarePage() {
  const packages = await getSoftwarePackages();

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Beste Boekhoudpakketten 2026',
    description: 'Overzicht van de populairste boekhoudpakketten voor ZZP\'ers en MKB in Nederland, gerangschikt op beoordeling.',
    numberOfItems: packages.length,
    itemListElement: [...packages]
      .sort((a, b) => b.reviewScore - a.reviewScore)
      .map((pkg, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: pkg.name,
        url: `https://boekhoudpakketkeuze.nl/software/${pkg.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <PageHero
        title="Alle Boekhoudpakketten"
        highlightedSubtitle="Vergelijk & Kies 2026"
        subtitle="Bekijk de populairste boekhoudprogramma's met uitgebreide reviews, prijsinformatie en beoordelingen."
        badge="Overzicht 2026"
        breadcrumbs={[{ label: 'Software', href: '/software' }]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/software?wizard=true"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              ✨ Vind jouw ideale pakket
            </Link>
            <Link
              href="/vergelijken"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl font-semibold text-text-main hover:bg-stone-50 transition-colors"
            >
              ⚖️ Vergelijk pakketten
            </Link>
          </div>

          <p className="text-sm text-text-muted mb-6">{packages.length} pakketten gevonden</p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {packages.map((pkg, i) => (
              <SoftwareCard key={pkg.id} software={pkg} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
