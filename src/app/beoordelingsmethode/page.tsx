import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Beoordelingsmethode | Boekhoudpakketkeuze.nl',
  description: 'Lees hoe Boekhoudpakketkeuze.nl boekhoudpakketten beoordeelt op prijs, functies, gebruiksgemak, support, schaalbaarheid en geschiktheid per doelgroep.',
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl/beoordelingsmethode' },
};

export default function BeoordelingsmethodePage() {
  return (
    <>
      <PageHero
        title="Hoe wij boekhoudpakketten beoordelen"
        subtitle="Op Boekhoudpakketkeuze.nl vergelijken we boekhoudsoftware voor zzp en mkb op basis van vaste criteria. Op deze pagina lees je welke onderdelen meetellen in onze beoordeling en hoe we omgaan met commerciële samenwerkingen."
        breadcrumbs={[{ label: 'Beoordelingsmethode', href: '/beoordelingsmethode' }]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-border p-8 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-text-main mb-4">Onze beoordelingscriteria</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Wij beoordelen boekhoudpakketten op de volgende onderdelen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-muted">
                <li>prijs en transparantie van abonnementen</li>
                <li>functies, zoals facturatie, btw-aangifte, bankkoppelingen en rapportages</li>
                <li>gebruiksgemak en duidelijkheid van de interface</li>
                <li>ondersteuning en bereikbaarheid van support</li>
                <li>schaalbaarheid voor groeiende ondernemingen</li>
                <li>geschiktheid per type ondernemer, zoals zzp, eenmanszaak of mkb</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-main mb-4">Hoe scores tot stand komen</h2>
              <p className="text-text-muted leading-relaxed">
                We combineren productinformatie, publieke informatie van aanbieders en onze eigen vergelijking op vaste criteria. Een label zoals &lsquo;hoogste totaalscore&rsquo; betekent dat een pakket binnen onze methodiek het sterkst scoort op het totaal van de beoordeelde onderdelen. Een label betekent niet dat een pakket voor iedere ondernemer automatisch de beste keuze is.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-main mb-4">Commerciële samenwerkingen</h2>
              <p className="text-text-muted leading-relaxed">
                Op sommige pagina&apos;s kunnen commerciële samenwerkingen een rol spelen. Dat kan bijvoorbeeld betekenen dat we een vergoeding ontvangen bij een klik of aanvraag. Zulke samenwerkingen hebben geen invloed op de manier waarop we onze beoordelingscriteria formuleren. Waar relevant maken we commerciële relaties duidelijk herkenbaar.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-main mb-4">Laatste controle</h2>
              <p className="text-text-muted leading-relaxed">
                Wij controleren inhoud regelmatig en passen pagina&apos;s aan wanneer prijzen, functies of voorwaarden veranderen. Toch raden we aan om bij een definitieve keuze altijd ook de website van de aanbieder zelf te bekijken.
              </p>
            </div>

            <div className="mt-8 p-6 bg-stone-50 rounded-xl">
              <p className="text-text-muted text-sm">
                Heb je vragen over onze werkwijze? <Link href="/contact" className="text-primary hover:underline font-medium">Neem contact met ons op</Link>. Lees ook meer <Link href="/over-ons" className="text-primary hover:underline font-medium">over ons</Link>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
