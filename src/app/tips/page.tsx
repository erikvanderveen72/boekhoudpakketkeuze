import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Lightbulb, AlertTriangle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Boekhoudpakket Kiezen: 10 Tips voor Ondernemers 2026',
  description: 'Praktische tips voor het kiezen van een boekhoudpakket. Van must-have functies tot gratis proefperiodes. Geschikt voor ZZP\'ers en MKB.',
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl/tips' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hoe kies je het beste boekhoudpakket?',
  description: 'In 10 stappen het juiste boekhoudpakket kiezen voor jouw bedrijf. Van situatieanalyse tot de eerste proefperiode.',
  totalTime: 'PT15M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Begin bij je situatie', text: 'Bepaal eerst wat voor ondernemer je bent: ZZP, eenmanszaak, VOF of BV. Dit bepaalt je vereisten.' },
    { '@type': 'HowToStep', position: 2, name: 'Maak een lijstje van must-have functies', text: 'Schrijf maximaal 3 functies op die je echt nodig hebt: bankkoppeling, OCR, urenregistratie, BTW-aangifte of mobiele app.' },
    { '@type': 'HowToStep', position: 3, name: 'Let op de totale kosten', text: 'Kijk niet alleen naar het maandtarief. Check ook kosten voor extra gebruikers, koppelingen en prijsverhogingen na de proefperiode.' },
    { '@type': 'HowToStep', position: 4, name: 'Altijd eerst gratis proberen', text: 'Gebruik de gratis proefperiode om een echte factuur te maken, je bank te koppelen en een bonnetje te scannen.' },
    { '@type': 'HowToStep', position: 5, name: 'Kijk of je boekhouder ermee kan werken', text: 'Vraag je boekhouder welke pakketten zij ondersteunen en of ze kunnen meekijken via een portaal.' },
    { '@type': 'HowToStep', position: 6, name: 'Gebruiksgemak telt zwaarder dan je denkt', text: 'Test of je snel vindt wat je zoekt, of facturen maken minuten duurt en of het dashboard begrijpelijk is.' },
    { '@type': 'HowToStep', position: 7, name: 'Test de klantenservice', text: 'Stuur al tijdens de proefperiode een vraag via chat of e-mail om de responssnelheid te testen.' },
    { '@type': 'HowToStep', position: 8, name: 'Denk aan koppelingen', text: 'Controleer of het pakket koppelt met je webshop, betaalsysteem, CRM en eventuele loonadministratie.' },
    { '@type': 'HowToStep', position: 9, name: 'Controleer exportmogelijkheden', text: 'Zorg dat je altijd je gegevens kunt exporteren: CSV, PDF-facturen, klantenbestand en auditfile.' },
    { '@type': 'HowToStep', position: 10, name: 'Je mag later altijd overstappen', text: 'Begin met een pakket dat nu past. De meeste pakketten zijn maandelijks opzegbaar en bieden importfuncties.' },
  ],
};

const faqItems = [
  { question: 'Wat is het beste boekhoudpakket voor starters?', answer: 'Voor starters is e-Boekhouden.nl een populaire keuze vanwege de 15 maanden gratis proefperiode. Moneybird is ook een goede optie met een intuïtieve interface en 6 maanden gratis.' },
  { question: 'Hoeveel kost een boekhoudpakket per maand?', answer: 'Boekhoudpakketten kosten doorgaans tussen de €8 en €50 per maand, afhankelijk van het pakket en de functies. Sommige pakketten bieden een gratis instapniveau. e-Boekhouden.nl biedt 15 maanden gratis voor starters, daarna vanaf €9,95 per maand. Prijsmodellen variëren: vast maandbedrag, omzetafhankelijk of modulair. Controleer altijd de aanbieder voor actuele tarieven.' },
  { question: 'Kan ik overstappen naar een ander boekhoudpakket?', answer: 'Ja, de meeste pakketten bieden import- en exportfuncties. Je kunt je gegevens exporteren als CSV of auditfile en importeren in het nieuwe pakket.' },
  { question: 'Kan ik gratis beginnen met boekhouden?', answer: 'Ja, veel pakketten bieden een gratis proefperiode. e-Boekhouden.nl biedt 15 maanden gratis en Moneybird 6 maanden. Zo kun je zonder risico uitproberen welk pakket bij je past. Na de proefperiode betaal je een maandabonnement.' },
  { question: 'Moet ik een boekhoudpakket gebruiken als zzp\'er?', answer: 'Het is niet verplicht, maar sterk aan te raden. Een boekhoudpakket bespaart tijd, voorkomt fouten en maakt BTW-aangifte veel eenvoudiger. De kosten zijn aftrekbaar.' },
];

