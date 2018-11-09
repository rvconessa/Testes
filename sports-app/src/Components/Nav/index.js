import React from 'react'
import PropTypes from 'prop-types'

import Breadcrumb from './Breadcrumb'

import './Nav.css'

const Nav = ({breadcrumb}) => (
    <nav>
        <Breadcrumb breadcrumb={breadcrumb} />
    </nav>
)

Nav.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
}

export default Nav
