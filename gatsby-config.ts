import type { GatsbyConfig } from "gatsby";
import "dotenv/config"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `leahin.blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-vanilla-extract", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-image", "gatsby-plugin-sitemap", 
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: process.env.GTM_CONTAINER_ID,
      enableWebVitalsTracking: true,
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
