import * as React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulPosts
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const image = getImage(post.blogimage)
  const json = JSON.parse(post.blogpost.raw);
  const RICHTEXT_OPTIONS = {
      renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => {
              //console.log(children);
              return <p>{children}</p>
          },
          [MARKS.BOLD]: (node, children) => {
              //console.log(children);
              return <p>{children}</p>
          }
      }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.blogpost.raw || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{post.createdAt}</p>
        </header>
        <section>
        {documentToReactComponents(json, RICHTEXT_OPTIONS)}
        </section>

        <section>
        <GatsbyImage image={image} alt="" />
        </section>
        
        <section>
            <img src={post.blogimage.fluid.src} alt="imageblue" height="250" width="400" />
        </section>

        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
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
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPosts(id: {eq: $id}) {
      title
      slug
      id
      excerpt
      createdAt(formatString: "yyyy-mm-DD")
      blogpost {
        raw
      }
      blogimage {
        fluid {
          src
        }
      }
    }
    previous: contentfulPosts(id: { eq: $previousPostId }){
      slug
      id
      title
      }
    next: contentfulPosts(id: { eq: $nextPostId }){
    	id
      slug 
      title
    }
  }
`
