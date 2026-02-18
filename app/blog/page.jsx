import BlogListClient from '@/components/BlogSection/BlogListClient';

export const metadata = {
  title: 'Blog | Aurous Academy - Educational Articles & Tips',
  description: 'Explore our comprehensive blog with expert tips on JEE, NEET, foundation courses, and exam preparation strategies. Learn from Aurous Academy experts.',
  keywords: 'JEE preparation, NEET tips, exam strategies, foundation courses, educational blog',
  openGraph: {
    title: 'Blog | Aurous Academy',
    description: 'Read the latest educational articles and exam preparation tips from Aurous Academy',
    image: '/og-image.jpg',
    url: 'https://aurousacademy.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Aurous Academy',
    description: 'Educational blog with exam preparation tips and strategies',
    image: '/og-image.jpg',
  },
  alternates: {
    canonical: 'https://aurousacademy.com/blog',
  },
};

export default function BlogPage() {
  return (
    <div id="homePageCss">
      <BlogListClient />
    </div>
  );
}