export default function TipsPage() {
  return (
    <>
      <PageHero
        title="10 Tips voor het Kiezen"
        highlightedSubtitle="van een Boekhoudpakket"
        subtitle="Ook als je er nog nooit één hebt gekocht. Praktische stappen om de juiste keuze te maken."
        badge="Advies 2026"
        breadcrumbs={[{ label: 'Tips', href: '/tips' }]}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-12">
            <TipSection num={1} title="Begin bij je situatie (niet bij de software)">
              <p className="text-text-muted mb-4">Voordat je naar functies kijkt, bepaal je eerst: <strong className="text-text-main">wat ben jij?</strong> Dat bepaalt je vereisten.</p>
              <CheckList items={['Ben je zzp\'er, eenmanszaak, VOF of BV?', 'Doe je vooral diensten, handel, of heb je een webshop?', 'Werk je met btw (hoog/laag) of soms btw verlegd?', 'Heb je personeel (loonadministratie)?', 'Moet je projecten bijhouden (uren/ritten)?']} />
            </TipSection>

            <TipSection num={2} title="Maak een lijstje van must-have functies">
              <p className="text-text-muted mb-4">Niet elke functie is voor iedereen even belangrijk. Bepaal welke functies onmisbaar zijn.</p>
              <CheckList items={['Bankkoppeling: automatisch bankafschriften inladen', 'Scan & herken (OCR): bonnetjes fotograferen', 'Urenregistratie: uren per project bijhouden', 'BTW-aangifte: direct versturen naar Belastingdienst', 'Mobiele app: onderweg facturen maken']} />
              <Tip>Schrijf maximaal 3 functies op die je echt nodig hebt. Alles daarboven is mooi meegenomen.</Tip>
            </TipSection>

            <TipSection num={3} title="Let op de totale kosten">
              <p className="text-text-muted mb-4">Het maandtarief is maar één deel van de kosten. Kijk ook naar wat er niet inbegrepen is.</p>
              <WarningList items={['Extra kosten voor meer gebruikers of je boekhouder', 'Kosten voor koppeling met andere software', 'Prijsverhoging na de proefperiode', 'Kosten voor opslag of aantal facturen per maand']} />
            </TipSection>

            <TipSection num={4} title="Altijd eerst gratis proberen">
              <p className="text-text-muted mb-4">Alle serieuze boekhoudpakketten bieden een gratis proefperiode. Gebruik die altijd.</p>
              <CheckList items={['Maak een echte factuur aan', 'Koppel je bankrekening', 'Scan een bonnetje via de app', 'Maak een concept BTW-aangifte']} />
            </TipSection>

            <TipSection num={5} title="Kijk of je boekhouder ermee kan werken">
              <p className="text-text-muted mb-4">Heb je een boekhouder? Vraag welke software zij gebruiken of ondersteunen.</p>
              <CheckList items={['Met welke pakketten werkt jouw boekhouder?', 'Kan jij meekijken via een portaal?', 'Kost het extra tijd met dit pakket?']} />
            </TipSection>

            <TipSection num={6} title="Gebruiksgemak telt zwaarder dan je denkt">
              <p className="text-text-muted mb-4">De mooiste functies helpen niet als de software onhandig aanvoelt.</p>
              <CheckList items={['Je vindt snel wat je zoekt zonder tutorial', 'Factuur maken duurt minuten', 'De mobiele app werkt fijn', 'Je begrijpt het dashboard zonder uitleg']} />
            </TipSection>

            <TipSection num={7} title="Test de klantenservice">
              <p className="text-text-muted mb-4">Test de klantenservice al tijdens de proefperiode.</p>
              <CheckList items={['Stuur een vraag via chat of e-mail', 'Is er Nederlandstalige ondersteuning?', 'Zoek reviews over klantenservice', 'Check of er een kennisbank is']} />
            </TipSection>

            <TipSection num={8} title="Denk aan koppelingen">
              <p className="text-text-muted mb-4">Controleer of je boekhoudpakket kan koppelen met andere tools.</p>
              <CheckList items={['Webshops: WooCommerce, Shopify, Bol.com', 'Betalen: Mollie, Stripe, PayPal', 'CRM: HubSpot, Salesforce', 'Loonadministratie: Nmbrs, Loket.nl']} />
            </TipSection>

            <TipSection num={9} title="Controleer exportmogelijkheden">
              <p className="text-text-muted mb-4">Zorg dat je altijd je gegevens kunt exporteren.</p>
              <CheckList items={['CSV of Excel-export van boekingen', 'PDF-export van facturen', 'Export van klantenbestand', 'Accountantsexport (auditfile)']} />
            </TipSection>

            <TipSection num={10} title="Je mag later altijd overstappen">
              <p className="text-text-muted mb-4">Begin met een pakket dat nu bij je past. Overstappen is altijd mogelijk.</p>
              <Tip>Begin met een pakket dat nu past, gebruik de gratis proefperiode, en wees niet bang om later te wisselen. De meeste pakketten zijn maandelijks opzegbaar.</Tip>
            </TipSection>
          </article>

          {/* FAQ */}
          <div className="mt-16">
            <FAQSchema items={faqItems} />
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-stone-50 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-text-main mb-4">Klaar om te kiezen?</h2>
            <p className="text-text-muted mb-6">Gebruik onze gratis keuzehulp en vind binnen 2 minuten het boekhoudpakket dat bij jou past.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/software?wizard=true" className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                Start de Keuzehulp &rarr;
              </Link>
              <Link href="/vergelijken" className="px-6 py-3 border border-border rounded-xl font-semibold text-text-main hover:bg-stone-50 transition-colors">
                Vergelijk alle pakketten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TipSection({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-text-main mb-4 flex items-start gap-3">
        <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold">{num}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="bg-stone-50 rounded-xl p-6 mb-4">
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-text-muted">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WarningList({ items }: { items: string[] }) {
  return (
    <div className="bg-amber-50 rounded-xl p-6 mb-4 border border-amber-200">
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-text-muted">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-primary-light rounded-xl">
      <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
      <p className="text-sm text-text-muted">{children}</p>
    </div>
  );
}
