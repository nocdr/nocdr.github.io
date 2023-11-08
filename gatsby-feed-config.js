module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    generator: 'GatsbyJS',
    query:
      ' { site { siteMetadata { title description siteUrl site_url: siteUrl } } } ',
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map((edge) => {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ 'content:encoded': edge.node.html }],
            })
          })
        },
        query: `
{
    allMarkdownRemark(
        limit: 8,
        sort: {
        order: DESC,
        fields: [frontmatter___date]
    }) {
        edges {
            node {
                frontmatter {
                    title
                    date
                }
                fields {
                    slug
                }
                excerpt
                html
            }
        }
    }
}
              `,
        // Where we will save the feed generated by this query.
        output: 'rss.xml',
        // Use a title when reference a RSS feed in Link element.
        title: "Funny Eagle",
      },
    ],
  },
}
