import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_URL as string,
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: `${process.env.NEXT_PUBLIC_URL}/uk`,
          en: `${process.env.NEXT_PUBLIC_URL}/en`,
        },
      },
    },
  ]
}
