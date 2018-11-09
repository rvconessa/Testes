import React from 'react'

import './radio.css'

const Radio = ({id, className, name, value}) => (
    <div className={className}>
        <input type='radio' id={id} name={name} value={value}  />
        <label htmlFor={id}>{value}</label>
    </div>
)

export default Radio