'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-text-main mb-8">Veelgestelde Vragen</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`border rounded-2xl transition-all ${
              expandedIdx === i ? 'border-primary bg-white shadow-sm' : 'border-border bg-surface hover:border-primary/50'
            }`}
          >
            <button
              onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-semibold text-text-main pr-4">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-text-muted shrink-0 transition-transform ${
                  expandedIdx === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedIdx === i && (
              <div className="px-5 pb-5 text-text-muted leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
