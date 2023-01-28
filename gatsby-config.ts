import "dotenv/config";

import type { GatsbyConfig } from "gatsby";

import { DB_PORT } from "./src/constants";

const siteMetadata = {
  siteUrl: `https://www.yourdomain.tld`,
  siteName: `leahin.blog`,
  title: `leahin.blog`,
  description: `nou`,
  author: {
    name: `JungHyunLah`,
    summary: `Software Engineer`,
  },
};

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  graphqlTypegen: {
    typesOutputPath: "./src/__generated__/gatsby-types.d.ts",
  },
  siteMetadata,
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-plugin-svgr",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-theme-stitches",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-head-seo",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_CONTAINER_ID,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/assets/images/logo.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts/`,
        ignore: [`**/\.*`],
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: process.env.MONGODB_NAME,
        collection: process.env.MONGODB_COLLECTION_NAME,
        server: {
          address: process.env.MONGODB_ADDRESS,
          port: DB_PORT,
        },
        auth: {
          user: process.env.MONGODB_USERNAME,
          password: process.env.MONGODB_PASSWORD,
        },
        extraParams: {
          replicaSet: "atlas-qtr6yi-shard-0",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-seed-design",
      options: {
        mode: "light-only",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
};

export default config;
