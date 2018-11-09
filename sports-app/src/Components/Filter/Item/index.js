import React from 'react'
import PropTypes from 'prop-types'

import './Item.css'

const Item = ({ icon, title, type }) => (
    <div className='item'>
        <div className='icon'>
            <i className={icon}></i>
        </div>
        <div className='body'>
            <span className='type'>{type}</span>
            <span className='title'>{title}</span>
        </div>
    </div>
)

Item.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Item
