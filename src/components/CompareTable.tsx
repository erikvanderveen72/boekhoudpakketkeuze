'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SoftwarePackage, softwarePackages } from '@/data/softwareData';
import {
  Check,
  X,
  HelpCircle,
  ArrowRight,
  ArrowLeftRight,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface FeatureSection {
  title: string;
  icon: string;
  features: {
    key: string;
    label: string;
    tooltip: string;
    getValue: (pkg: SoftwarePackage) => React.ReactNode;
  }[];
}

const featureSections: FeatureSection[] = [
  {
    title: 'Prijzen & Contracten',
    icon: '💰',
    features: [
      {
        key: 'price',
        label: 'Prijs per maand',
        tooltip: 'Minimale maandelijkse kosten voor het pakket',
        getValue: (pkg) => pkg.priceLabel || (pkg.monthlyPrice === 0 ? 'Gratis' : `€${pkg.monthlyPrice.toFixed(2)}`),
      },
      {
        key: 'priceNote',
        label: 'Speciale aanbiedingen',
        tooltip: 'Gratis proefperiodes of speciale starterskortingen',
        getValue: (pkg) => pkg.priceNote || '—',
      },
      {
        key: 'trial',
        label: 'Gratis proefperiode',
        tooltip: 'Aantal dagen gratis proberen',
        getValue: (pkg) => `${pkg.trialPeriodDays} dagen`,
      },
    ],
  },
  {
    title: 'Basisboekhouding',
    icon: '📊',
    features: [
      {
        key: 'vatDirect',
        label: 'BTW direct versturen',
        tooltip: 'Rechtstreeks aangifte doen vanuit de software',
        getValue: (pkg) => pkg.features.vatDirect,
      },
      {
        key: 'bankLink',
        label: 'Automatische bankkoppeling',
        tooltip: 'Automatisch importeren van banktransacties',
        getValue: (pkg) => pkg.features.bankLink,
      },
      {
        key: 'ocr',
        label: 'OCR - Bonnetjes scannen',
        tooltip: 'Automatisch herkennen van ontvangsten en facturen',
        getValue: (pkg) => pkg.features.ocr,
      },
    ],
  },
  {
    title: 'Facturatie',
    icon: '📄',
    features: [
      {
        key: 'invoicing',
        label: 'Facturatie',
        tooltip: 'Professionele facturen opstellen',
        getValue: () => true,
      },
      {
        key: 'quotes',
        label: 'Offertes',
        tooltip: 'Offertes voor klanten opstellen',
        getValue: () => true,
      },
    ],
  },
  {
    title: 'Uren & Projecten',
    icon: '⏱️',
    features: [
      {
        key: 'hours',
        label: 'Urenregistratie',
        tooltip: 'Volgen van gewerkte uren per project',
        getValue: (pkg) => pkg.features.hours,
      },
    ],
  },
  {
    title: 'App & Gebruiksgemak',
    icon: '📱',
    features: [
      {
        key: 'app',
        label: 'Mobiele app',
        tooltip: 'Applicatie voor telefoon of tablet',
        getValue: (pkg) => pkg.features.app,
      },
      {
        key: 'score',
        label: 'Beoordelingen',
        tooltip: 'Gemiddelde score op basis van klantreviews',
        getValue: (pkg) => `${pkg.reviewScore}/10 (${pkg.reviewCount} reviews)`,
      },
    ],
  },
  {
    title: 'Geavanceerd',
    icon: '🔧',
    features: [
      {
        key: 'stock',
        label: 'Voorraadbeheer',
        tooltip: 'Beheren van voorraad en voorraadbewegingen',
        getValue: (pkg) => pkg.features.stock,
      },
      {
        key: 'multiUser',
        label: 'Meerdere gebruikers',
        tooltip: 'Toegang voor meerdere teamleden tegelijk',
        getValue: (pkg) => pkg.features.multiUser,
      },
    ],
  },
];

interface FeatureCheckProps {
  value: React.ReactNode;
}

const FeatureCheck: React.FC<FeatureCheckProps> = ({ value }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <div className="flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
          <Check className="h-5 w-5 text-accent" />
        </div>
      </div>
    ) : (
      <div className="flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50">
          <X className="h-5 w-5 text-red-500" />
        </div>
      </div>
    );
  }
  return <div className="text-center text-sm text-text-main">{value}</div>;
};

