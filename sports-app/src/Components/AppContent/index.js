import React from 'react';
import PropTypes from 'prop-types'

import Header from '../Header'
import Nav from '../Nav'
import Filter from '../Filter'
import Main from '../Main'
import Register from '../Register'

const AppContent = ({ users, handleRegisterUser, handleRemoveUser, onChangeHandler, alert, breadcrumb, loading }) => (
    <div>
        <Header />
        <Nav breadcrumb={breadcrumb} />
        <Filter />
        <Main handleRemoveUser={handleRemoveUser} users={ users } onChangeHandler={onChangeHandler} alert={alert} loading={loading} />
        <Register handleRegisterUser={handleRegisterUser} />
    </div>
)

AppContent.propTypes = {
  users: PropTypes.array.isRequired,
  handleRegisterUser: PropTypes.func.isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  alert: PropTypes.object.isRequired,
}

export default AppContent
