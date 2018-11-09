import React from 'react'
import PropTypes from 'prop-types'

import './Logo.css'

const Logo = ({ pageTitle }) => (
    <div className='logo'>
        <i className='fas fa-bicycle'></i>
        <h1>{pageTitle}</h1>
    </div>
)

Logo.propTypes = {
  pageTitle: PropTypes.string.isRequired
}

export default Logo
