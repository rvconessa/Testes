import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import Filter from './Filter'
import DataTable from './DataTable'

import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css'

import './Main.css'

const Main = ({ users, handleRemoveUser, onChangeHandler, alert, loading }) => (
    <main>
        <Title title='Users' />
        <div className ='separator'><div className ='line'></div></div>
        <Filter onChangeHandler={onChangeHandler}/>
        <DataTable users={users} handleRemoveUser={handleRemoveUser}  loading={loading} />
        <SweetAlert
          show={alert.show}
          title={alert.title}
          type={alert.typeAlert}
          text={alert.msg}
          showCancelButton={false}
          showConfirmButton={false}
        />
    </main>
)

Main.propTypes = {
  users: PropTypes.array.isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  alert: PropTypes.object.isRequired
}

export default Main
