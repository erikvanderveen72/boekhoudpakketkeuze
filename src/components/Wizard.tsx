'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Building,
  Briefcase,
  Hammer,
  Bot,
  Users,
  Wrench,
  Car,
  Smartphone,
  X,
} from 'lucide-react';
import {
  WizardAnswer,
  calculateMatchScores,
  SoftwarePackage,
} from '@/data/softwareData';

interface WizardProps {
  onClose: () => void;
}

type Step = 'status' | 'activity' | 'stock' | 'bookkeeper' | 'features' | 'results';

const STEPS: Step[] = [
  'status',
  'activity',
  'stock',
  'bookkeeper',
  'features',
  'results',
];

// Sub-component: QuestionStep
interface QuestionStepProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function QuestionStep({ title, description, children }: QuestionStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-text-main">{title}</h2>
        {description && (
          <p className="mt-2 text-text-muted">{description}</p>
        )}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

// Sub-component: OptionCard
interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  isSelected: boolean;
  onClick: () => void;
  layout?: 'horizontal' | 'vertical';
}

function OptionCard({
  icon,
  title,
  description,
  isSelected,
  onClick,
  layout = 'vertical',
}: OptionCardProps) {
  const baseClasses =
    'rounded-lg border-2 p-4 cursor-pointer transition-all duration-200';
  const borderClasses = isSelected
    ? 'border-primary bg-white'
    : 'border-border bg-white hover:border-primary hover:shadow-md';

  if (layout === 'horizontal') {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${borderClasses} flex items-start gap-4 text-left`}
      >
        <div className="text-primary mt-1 flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <div className="font-semibold text-text-main">{title}</div>
          {description && (
            <div className="mt-1 text-sm text-text-muted">{description}</div>
          )}
        </div>
        {isSelected && (
          <Check className="text-primary mt-1 flex-shrink-0" size={20} />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${borderClasses} text-center`}
    >
      <div className="flex justify-center text-primary mb-3">{icon}</div>
      <div className="font-semibold text-text-main">{title}</div>
      {description && (
        <div className="mt-2 text-sm text-text-muted">{description}</div>
      )}
      {isSelected && (
        <div className="mt-3 flex justify-center">
          <Check className="text-primary" size={20} />
        </div>
      )}
    </button>
  );
}

// Sub-component: FeatureToggle
interface FeatureToggleProps {
  icon: React.ReactNode;
  title: string;
  isEnabled: boolean;
  onToggle: () => void;
}

