import Logo from "./components/Logo/Logo";

export default {
  logo: <Logo />,
  project: {
    link: "https://github.com/sokrates-ai/platform",
  },
  docsRepositoryBase: "https://github.com/sokrates-ai/docs",
  chat: {
    link: "tyron.franzke@student.hpi.uni-potsdam.de",
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Sokrates Docs" />
      <meta property="og:description" content="The next-gen open source learning software" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
    </>
  ),
  footer: {
    text: <span>{new Date().getFullYear()} © Sokrates.</span>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Sokrates Docs",
      canonical: "https://sokrates-ai.github.io/docs/",
      description: "The next-gen open source learning software",

      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sokrates-ai.github.io/docs/",
        site_name: "Sokrates Docs",
        images: [
          {
            url: "https://sokrates-ai.github.io/docs/img/og.png",
            alt: "Sokrates Docs",
            width: 1512,
            height: 687,
          },
        ],
      },
    };
  },
};
