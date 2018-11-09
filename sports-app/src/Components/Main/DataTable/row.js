import React from 'react'
import PropTypes from 'prop-types'

const Row = ({ user, handleRemoveUser }) => (
  <tr>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td><a href={`mailto:${user.email}`} target='_blank'>{user.email}</a></td>
      <td><a href={(user.address.geo.lat) ? `http://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}` : null} target='_blank'>{user.address.city}</a></td>
      <td>{user.group}</td>
      <td>{user.week}</td>
      <td>{user.posts}</td>
      <td>{user.albums}</td>
      <td>{user.photos}</td>
      <td><a href='#' className='trash' onClick={(e) => handleRemoveUser(e, user) }><i className="fas fa-trash-alt"></i></a></td>
  </tr>
)

Row.propTypes = {
  user: PropTypes.object.isRequired,
  handleRemoveUser: PropTypes.func.isRequired
}

export default Row
