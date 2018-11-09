import React from 'react'

const Input = ({ title, name, type, id, className, msg, required }) => (
    <div>
        <label>{title}</label>
        <input type={type} name={name} id={id} required={(required) ? 'required' : ''} />
        <div className={className}>
            <small>{msg}</small>
        </div>
    </div>
)

export default Input
