import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import CompareTable from '@/components/CompareTable';

export const metadata: Metadata = {
  title: 'Boekhoudpakketten Vergelijken 2026 | Functies & Prijzen',
  description: 'Vergelijk boekhoudpakketten op prijs, functies, bankkoppeling, OCR, urenregistratie en BTW-aangifte. Vind het pakket dat bij jouw bedrijf past.',
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl/vergelijken' },
};

const faqItems = [
  { question: 'Wat is het beste boekhoudpakket voor ZZP\'ers?', answer: 'Het beste boekhoudpakket hangt af van je situatie. Voor starters is e-Boekhouden.nl populair (15 maanden gratis). Voor dienstverleners is MoneyMonk ideaal.' },
  { question: 'Kan ik boekhoudpakketten gratis proberen?', answer: 'Ja, alle boekhoudpakketten in ons overzicht bieden een gratis proefperiode van minimaal 14 dagen tot wel 15 maanden.' },
  { question: 'Hoeveel pakketten kan ik tegelijk vergelijken?', answer: 'Je kunt tot 4 pakketten tegelijk vergelijken in onze vergelijkingstool. Selecteer de pakketten die je interesseren en bekijk ze naast elkaar.' },
  { question: 'Welke functies zijn het belangrijkst bij boekhoudpakketten?', answer: 'De belangrijkste functies zijn: BTW-aangifte, bankkoppeling, facturatie, Scan & Herken (OCR), en urenregistratie. Welke functies essentieel zijn hangt af van je bedrijfsactiviteiten.' },
  { question: 'Is de vergelijking op Boekhoudpakketkeuze.nl onafhankelijk?', answer: 'Ja, onze vergelijking is onafhankelijk. We baseren ons op objectieve criteria en echte gebruikersreviews.' },
];

export default function VergelijkenPage() {
  return (
    <>
      <PageHero
        title="Boekhoudpakketten"
        highlightedSubtitle="Vergelijken 2026"
        subtitle="Vergelijk de beste boekhoudprogramma's op prijs, functies en reviews."
        badge="Vergelijkingstool"
        breadcrumbs={[{ label: 'Vergelijken', href: '/vergelijken' }]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompareTable />
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSchema items={faqItems} />
        </div>
      </section>
    </>
  );
}
