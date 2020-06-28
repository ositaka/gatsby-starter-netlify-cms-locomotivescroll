import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import _ from 'lodash'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const AuthorsList = ({ authors }) => (
  <div className="columns is-multiline">
    {authors.map((author) => (
      <div key={author.name} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              data-scroll data-scroll-speed=".25"
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={author} />
            </div>
          </div>
          <h2 style={{ fontSize: "1.5em" }}>
            <Link to={`/authors/${_.kebabCase(author.name)}`}>{author.name}</Link>
          </h2>
          <p>{author.bio}</p>
          <ul>
              <li><Link to={author.website}>{author.website}</Link></li>
              <li><Link to={author.facebook}>{author.facebook}</Link></li>
              <li><Link to={author.twitter}>{author.twitter}</Link></li>
          </ul>
        </section>
      </div>
    ))}
  </div>
)

AuthorsList.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      bio: PropTypes.string,
      website: PropTypes.string,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
    })
  ),
}


export default AuthorsList
