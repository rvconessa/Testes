import React from 'react'
import PropTypes from 'prop-types'

import './DropDown.css'

const DropDown = ({ title }) => (
  <div className='user-info'>
    <div className='avatar'>RV</div>
    <div className='sample-menu-style dropdown-menu'>
      <span tabIndex='0'>{title}</span>
      <div tabIndex='0'></div>
          <ul>
              <li><a href='#'>Friends List</a></li>
              <li><a href='#'>Saved Items</a></li>
              <li><a href='#'>Notifications</a></li>
              <li><a href='#'>User Preferences</a></li>
              <li className='line'></li>
              <li><a href='#'>Logout</a></li>
          </ul>
    </div>
  </div>
)

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
}


export default DropDown

