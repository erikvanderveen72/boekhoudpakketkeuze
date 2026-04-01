import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina Niet Gevonden',
  description: 'De pagina die je zoekt bestaat niet of is verplaatst.',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-3xl font-bold text-text-main mb-4">Pagina niet gevonden</h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          De pagina die je zoekt bestaat niet of is verplaatst. Ga terug naar de homepage of bekijk onze populaire pagina&apos;s.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
            Naar Homepage
          </Link>
          <Link href="/software" className="px-6 py-3 border border-border rounded-xl font-semibold text-text-main hover:bg-stone-50 transition-colors">
            Bekijk alle pakketten
          </Link>
        </div>
      </div>
    </div>
  );
}
