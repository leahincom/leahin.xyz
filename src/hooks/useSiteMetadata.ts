import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.useSiteMetadataQueryQuery>(graphql`
    query useSiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteName
          author {
            name
            summary
          }
        }
      }
    }
  `);

  return data.site?.siteMetadata;
};
