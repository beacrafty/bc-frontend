import "../index.scss";
import { I18nProvider } from "./i18n/i18n-context";
import { detectLanguage } from "./i18n/server";

export async function generateMetadata() {
  // fetch data
  const themeOption = await fetch(`${process.env.API_PROD_URL}/themeOptions`)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
  return {
    metadataBase: new URL(process.env.API_PROD_URL),
    title: 'Bea Crafty - The Bea-uty of handmade!',
    description: themeOption?.options?.seo?.meta_description,
    icons: {
      icon: themeOption?.options?.logo?.favicon_icon?.original_url,
      link: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Yellowtail&display=swap",
      },
    },
    openGraph: {
      title: themeOption?.options?.seo?.og_title,
      description: themeOption?.options?.seo?.og_description,
      images: [themeOption?.options?.seo?.og_image?.original_url, []],
    },
  };
}

export default async function RootLayout({ children }) {
  const settings = await fetch(`${process.env.API_PROD_URL}/settings`)
    .then((res) => res.json())
    .catch((err) => {
      return err;
    });
  const lng = await detectLanguage();
  return (
    <I18nProvider language={lng}>
      <html lang={lng}>
        <head>
          <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com" 
          />
          <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com" 
            crossOrigin="anonymous"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" 
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
        </head>
        <body>{children}</body>
      </html>
    </I18nProvider>
  );
}
