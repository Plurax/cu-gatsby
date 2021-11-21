import { graphql, useStaticQuery } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author
            siteUrl
            description
            social { name url }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
