import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/postsList.module.less"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const pageTitle = "All posts"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={pageTitle} />
      <h1 className={styles.blogHeading}>{pageTitle}</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article className={styles.postItem} key={node.fields.slug}>
            <h2 className={styles.postTitle}>{title}</h2>
            <Link className={styles.postLink} to={node.fields.slug}>
              Read
            </Link>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
            title
          }
        }
      }
    }
  }
`
