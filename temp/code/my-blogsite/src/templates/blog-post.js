import * as React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

// We can use 'useMemo' if we wish to call it inside the component
//What it does is..it saves it in memory for future use
//however we cannot use useCallback because it doesn't render variables but functions only



const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulPosts
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const json = JSON.parse(post.blogpost.raw);
  const image = getImage(post.blogimage);

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
        <GatsbyImage image={image} alt=""/>
        </section>

        <section>
        <img src={post.blogimage}  alt="Beekaboo" height="400" width="400"/>
        </section>

        <section>
        {documentToReactComponents(json, RICHTEXT_OPTIONS)}
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
  query MyQuery($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPosts(id: {eq: $id}) {
      id
      slug
      title
      createdAt(formatString: "yyyy-mm-DD")
      blogpost {
        raw
      }
      blogimage {
        title
        description
        gatsbyImageData(
          layout: FULL_WIDTH
          height: 400
          width: 400
          formats: AUTO
          placeholder: DOMINANT_COLOR
        )
      }
    }  
    previous: contentfulPosts(id: {eq: $previousPostId}){
            id
            slug
            title
        }
        next: contentfulPosts(id: {eq: $nextPostId}){
            id
            slug
            title
        }
      }      
`
