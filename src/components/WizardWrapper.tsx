'use client';

import { useState } from 'react';
import Wizard from './Wizard';

export default function WizardWrapper() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowWizard(true)}
        className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all shadow-xl"
      >
        Start de Keuzehulp &rarr;
      </button>
      {showWizard && <Wizard onClose={() => setShowWizard(false)} />}
    </>
  );
}
