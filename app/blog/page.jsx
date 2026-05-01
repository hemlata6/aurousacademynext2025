import BlogListClient from '@/components/BlogSection/BlogListClient';
import { DEFAULT_OG_IMAGE_URL, SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Blog | Aurous Academy - Educational Articles & Tips',
  description: 'Explore our comprehensive blog with expert tips on JEE, NEET, foundation courses, and exam preparation strategies. Learn from Aurous Academy experts.',
  keywords: 'JEE preparation, NEET tips, exam strategies, foundation courses, educational blog',
  openGraph: {
    title: 'Blog | Aurous Academy',
    description: 'Read the latest educational articles and exam preparation tips from Aurous Academy',
    images: [DEFAULT_OG_IMAGE_URL],
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Aurous Academy',
    description: 'Educational blog with exam preparation tips and strategies',
    images: [DEFAULT_OG_IMAGE_URL],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div id="homePageCss">
      <BlogListClient />
    </div>
  );
}
