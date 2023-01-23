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
  graphqlTypegen: true,
  siteMetadata,
  plugins: [
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
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
        icon: "./src/assets/images/icon.png",
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
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/__generated__/gatsby-types.d.ts",
        emitSchema: {
          "src/__generated__/gatsby-schema.graphql": true,
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
  ],
};

export default config;
