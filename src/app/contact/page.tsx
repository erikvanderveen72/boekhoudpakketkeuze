import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contact | Boekhoudpakketkeuze.nl',
  description: 'Neem contact op met Boekhoudpakketkeuze.nl voor vragen, opmerkingen of correcties.',
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-border p-8 space-y-6">
            <p className="text-text-muted leading-relaxed">
              Heb je een vraag, opmerking of correctie over een vergelijking of artikel op Boekhoudpakketkeuze.nl? Neem dan contact met ons op via het contactformulier of per e-mail.
            </p>
            <p className="text-text-muted leading-relaxed">
              We ontvangen ook graag meldingen als informatie op de site niet meer actueel is.
            </p>

            <div className="mt-8 p-6 bg-stone-50 rounded-xl">
              <p className="text-text-muted text-sm">
                Bekijk ook onze <Link href="/beoordelingsmethode" className="text-primary hover:underline font-medium">beoordelingsmethode</Link> of lees meer <Link href="/over-ons" className="text-primary hover:underline font-medium">over ons</Link>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
