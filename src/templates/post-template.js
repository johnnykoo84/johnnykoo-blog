import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import React from "react"

const PostTemplate = ({ post, siteUrl, location }) => {
  let disqusConfig = {
    url: `${siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.frontmatter.title,
  }
  return (
    <>
      {/* <h1>{post.frontmatter.title}</h1> */}
      <CommentCount config={disqusConfig} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default PostTemplate
