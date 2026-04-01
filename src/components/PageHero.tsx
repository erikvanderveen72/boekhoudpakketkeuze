import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, highlightedSubtitle, badge, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-stone-900 py-16 md:py-24">
      {/* Animated blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 opacity-15 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-600 opacity-10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-8 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-stone-500" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-stone-400">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-blue-200 hover:text-white transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-stone-300 text-sm font-medium">{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
          {title}
        </h1>

        {highlightedSubtitle && (
          <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            {highlightedSubtitle}
          </p>
        )}

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-stone-400 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Breadcrumb JSON-LD */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://boekhoudpakketkeuze.nl' },
                ...breadcrumbs.map((crumb, i) => ({
                  '@type': 'ListItem',
                  position: i + 2,
                  name: crumb.label,
                  item: `https://boekhoudpakketkeuze.nl${crumb.href}`,
                })),
              ],
            }),
          }}
        />
      )}
    </section>
  );
}
