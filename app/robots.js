export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: 'https://aurousacademy.com',
    sitemap: "https://aurousacademy.com/sitemap.xml",
  };
}