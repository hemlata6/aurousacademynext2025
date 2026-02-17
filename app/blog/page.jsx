import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import BlogPageClient from './BlogPageClient';

export const metadata = {
  title: 'Blog | Aurous Academy - Educational Articles & Tips',
  description: 'Explore our comprehensive blog with expert tips on JEE, NEET, foundation courses, and exam preparation strategies. Learn from Aurous Academy experts.',
  keywords: 'JEE preparation, NEET tips, exam strategies, foundation courses, educational blog',
  openGraph: {
    title: 'Blog | Aurous Academy',
    description: 'Read the latest educational articles and exam preparation tips from Aurous Academy',
    image: '/og-image.jpg',
    url: 'https://aurous.vercel.app/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Aurous Academy',
    description: 'Educational blog with exam preparation tips and strategies',
    image: '/og-image.jpg',
  },
  alternates: {
    canonical: 'https://aurous.vercel.app/blog',
  },
};

async function BlogPage() {
  const instId = 120;

  const getInstituteDetail = async () => {
    try {
      let response = await Network.fetchInstituteDetail(instId);
      Endpoints.mediaBaseUrl = response.instituteTechSetting.mediaUrl;
    } catch (err) {
      console.log(err);
    }
  };

  // Setup institute detail
  await getInstituteDetail();

  return (
    <div id="homePageCss">
      <div>
        <BlogPageClient />
      </div>
    </div>
  );
}

export default BlogPage;
