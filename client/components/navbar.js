import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = () => (
  <div style={{textAlign: 'center'}}>
    <h1 style={{fontFamily: 'Beth Ellen'}}>Handwritten</h1>
    <h3 style={{fontWeight: '300'}}>
      A project that uses brain.js and the MNIST database to create a simple
      machine learning application in JavaScript
    </h3>
    <hr style={{color: 'grey'}} />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
