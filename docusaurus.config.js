module.exports = {
  title: "ReactJS ERP Widget Platform",
  tagline: " ERP🚀",
  url: "https://github.com/We1Ray/ERP-widget-doc",
  baseUrl: "/ReactJSERPWidget/",
  onBrokenLinks: "ignore",
  favicon: "img/ERP_logo.png",
  organizationName: "ERPPlatform", // Usually your GitHub org/user name.
  projectName: "ReactJS-ERP-Widget-Platform", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "ReactJS ERP Widget Platform",
      logo: {
        alt: "ReactJS ERP Widget Platform Logo",
        src: "img/ERP_logo.png",
      },
      items: [
        {
          to: "docs/guides/ERP-widget",
          label: "Docs",
          activeBasePath: "docs/guides",
          position: "left",
        },
        {
          to: "docs/tutorial/environment-setup",
          label: "Tutorial",
          activeBasePath: "docs/tutorial",
          position: "left",
        },
        {
          href: "https://github.com/We1Ray/ERP_Widget_Project",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitLab repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "/docs/guides/1-main-concept",
            },
            {
              label: "Tutorial",
              to: "docs/tutorial/environment-setup",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/We1Ray/ERP_Widget_Project",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WEIRAY.`,
    },
    fonts: {
      myFont: ["Arial"],
      myOtherFont: ["-apple-system", "system-ui"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
