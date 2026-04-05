import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s | Boekhoudpakketkeuze.nl',
    default: 'Boekhoudpakketten vergelijken in 2026 | Boekhoudpakketkeuze.nl',
  },
  description: 'Vergelijk boekhoudpakketten voor zzp en mkb op prijs, functies, gebruiksgemak en geschiktheid. Bekijk onze transparante beoordelingsmethode.',
  keywords: ['boekhoudpakket', 'boekhoudsoftware', 'boekhoudprogramma', 'vergelijken', 'zzp', 'mkb', 'boekhouden', 'boekhoudpakket vergelijken', 'beste boekhoudpakket 2026', 'boekhoudpakket zzp', 'online boekhouden', 'boekhoudpakket kiezen'],
  metadataBase: new URL('https://boekhoudpakketkeuze.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://boekhoudpakketkeuze.nl',
    siteName: 'Boekhoudpakketkeuze.nl',
    title: 'Boekhoudpakketten vergelijken in 2026 | Boekhoudpakketkeuze.nl',
    description: 'Vergelijk boekhoudpakketten voor zzp en mkb op prijs, functies, gebruiksgemak en geschiktheid.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Boekhoudpakketkeuze.nl - Vergelijk Boekhoudpakketten' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  alternates: { canonical: 'https://boekhoudpakketkeuze.nl', languages: { 'nl-NL': 'https://boekhoudpakketkeuze.nl' } },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' as const, 'max-video-preview': -1 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <meta name="geo.country" content="NL" />
        <meta name="geo.placename" content="Netherlands" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'Boekhoudpakketkeuze.nl',
                  url: 'https://boekhoudpakketkeuze.nl',
                  description: 'Vergelijk boekhoudsoftware voor zzp en mkb in Nederland op prijs, functies en geschiktheid',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://boekhoudpakketkeuze.nl/software/{search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'Organization',
                  name: 'Boekhoudpakketkeuze.nl',
                  url: 'https://boekhoudpakketkeuze.nl',
                  logo: 'https://boekhoudpakketkeuze.nl/favicon.svg',
                  description: 'Vergelijkingsplatform voor boekhoudsoftware in Nederland. Transparant beoordeeld op basis van vaste criteria.',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Customer Service',
                    availableLanguage: 'Dutch',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-surface`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
