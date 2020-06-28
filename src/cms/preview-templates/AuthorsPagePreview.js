import React from 'react'
import PropTypes from 'prop-types'
import { AuthorsPageTemplate } from '../../templates/authors-page'

const AuthorsPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AuthorsPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
        authors={data.authors || { author: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AuthorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AuthorsPagePreview
