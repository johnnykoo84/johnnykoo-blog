import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import PostTemplate from "./post-template"
import { TagBox } from "./styles"

class BlogPostTemplate extends React.Component {
  // config = {
  //   siteUrl: "https://johnnykoo.netlify.com",
  // }
  render() {
    const post = this.props.data.markdownRemark
    const { title, date, tags, description } = post.frontmatter
    const siteMetadata = this.props.data.site.siteMetadata
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} siteMetadata={siteMetadata}>
        <SEO title={title} description={description || post.excerpt} />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          {date}
        </p>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            // marginBottom: rhythm(1),
          }}
        >
          {tags &&
            tags.map((tag, i) => {
              const route = `/tags/${tag.toLowerCase()}/`
              return [
                <TagBox key={i}>
                  <Link to={route}>{tag}</Link>
                </TagBox>,
              ]
            })}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <PostTemplate
          siteUrl={siteMetadata.siteUrl}
          post={post}
          location={this.props.location}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
