import React from 'react'

import Item from './Item'

import './Filter.css'

const Filter = () => (
    <section className='filter'>
        <div className='details'>
            <div className='item-1'></div>
            <Item icon='fas fa-puzzle-piece' title='Cycling' type='Sport type' />
            <Item icon='fas fa-trophy' title='Advance' type='Mode' />
            <Item icon='fas fa-map-signs' title='30 Miles' type='Route' />
        </div>
    </section>
)

export default Filter
