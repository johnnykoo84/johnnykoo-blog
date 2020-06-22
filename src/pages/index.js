import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import kebabCase from "lodash/kebabCase"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const siteMetadata = data.site.siteMetadata
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} siteMetadata={siteMetadata}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  fontFamily: `Ubuntu Mono, sans-serif`,
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <Img
                sizes={
                  node.frontmatter.featuredImage
                    ? node.frontmatter.featuredImage.childImageSharp.sizes
                    : 10
                }
              />
              {/* {node.frontmatter.tags ? (
                <div className="tags-container">
                  <ul className="taglist">
                    {node.frontmatter.tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null} */}
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY, MMMM, DD")
            title
            tags
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
