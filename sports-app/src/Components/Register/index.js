import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import Item from './Item'
import FormRegister from './FormRegister'

import './Register.css'

const Register = ({ handleRegisterUser }) => (
    <div>
      <section className='register'>
          <Title title='Registration' />
          <div className='separator'><hr className='line' /></div>
          <div className='item-c'></div>
          <div className='item-c'></div>
          <Item title='Need Help?' icon='far fa-life-ring' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut gravida convallis justo vel varius. Ut lobortis iaculis odio,
                  nec facilisis felis auctor vitae. Duis eu leo nulla.'/>
          <Item title='Why register?' icon='fas fa-heartbeat' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut gravida convallis justo vel varius. Ut lobortis iaculis odio,
                  nec facilisis felis auctor vitae. Duis eu leo nulla.'/>
          <Item title='What people are saying...' icon='far fa-smile' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut gravida convallis justo vel varius. Ut lobortis iaculis odio,
                  nec facilisis felis auctor vitae. Duis eu leo nulla.'/>
          <div className='item-c'></div>
          <div className='item-c'></div>
      </section>
      <FormRegister handleRegisterUser={handleRegisterUser}/>
    </div>
)

Register.propTypes = {
  handleRegisterUser: PropTypes.func.isRequired,
}

export default Register
