import { createClient } from '@supabase/supabase-js';
import { softwarePackages, SoftwarePackage } from '@/data/softwareData';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export interface DatabaseSoftwarePackage {
  id: string;
  slug: string;
  name: string;
  logo: string;
  monthly_price: number;
  yearly_price: number | null;
  price_note: string | null;
  has_free_version: boolean;
  trial_period_days: number;
  target_audience: string[];
  feature_ocr: boolean;
  feature_bank_link: boolean;
  feature_hours: boolean;
  feature_stock: boolean;
  feature_app: boolean;
  feature_vat_direct: boolean;
  feature_multi_user: boolean;
  review_score: number;
  review_count: number;
  usp: string | null;
  description: string | null;
  pros: string[];
  cons: string[];
  best_for: string | null;
  website: string | null;
  affiliate_link: string | null;
  is_active: boolean;
  is_featured: boolean;
  display_order: number;
}

function mapToStaticFormat(pkg: DatabaseSoftwarePackage): SoftwarePackage {
  // Merge with static data to get new content fields (detailedReview, faqItems, etc.)
  const staticPkg = softwarePackages.find(sp => sp.id === pkg.slug);
  return {
    id: pkg.slug,
    name: pkg.name,
    logo: pkg.logo,
    monthlyPrice: Number(pkg.monthly_price),
    priceNote: pkg.price_note || undefined,
    trialPeriodDays: pkg.trial_period_days,
    targetAudience: pkg.target_audience as SoftwarePackage['targetAudience'],
    features: {
      ocr: pkg.feature_ocr,
      bankLink: pkg.feature_bank_link,
      hours: pkg.feature_hours,
      stock: pkg.feature_stock,
      app: pkg.feature_app,
      vatDirect: pkg.feature_vat_direct,
      multiUser: pkg.feature_multi_user,
    },
    reviewScore: Number(pkg.review_score),
    reviewCount: pkg.review_count,
    usp: pkg.usp || '',
    description: pkg.description || '',
    pros: pkg.pros || [],
    cons: pkg.cons || [],
    bestFor: pkg.best_for || '',
    website: pkg.affiliate_link || pkg.website || '',
    // New SEO content fields from static data
    detailedReview: staticPkg?.detailedReview,
    faqItems: staticPkg?.faqItems,
    pricingDetails: staticPkg?.pricingDetails,
    idealFor: staticPkg?.idealFor,
  };
}

export async function getSoftwarePackages(): Promise<SoftwarePackage[]> {
  if (!supabase) return softwarePackages;
  try {
    const { data, error } = await supabase
      .from('software_packages')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });
    if (error || !data || data.length === 0) return softwarePackages;
    return data.map(pkg => mapToStaticFormat(pkg as unknown as DatabaseSoftwarePackage));
  } catch {
    return softwarePackages;
  }
}

export async function getSoftwareBySlug(slug: string): Promise<SoftwarePackage | undefined> {
  const packages = await getSoftwarePackages();
  return packages.find(p => p.id === slug);
}

export async function getArticles() {
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });
    if (error || !data) return [];
    return data;
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug: string) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();
    if (error || !data) return null;
    return data;
  } catch {
    return null;
  }
}
