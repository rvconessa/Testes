import React, { Component } from 'react';

import AppContent from './Components/AppContent'
import './App.css'


class App extends Component {
  constructor () {
    super()
    this.state = {
      users: [],
      filter: [],
      alert: {
        show: false,
        typeAlert: 'success',
        title: '',
        text: ''
      },
      breadcrumb: ['Home', 'Bike', 'Search', 'Filter', 'Result'],
      loading: true
    }
  }

  addUserData = (e) => {
    e.preventDefault()
    let week = []

    e.target.week.forEach(element => {
      if(element.checked) {
        week.push(element.value)
      }
    });

    let data = {
      "username": e.target.username.value,
      "name": e.target.name.value,
      "email": e.target.email.value,
      "address": {
        "city": e.target.city.value,
        "geo": {
          "lat": 0,
          "lng": 0
        }
      },
      "week": week.toString(),
      "group": e.target.group.value,
      "posts": 0,
      "albums": 0,
      "photos": 0
    }

    this.setState({
      users: [...this.state.users, data],
      alert: {
        show: true,
        typeAlert: 'success',
        title: 'Success!',
        msg: 'Add user success!'
      }
    })

    setTimeout(function(){
      this.setState({
        alert: {
          show: false
        }
      })
    }.bind(this), 1500)

    e.target.reset()

  }

  checkFormEmpty = (e) => {
    let error = []

    if(e.target.username.value === '') {
      error.push('Username empty!')
    }

    if(e.target.name.value  === '') {
      error.push('Name empty!')
    }

    if(e.target.email.value  === '') {
      error.push('E-Mail empty!')
    }

    this.setState({
      alert: {
        show: true,
        typeAlert: 'error',
        title: 'Error!',
        msg: error.toString()
      }
    })

    setTimeout(function(){
      this.setState({
        show: false
      })
    }.bind(this), 1500)

    return error;
  }

  handleRegisterUser = (e) => {
    e.preventDefault()

    if(!this.checkFormEmpty(e).length){
      this.addUserData(e)
    }
  }

  onChangeHandler = (e) => {
      let listFilter = []
      let value = e.target.value
      let users = this.state.users
      let emptyData = {
        "username": "",
        "name":  "",
        "email":  "",
        "address": {
          "city":  "",
          "geo": {
            "lat": 0,
            "lng": 0
          }
        },
        "week":  "",
        "group":  "",
        "posts": 0,
        "albums": 0,
        "photos": 0
      }


      function removeDuplicates(arr){
          let unique_array = []
          for(let i = 0;i < arr.length; i++){
              if(unique_array.indexOf(arr[i]) == -1){
                  unique_array.push(arr[i])
              }
          }
          return unique_array
      }

      if(value) {
         users.map((user) => Object.values(user).filter((data) => {
            if(data.toString().toLowerCase().indexOf(value.toLowerCase()) != -1) {
              listFilter.push(user)
            }
            return false
          }))

        this.setState({ filter: removeDuplicates(listFilter) })

        if(!listFilter.length) {
          listFilter.push(emptyData)
          this.setState({ filter: listFilter })
        }
      } else {
        this.setState({ filter: [] })
      }
  }

  setNewObjectUsers = () => {
    return this.fetchUsersData().then((data) => {
      return Promise.all(data.map( async (user) => {
        await this.countAndAddPropretyObject('posts', user)
        .then(await this.countAndAddPropretyObject('albums', user))
        .then(await this.countAndAddPropretyObject('photos', user))
        return user
      }))
    })
  }

  fetchUsersData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => 
      response.json().then((responseData) => {
        return responseData
      })
    )
  }

  countAndAddPropretyObject = (service, user) => {
    return fetch(`https://jsonplaceholder.typicode.com/${service}?userId=${user.id}`)
      .then((response) =>
      response.json().then((data) => {
        user[service] = data.length
        return user
      })
    )
  }

  handleRemoveUser = (e, user) => {
    e.preventDefault()
    this.setState({users: this.state.users.filter(function(data) {
        return data.username !== user.username
      })
    });
  }

  componentDidMount () {
    this.setNewObjectUsers().then((users) => {
      this.setState({users, loading: false})
    })
  }

  render() {
    return (
      <AppContent
        users={(this.state.filter.length) ? this.state.filter : this.state.users}
        handleRegisterUser={this.handleRegisterUser}
        handleRemoveUser={this.handleRemoveUser}
        onChangeHandler={this.onChangeHandler}
        alert={this.state.alert}
        breadcrumb={this.state.breadcrumb}
        loading={this.state.loading}
      />
    )
  }
}

export default App;
