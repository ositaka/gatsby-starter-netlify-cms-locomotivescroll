import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import AuthorsList from '../components/Authors'

export const AuthorsPageTemplate = ({
  title,
  content,
  contentComponent,
  authors,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <AuthorsList authors={authors.author} />
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AuthorsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  authors: PropTypes.shape({
    author: PropTypes.array,
  }),
}

const AuthorsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AuthorsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        authors={post.frontmatter.authors}
      />
    </Layout>
  )
}

AuthorsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AuthorsPage

export const authorsPageQuery = graphql`
  query AuthorsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        authors {
          author {
            name
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bio
            website
            facebook
            twitter
          }
        }
      }
    }
  }
`
