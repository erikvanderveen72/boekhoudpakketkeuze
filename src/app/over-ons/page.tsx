import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Over ons | Boekhoudpakketkeuze.nl',
  description: 'Lees wie achter Boekhoudpakketkeuze.nl zit en hoe wij boekhoudpakketten vergelijken voor zzp en mkb.',
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl/over-ons' },
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        title="Over Boekhoudpakketkeuze.nl"
        breadcrumbs={[{ label: 'Over ons', href: '/over-ons' }]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-border p-8 space-y-6">
            <p className="text-text-muted leading-relaxed">
              Boekhoudpakketkeuze.nl helpt ondernemers bij het vergelijken van boekhoudsoftware voor zzp en mkb. We maken vergelijkingen op basis van vaste criteria zoals prijs, functies, gebruiksgemak en geschiktheid per type ondernemer.
            </p>
            <p className="text-text-muted leading-relaxed">
              Wij vinden het belangrijk dat bezoekers kunnen begrijpen hoe aanbevelingen tot stand komen. Daarom lichten we onze beoordelingsmethode toe en maken we commerciële samenwerkingen herkenbaar waar dat relevant is.
            </p>
            <p className="text-text-muted leading-relaxed">
              Heb je een vraag of zie je een onjuistheid op de website? Neem dan contact met ons op via de <Link href="/contact" className="text-primary hover:underline font-medium">contactpagina</Link>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/beoordelingsmethode" className="px-5 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                Bekijk onze beoordelingsmethode
              </Link>
              <Link href="/contact" className="px-5 py-2.5 border border-border rounded-xl font-semibold text-text-main hover:bg-stone-50 transition-colors">
                Neem contact op
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
