import React from 'react'
import PropTypes from 'prop-types'

import './Title.css'

const Title = ({title}) => (
    <div className='title'>
        <h3>{title}</h3>
    </div>
)

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
