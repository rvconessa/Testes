import React from 'react'
import PropTypes from 'prop-types'

import './Filter.css'

const Filter = ({ onChangeHandler }) => (
    <div className='filter'>
        <input type='text' name='filter' id='filter' onChange={onChangeHandler} placeholder='&#xF002; Filter table content' />
    </div>
)

Filter.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
}

export default Filter
