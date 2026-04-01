import { MetadataRoute } from 'next';
import { softwarePackages } from '@/data/softwareData';
import { articles } from '@/data/knowledgeData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://boekhoudpakketkeuze.nl';
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/software`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/vergelijken`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/kennisbank`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tips`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gratis-proberen`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const softwareRoutes: MetadataRoute.Sitemap = softwarePackages.map(pkg => ({
    url: `${baseUrl}/software/${pkg.id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${baseUrl}/kennisbank/${article.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...softwareRoutes, ...articleRoutes];
}
