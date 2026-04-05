import Link from 'next/link';
import { CheckCircle, Lock, Shield, RefreshCw, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-extrabold text-white">
              Boekhoudpakket<span className="text-blue-400">keuze</span>.nl
            </span>
          </Link>
          <p className="mt-3 text-sm max-w-md">Vergelijkingsplatform voor boekhoudsoftware in Nederland. We lichten onze beoordelingsmethode en commerciële relaties openbaar toe.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Software</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/software" className="hover:text-white transition-colors">Alle pakketten</Link></li>
              <li><Link href="/software/e-boekhouden" className="hover:text-white transition-colors">e-Boekhouden.nl</Link></li>
              <li><Link href="/software/moneymonk" className="hover:text-white transition-colors">MoneyMonk</Link></li>
              <li><Link href="/software/moneybird" className="hover:text-white transition-colors">Moneybird</Link></li>
              <li><Link href="/software/jortt" className="hover:text-white transition-colors">Jortt</Link></li>
              <li><Link href="/software/exact-online" className="hover:text-white transition-colors">Exact Online</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Vergelijken</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vergelijken" className="hover:text-white transition-colors">Vergelijkingstool</Link></li>
              <li><Link href="/gratis-proberen" className="hover:text-white transition-colors">Gratis Proberen</Link></li>
              <li><Link href="/software?wizard=true" className="hover:text-white transition-colors">Keuzehulp</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Kennisbank</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kennisbank/zelf-boekhouden-vs-boekhouder" className="hover:text-white transition-colors">Zelf boekhouden</Link></li>
              <li><Link href="/kennisbank/btw-aangifte-zelf-doen" className="hover:text-white transition-colors">BTW Aangifte</Link></li>
              <li><Link href="/kennisbank/starters-boekhouden-tips" className="hover:text-white transition-colors">Tips voor starters</Link></li>
              <li><Link href="/kennisbank" className="hover:text-white transition-colors">Alle artikelen</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Over deze site</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/over-ons" className="hover:text-white transition-colors">Over ons</Link></li>
              <li><Link href="/beoordelingsmethode" className="hover:text-white transition-colors">Beoordelingsmethode</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/tips" className="hover:text-white transition-colors">Tips & Advies</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1 text-xs">
            <Lock size={12} />
            <span>SSL beveiligd</span>
          </div>
          <div className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1 text-xs">
            <Shield size={12} />
            <span>Transparant over beoordelingscriteria en samenwerkingen</span>
          </div>
          <div className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1 text-xs">
            <RefreshCw size={12} />
            <span>Regelmatig gecontroleerd en bijgewerkt</span>
          </div>
          <div className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1 text-xs">
            <Award size={12} />
            <span>AVG-proof</span>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          <p>&copy; 2026 Boekhoudpakketkeuze.nl &mdash; Transparant beoordeeld op basis van vaste criteria</p>
        </div>
      </div>
    </footer>
  );
}
