import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { articles } from '@/data/knowledgeData';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Kennisbank Boekhouding 2026 | Tips & Handleidingen',
  description: 'Praktische handleidingen en tips over boekhouden: BTW-aangifte, factureren, administratie en meer. Voor ZZP\'ers en MKB.',
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl/kennisbank' },
};

const categoryColors: Record<string, string> = {
  belastingen: 'bg-red-100 text-red-800',
  administratie: 'bg-blue-100 text-blue-800',
  software: 'bg-purple-100 text-purple-800',
  tips: 'bg-green-100 text-green-800',
};

export default function KennisbankPage() {
  return (
    <>
      <PageHero
        title="Kennisbank"
        highlightedSubtitle="Boekhouding & Administratie"
        subtitle="Van BTW-aangifte tot facturen maken. Praktische handleidingen en tips voor elke ondernemer."
        badge="Artikelen & Handleidingen"
        breadcrumbs={[{ label: 'Kennisbank', href: '/kennisbank' }]}
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <div key={article.id} className="group bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{article.icon}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[article.category] || 'bg-stone-100 text-stone-700'}`}>
                    {article.categoryLabel}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-text-main group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                <p className="text-text-muted text-sm mb-4 line-clamp-2">{article.summary}</p>
                <Link href={`/kennisbank/${article.slug}`} className="inline-flex items-center text-sm font-medium text-primary hover:gap-3 gap-1 transition-all">
                  Lees meer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
