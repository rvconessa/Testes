import React from 'react'
import PropTypes from 'prop-types'

import generateBreadcrumb from '../../Util/Breadcrumb'

const Breadcrumb = ({breadcrumb}) => (
    <div className='breadcrumb'>
      {generateBreadcrumb(breadcrumb).map((path, index) =>
        <a href='/page' className='link' key={index}>{(index > 0) ? path : <i className='fas fa-home'></i>}</a>
      )}
    </div>
)

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
}

export default Breadcrumb