export default function CompareTable() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    featureSections.reduce(
      (acc, section) => ({
        ...acc,
        [section.title]: true,
      }),
      {}
    )
  );

  const selectedPackages = softwarePackages.filter((pkg) =>
    selectedIds.includes(pkg.id)
  );

  const togglePackage = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      } else if (prev.length < 4) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const clearSelection = () => {
    setSelectedIds([]);
  };

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const hasValidSelection = selectedIds.length >= 2;

  return (
    <div className="w-full">
      {/* Package Selection */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 mb-4">
          {softwarePackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => togglePackage(pkg.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                selectedIds.includes(pkg.id)
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-stone-100 text-text-main hover:bg-stone-200'
              } ${selectedIds.length >= 4 && !selectedIds.includes(pkg.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={selectedIds.length >= 4 && !selectedIds.includes(pkg.id)}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <span>
            {selectedIds.length === 0
              ? 'Selecteer minstens 2 pakketten om te vergelijken (max 4)'
              : `${selectedIds.length} pakket${selectedIds.length !== 1 ? 'ten' : ''} geselecteerd`}
          </span>
          {selectedIds.length > 0 && (
            <button
              onClick={clearSelection}
              className="ml-auto flex items-center gap-1 text-primary hover:text-primary-dark transition-colors"
              aria-label="Selectie wissen"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Wissen</span>
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {!hasValidSelection && (
        <div className="rounded-2xl border border-border bg-stone-50 p-12 text-center">
          <div className="mb-4 text-5xl">📊</div>
          <h3 className="mb-2 text-lg font-bold text-text-main">
            Selecteer pakketten om te vergelijken
          </h3>
          <p className="text-text-muted">
            Kies minstens 2 boekhoudpakketten om ze naast elkaar te zien.
          </p>
          {selectedIds.length === 1 && (
            <p className="mt-2 text-sm text-accent">
              ✓ Je hebt {selectedPackages[0]?.name} geselecteerd. Selecteer nog minstens één pakket.
            </p>
          )}
        </div>
      )}

      {/* Comparison Grid */}
      {hasValidSelection && (
        <div className="space-y-6">
          {/* Mobile Hint */}
          <div className="md:hidden bg-primary-light px-4 py-3 rounded-lg text-sm text-text-main">
            💡 Tip: Veeg naar rechts om alle kolommen te zien
          </div>

          {/* Feature Sections */}
          {featureSections.map((section) => (
            <div key={section.title} className="overflow-hidden rounded-2xl border border-border bg-white">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between gap-4 bg-stone-50 px-6 py-4 hover:bg-stone-100 transition-colors"
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="font-bold text-text-main">{section.title}</h3>
                </div>
                {expandedSections[section.title] ? (
                  <ChevronUp className="h-5 w-5 text-text-muted flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-text-muted flex-shrink-0" />
                )}
              </button>

              {/* Section Content */}
              {expandedSections[section.title] && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-white">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted min-w-[180px] border-r border-border">
                          Functie
                        </th>
                        {selectedPackages.map((pkg) => (
                          <th
                            key={pkg.id}
                            className="px-6 py-3 text-center text-sm font-bold text-text-main min-w-[150px] border-r border-border last:border-r-0"
                          >
                            {pkg.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.features.map((feature, idx) => (
                        <tr
                          key={feature.key}
                          className={
                            idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'
                          }
                        >
                          {/* Feature Label */}
                          <td className="px-6 py-4 text-sm font-medium text-text-main min-w-[180px] border-r border-border">
                            <div className="flex items-center gap-2">
                              <span>{feature.label}</span>
                              <span title={feature.tooltip}>
                                <HelpCircle className="h-4 w-4 text-text-muted flex-shrink-0" />
                              </span>
                            </div>
                          </td>

                          {/* Package Values */}
                          {selectedPackages.map((pkg) => (
                            <td
                              key={pkg.id}
                              className={`px-6 py-4 text-center min-w-[150px] border-r border-border last:border-r-0 ${
                                idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'
                              }`}
                            >
                              <FeatureCheck value={feature.getValue(pkg)} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {/* Pros & Cons Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedPackages.map((pkg) => (
              <div key={pkg.id} className="rounded-2xl border border-border bg-white p-6">
                <h4 className="mb-4 font-bold text-text-main">{pkg.name}</h4>

                {/* Pros */}
                <div className="mb-6">
                  <h5 className="mb-2 text-sm font-semibold text-accent">
                    ✓ Voordelen
                  </h5>
                  <ul className="space-y-1">
                    {pkg.pros.map((pro, idx) => (
                      <li key={idx} className="text-xs text-text-muted leading-snug">
                        • {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <h5 className="mb-2 text-sm font-semibold text-red-500">
                    ✗ Nadelen
                  </h5>
                  <ul className="space-y-1">
                    {pkg.cons.map((con, idx) => (
                      <li key={idx} className="text-xs text-text-muted leading-snug">
                        • {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl border border-border bg-gradient-to-br from-primary-light to-white p-6"
              >
                <p className="mb-4 text-sm font-semibold text-text-main">
                  {pkg.name}
                </p>

                <div className="space-y-3">
                  <a
                    href={pkg.website}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition-all hover:bg-primary-dark"
                  >
                    <span>Probeer Gratis</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <Link
                    href={`/software/${pkg.id}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-white px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary-light"
                  >
                    <span>Bekijk details</span>
                    <ArrowLeftRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-4 text-xs text-text-muted">
                  {pkg.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
