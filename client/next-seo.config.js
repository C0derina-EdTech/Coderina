// next-seo.config.js
const defaultSEOConfig = {
    title: "My Awesome Blog",
    description: "Learn coding, history, and design with Victory Kemele.",
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://myawesomeblog.com/',
      site_name: 'My Awesome Blog',
      images: [
        {
          url: 'https://myawesomeblog.com/default-og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'My Awesome Blog OG Image',
        },
      ],
    },
    twitter: {
      handle: '@myhandle',
      site: '@site',
      cardType: 'summary_large_image',
    },
  };
  
  export default defaultSEOConfig;
  