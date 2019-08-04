import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import React from "react"

const PostTemplate = ({ post, config, location }) => {
  let disqusConfig = {
    url: `${config.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={"..."} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default PostTemplate
