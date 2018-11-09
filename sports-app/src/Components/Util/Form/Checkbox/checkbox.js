import React from 'react'

import './checkbox.css'

const Checkbox = ({id, className, name, value}) => (
    <div className={className}>
        <input type='checkbox' id={id} name={name} value={value}  />
        <label htmlFor={id}>{value}</label>
    </div>
)

export default Checkbox