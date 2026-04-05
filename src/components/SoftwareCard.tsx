import Link from 'next/link';
import { Check, X, ExternalLink } from 'lucide-react';
import { SoftwarePackage } from '@/data/softwareData';

interface SoftwareCardProps {
  software: SoftwarePackage;
  matchScore?: number;
  matchLabel?: string;
  matchTooltip?: string;
  rank?: number;
}

export default function SoftwareCard({ software, matchScore, matchLabel, matchTooltip, rank }: SoftwareCardProps) {
  const isTopPick = rank === 1;

  return (
    <div className={`relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg ${
      isTopPick ? 'border-primary/30 shadow-md ring-2 ring-primary/10' : 'border-border hover:border-primary/20'
    }`}>
      {matchLabel && (
        <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-amber-500 to-orange-500 px-12 py-1 shadow-md z-10" title={matchTooltip}>
          <span className="text-xs font-semibold text-white whitespace-nowrap">{matchLabel}</span>
        </div>
      )}

      <div className="p-6 pt-8">
        <div className="flex items-start justify-between gap-4">
          <div className="pr-12">
            <h3 className="text-lg font-bold text-text-main">{software.name}</h3>
            <p className="text-sm text-text-muted">{software.bestFor}</p>
          </div>
          {matchScore !== undefined && (
            <div className="flex flex-col items-end min-w-[60px]">
              <div className="text-2xl font-bold text-primary">{matchScore}%</div>
              <div className="text-xs text-text-muted">match</div>
            </div>
          )}
        </div>

        <p className="mt-4 text-sm text-stone-700">{software.description}</p>

        <div className="mt-4 flex items-center justify-end">
          <div className="text-right">
            <div className="text-xl font-bold text-text-main">
              &euro;{software.monthlyPrice.toFixed(2)}
              <span className="text-sm font-normal text-text-muted">/mnd</span>
            </div>
            {software.priceNote && (
              <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full border border-emerald-200">
                {software.priceNote}
              </span>
            )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-5">
          <FeatureIndicator label="Bankkoppeling" enabled={software.features.bankLink} />
          <FeatureIndicator label="Scan & Herken" enabled={software.features.ocr} />
          <FeatureIndicator label="Urenregistratie" enabled={software.features.hours} />
          <FeatureIndicator label="Voorraadbeheer" enabled={software.features.stock} />
          <FeatureIndicator label="Mobiele App" enabled={software.features.app} />
          <FeatureIndicator label="BTW Direct" enabled={software.features.vatDirect} />
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={software.website}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`flex-1 inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              isTopPick
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-stone-900 text-white hover:bg-stone-800'
            }`}
          >
            Probeer Gratis
            <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            href={`/software/${software.id}`}
            className="px-4 py-2.5 rounded-xl border border-border text-sm font-semibold text-text-main hover:bg-stone-50 transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureIndicator({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {enabled ? <Check className="h-4 w-4 text-success" /> : <X className="h-4 w-4 text-stone-300" />}
      <span className={`text-sm ${enabled ? 'text-stone-700' : 'text-stone-400'}`}>{label}</span>
    </div>
  );
}
