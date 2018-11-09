import React from 'react';
import PropTypes from 'prop-types'

const Item = ({title, icon, text}) => (
    <div className='item'>
        <span className='title'>{title}</span>
        <div className='icon'>
            <i className={icon}></i>
        </div>
        <div className='body'>
            {text}
        </div>
    </div>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Item
