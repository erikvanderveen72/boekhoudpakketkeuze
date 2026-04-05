import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/knowledgeData';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return { title: 'Artikel niet gevonden' };
  return {
    title: `${article.title} | Kennisbank`,
    description: article.summary,
    alternates: { canonical: `https://boekhoudpakketkeuze.nl/kennisbank/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  // Article structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    author: {
      '@type': 'Organization',
      name: 'Boekhoudpakketkeuze.nl',
      url: 'https://boekhoudpakketkeuze.nl',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Boekhoudpakketkeuze.nl',
      url: 'https://boekhoudpakketkeuze.nl',
      logo: 'https://boekhoudpakketkeuze.nl/favicon.svg',
    },
    datePublished: '2026-01-15',
    dateModified: '2026-04-01',
    mainEntityOfPage: `https://boekhoudpakketkeuze.nl/kennisbank/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        title={article.title}
        subtitle={article.summary}
        badge={article.categoryLabel}
        breadcrumbs={[
          { label: 'Kennisbank', href: '/kennisbank' },
          { label: article.title, href: `/kennisbank/${article.slug}` },
        ]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-border p-8">
            {/* Laatst gecontroleerd */}
            <p className="text-sm text-text-muted mb-6 italic">Laatst gecontroleerd op: 5 april 2026</p>

            {/* Intro */}
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-text-muted leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}

            {/* Disclaimer */}
            <div className="p-4 bg-stone-50 rounded-xl mb-6">
              <p className="text-sm text-text-muted">Dit artikel is informatief bedoeld en helpt je bij het vergelijken van boekhoudsoftware. Controleer prijzen, voorwaarden en actuele functies altijd ook bij de aanbieder zelf.</p>
            </div>

            {/* Sections */}
            {article.sections.map((section, i) => (
              <div key={i} className="mt-10">
                <h2 className="text-2xl font-bold text-text-main mb-4">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-text-muted leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {/* CTA */}
            <div className="mt-12 p-6 bg-stone-50 rounded-xl text-center">
              <h3 className="text-xl font-bold text-text-main mb-3">Op zoek naar het juiste boekhoudpakket?</h3>
              <p className="text-text-muted mb-4">Vergelijk alle pakketten of gebruik onze gratis keuzehulp.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/vergelijken" className="px-5 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                  Vergelijk pakketten
                </Link>
                <Link href="/software?wizard=true" className="px-5 py-2.5 border border-border rounded-xl font-semibold text-text-main hover:bg-stone-50 transition-colors">
                  Gratis Keuzehulp
                </Link>
              </div>
            </div>
          </article>

          {/* Related articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-text-main mb-6">Gerelateerde artikelen</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {articles
                .filter(a => a.slug !== article.slug)
                .slice(0, 4)
                .map(related => (
                  <Link
                    key={related.id}
                    href={`/kennisbank/${related.slug}`}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:shadow-md transition-all"
                  >
                    <span className="text-2xl">{related.icon}</span>
                    <div>
                      <h3 className="font-semibold text-text-main text-sm">{related.title}</h3>
                      <p className="text-xs text-text-muted mt-1 line-clamp-2">{related.summary}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {article.faqItems && article.faqItems.length > 0 && (
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSchema items={article.faqItems} />
          </div>
        </section>
      )}
    </>
  );
}