function FeatureToggle({
  icon,
  title,
  isEnabled,
  onToggle,
}: FeatureToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`rounded-lg border-2 p-4 transition-all duration-200 flex items-center gap-3 ${
        isEnabled
          ? 'border-primary bg-white'
          : 'border-border bg-white hover:border-primary'
      }`}
    >
      <div
        className={`flex-shrink-0 ${isEnabled ? 'text-primary' : 'text-text-muted'}`}
      >
        {icon}
      </div>
      <span className={`flex-1 text-left font-medium ${isEnabled ? 'text-text-main' : 'text-text-muted'}`}>
        {title}
      </span>
      <div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
          isEnabled
            ? 'bg-primary border-primary'
            : 'border-text-muted'
        }`}
      >
        {isEnabled && <Check size={16} className="text-white" />}
      </div>
    </button>
  );
}

// Sub-component: ResultCard
interface ResultCardProps {
  package: SoftwarePackage;
  score: number;
  label?: string;
}

function ResultCard({ package: pkg, score, label }: ResultCardProps) {
  const scorePercentage = Math.round(score);

  return (
    <div className="rounded-lg border border-border bg-white p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-primary">
              {scorePercentage}%
            </div>
            <div>
              <h3 className="font-bold text-text-main text-lg">{pkg.name}</h3>
              {label && (
                <p className="text-sm font-medium text-primary">{label}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-text-muted">{pkg.bestFor}</p>

      <div className="space-y-2">
        <h4 className="font-semibold text-text-main text-sm">Voordelen:</h4>
        <ul className="space-y-1">
          {pkg.pros.slice(0, 3).map((pro, idx) => (
            <li key={idx} className="text-sm text-text-muted flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 pt-2">
        <Link
          href={`/software/${pkg.id}`}
          className="flex-1 py-2 px-3 rounded-lg bg-primary text-white text-center text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Details bekijken
        </Link>
        <a
          href={pkg.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-lg border-2 border-primary text-primary text-center text-sm font-medium hover:bg-stone-100 transition-colors"
        >
          Website
        </a>
      </div>
    </div>
  );
}

export default function Wizard({ onClose }: WizardProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<WizardAnswer>({
    isStarter: false,
    activity: null,
    needsStock: false,
    bookkeeper: null,
    features: [],
  });

  const currentStep = STEPS[currentStepIndex];

  // Skip stock step if not trade
  const getVisibleSteps = (): Step[] => {
    return STEPS.filter(
      (step) => step !== 'stock' || answers.activity === 'trade'
    );
  };

  const visibleSteps = getVisibleSteps();
  const visibleStepIndex = visibleSteps.indexOf(currentStep);
  const progress = ((visibleStepIndex + 1) / visibleSteps.length) * 100;

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < STEPS.length) {
      setCurrentStepIndex(nextIndex);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStepIndex(prevIndex);
    }
  };

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === STEPS.length - 1;
  const canGoNext = () => {
    switch (currentStep) {
      case 'status':
        return true;
      case 'activity':
        return answers.activity !== null;
      case 'stock':
        return true;
      case 'bookkeeper':
        return answers.bookkeeper !== null;
      case 'features':
        return true;
      case 'results':
        return false;
      default:
        return false;
    }
  };

  const matchedPackages = calculateMatchScores(answers).slice(0, 5);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Progress Bar */}
        <div className="h-1 bg-stone-100">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-6">
          <div>
            <h1 className="text-2xl font-bold text-text-main">
              Keuzehulp Boekhoudpakket
            </h1>
            <p className="text-sm text-text-muted mt-1">
              Stap {visibleStepIndex + 1} van {visibleSteps.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-stone-100 transition-colors"
            aria-label="Sluiten"
          >
            <X size={24} className="text-text-muted" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {currentStep === 'status' && (
            <QuestionStep
              title="Ben je een starter?"
              description="Hoe lang ben je al ondernemer?"
            >
              <OptionCard
                icon={<Briefcase size={32} />}
                title="Ja, ik ben starter"
                description="Minder dan 1 jaar actief"
                isSelected={answers.isStarter === true}
                onClick={() =>
                  setAnswers((prev) => ({ ...prev, isStarter: true }))
                }
              />
              <OptionCard
                icon={<Building size={32} />}
                title="Nee, al langer bezig"
                description="Meer dan 1 jaar actief"
                isSelected={answers.isStarter === false}
                onClick={() =>
                  setAnswers((prev) => ({ ...prev, isStarter: false }))
                }
              />
            </QuestionStep>
          )}

          {currentStep === 'activity' && (
            <QuestionStep
              title="Wat is je bedrijfsactiviteit?"
              description="Wat is je voornaamste inkomstenbron?"
            >
              <OptionCard
                icon={<Briefcase size={32} />}
                title="Dienstverlening"
                description="Consultancy, advies, freelance werk"
                isSelected={answers.activity === 'service'}
                onClick={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    activity: 'service',
                    needsStock: false,
                  }))
                }
              />
              <OptionCard
                icon={<Wrench size={32} />}
                title="Handel / Webshop"
                description="Verkoop van goederen, e-commerce"
                isSelected={answers.activity === 'trade'}
                onClick={() =>
                  setAnswers((prev) => ({ ...prev, activity: 'trade' }))
                }
              />
              <OptionCard
                icon={<Hammer size={32} />}
                title="Bouw / Installatie"
                description="Aannemersbedrijf, installateurs"
                isSelected={answers.activity === 'construction'}
                onClick={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    activity: 'construction',
                    needsStock: false,
                  }))
                }
              />
            </QuestionStep>
          )}

          {currentStep === 'stock' && answers.activity === 'trade' && (
            <QuestionStep
              title="Heb je voorraadbeheer nodig?"
              description="Wil je je voorraad in het systeem bijhouden?"
            >
              <OptionCard
                icon={<Check size={32} />}
                title="Ja, voorraad bijhouden"
                description="Ik wil mijn voorraad tracken"
                isSelected={answers.needsStock === true}
                onClick={() =>
                  setAnswers((prev) => ({ ...prev, needsStock: true }))
                }
              />
              <OptionCard
                icon={<X size={32} />}
                title="Nee, niet nodig"
                description="Ik beheer voorraad manueel"
                isSelected={answers.needsStock === false}
                onClick={() =>
                  setAnswers((prev) => ({ ...prev, needsStock: false }))
                }
              />
            </QuestionStep>
          )}

          {currentStep === 'bookkeeper' && (
            <QuestionStep
              title="Hoe regel je je boekhouding?"
              description="Wat is je voorkeur voor boekhoudingsbeheer?"
            >
              <OptionCard
                icon={<Bot size={32} />}
                title="Ik doe alles zelf"
                description="Volledig DIY boekhouden"
                isSelected={answers.bookkeeper === 'diy'}
                onClick={() =>
                  setAnswers((prev) => ({ ...prev, bookkeeper: 'diy' }))
                }
              />
              <OptionCard
                icon={<Users size={32} />}
                title="Samenwerking"
                description="Met mijn boekhouder"
                isSelected={answers.bookkeeper === 'collaboration'}
                onClick={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    bookkeeper: 'collaboration',
                  }))
                }
              />
              <OptionCard
                icon={<Briefcase size={32} />}
                title="Volledig uitbesteden"
                description="Boekhouder doet alles"
                isSelected={answers.bookkeeper === 'outsource'}
                onClick={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    bookkeeper: 'outsource',
                  }))
                }
              />
            </QuestionStep>
          )}

          {currentStep === 'features' && (
            <QuestionStep
              title="Welke functies zijn belangrijk?"
              description="Selecteer de functies die je nodig hebt (optioneel)"
            >
              <FeatureToggle
                icon={<Car size={20} />}
                title="Rittenregistratie"
                isEnabled={answers.features.includes('ritten')}
                onToggle={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    features: prev.features.includes('ritten')
                      ? prev.features.filter((f) => f !== 'ritten')
                      : [...prev.features, 'ritten'],
                  }))
                }
              />
              <FeatureToggle
                icon={<Smartphone size={20} />}
                title="Mobiele App"
                isEnabled={answers.features.includes('app')}
                onToggle={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    features: prev.features.includes('app')
                      ? prev.features.filter((f) => f !== 'app')
                      : [...prev.features, 'app'],
                  }))
                }
              />
            </QuestionStep>
          )}

          {currentStep === 'results' && (
            <QuestionStep
              title="Je resultaten"
              description="Dit zijn de beste opties voor jou"
            >
              <div className="space-y-4">
                {matchedPackages.map((result) => (
                  <ResultCard
                    key={result.package.id}
                    package={result.package}
                    score={result.score}
                    label={result.label}
                  />
                ))}
              </div>
            </QuestionStep>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 border-t border-border p-6 bg-stone-50">
          <button
            onClick={handleBack}
            disabled={isFirstStep}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isFirstStep
                ? 'text-text-muted cursor-not-allowed'
                : 'text-text-main hover:bg-stone-100'
            }`}
          >
            <ArrowLeft size={20} />
            <span>Terug</span>
          </button>

          <div className="text-sm text-text-muted">
            Stap {visibleStepIndex + 1} van {visibleSteps.length}
          </div>

          {isLastStep ? (
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Check size={20} />
              <span>Klaar</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canGoNext()}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors font-medium ${
                canGoNext()
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-stone-100 text-text-muted cursor-not-allowed'
              }`}
            >
              <span>Volgende</span>
              <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
