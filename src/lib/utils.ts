export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number): string {
  return amount.toFixed(2).replace('.', ',');
}

export function formatTrialPeriod(days: number): string {
  if (days >= 365) {
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    return months > 0 ? `${years} jaar + ${months} maanden` : `${years} jaar`;
  }
  if (days >= 30) {
    const months = Math.floor(days / 30);
    return `${months} maand${months > 1 ? 'en' : ''}`;
  }
  return `${days} dagen`;
}
