import React from 'react'
import PropTypes from 'prop-types'

import Loading from '../Loading'

import Row from './row'

import './Table.css'

const DataTable = ({users, handleRemoveUser, loading}) => (
  <div className='table'>      
   
      <table className='table'>
          <thead>
              <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>E-Mail</th>
                  <th>City</th>
                  <th>Ride in Group</th>
                  <th>Dat of the week</th>
                  <th>Posts</th>
                  <th>Albums</th>
                  <th>Photos</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
            <tr><td colSpan='10'>{(loading) ? <Loading /> : null} </td></tr>  
            {users.map((user, index) => <Row user={user} key={index} handleRemoveUser={handleRemoveUser} /> )}
          </tbody>
      </table>
  </div>
)

DataTable.propTypes = {
  users: PropTypes.array.isRequired,
  handleRemoveUser: PropTypes.func.isRequired
}

export default DataTable
