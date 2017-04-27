// std library imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// app imports
import { toggleSidebar } from '../actions/modals'
import { saveCreation, restoreCreation, deleteCreation } from '../actions/creations'
import { checkIfLoggedIn, logout } from '../actions/accounts'
import Delete from './Delete'
import Signup from './Signup'
import Login from './Login'

class Sidebar extends React.Component {

  constructor() {
    super()
    this.handleRestoreCreation = this.handleRestoreCreation.bind(this)
  }

  handleRestoreCreation(id, token) {
    this.props.toggleSidebar()
    this.props.restoreCreation(id, token)
  }

  renderCreationList() {
    return this.props.creations.map((creation) => {
      return (
        <div
          className="creation non-selectable"
          key={creation.id} >
          <Delete
            onClick={this.props.deleteCreation.bind(null, creation.id, creation.title, this.props.token)}
            className="creation-delete"
            flashClass="creation-flash" />
          <span
            className='creation-restore'
            onClick={this.handleRestoreCreation.bind(null, creation.id, this.props.token)}>
            restore
          </span>
          <h3> {creation.title ? creation.title : 'Creation #' + creation.id} </h3>
        </div>
      )
    })
  }

  renderLoginSignup() {
    return (
      <div className='registration-forms'>
        { this.props.loginForm ?
          <Login />
          :
          <Signup />
        }
      </div>
    )
  }

  renderSignedIn() {
    return (
      <div className="signed-in">
        <div className='sidebar-buttons'>
          <button
            className="btn logout-btn"
            onClick={this.props.handleLogout}>
            Log Out
          </button>
        </div>
        <h3>Your Creations:</h3>
        { this.renderCreationList() }
      </div>
    )
  }

  render() {
    return (
      <div
        className={'sidebar' + (this.props.sidebarOpen ? ' open-sidebar' : '')} >
        <h1>Olio</h1>
        { this.props.token ? <h4> {this.props.username}</h4> : null }
        { this.props.token ? this.renderSignedIn() : this.renderLoginSignup() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.Accounts.username,
    loginForm: state.Forms.loginForm,
    token: state.Accounts.token,
    sidebarOpen: state.Modals.sidebar,
    creations: state.Creations
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleSidebar: toggleSidebar,
    deleteCreation: deleteCreation,
    checkIfLoggedIn: checkIfLoggedIn,
    logout: logout,
    saveCreation: saveCreation,
    restoreCreation: restoreCreation,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
