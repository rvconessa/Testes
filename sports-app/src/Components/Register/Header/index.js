import React from 'react'

const Header = () => (
  <section className='register'>
      <Title Title='Registration' />
      <div className='separator'><hr className='line' /></div>
      <div className='item-c'></div>
      <div className='item-c'></div>
      <Item Title='Need Help?' Icon='far fa-life-ring' Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut gravida convallis justo vel varius. Ut lobortis iaculis odio,
              nec facilisis felis auctor vitae. Duis eu leo nulla.'/>
      <Item Title='Why register?' Icon='fas fa-heartbeat' Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut gravida convallis justo vel varius. Ut lobortis iaculis odio,
              nec facilisis felis auctor vitae. Duis eu leo nulla.'/>
      <Item Title='What people are saying...' Icon='far fa-smile' Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut gravida convallis justo vel varius. Ut lobortis iaculis odio,
              nec facilisis felis auctor vitae. Duis eu leo nulla.'/>
              <div className='item-c'></div>
      <div className='item-c'></div>
  </section>
)

export default Header