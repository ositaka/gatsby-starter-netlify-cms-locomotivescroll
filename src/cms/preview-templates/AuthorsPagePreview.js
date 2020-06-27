import React from 'react'
import PropTypes from 'prop-types'
import { AuthorsPageTemplate } from '../../templates/authors-page'

const AuthorsPagePreview = ({ entry, widgetFor }) => (
  <AuthorsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AuthorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AuthorsPagePreview
