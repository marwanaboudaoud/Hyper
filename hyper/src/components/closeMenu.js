import React, { Component } from 'react'
import $ from 'jquery'

class CloseMenu extends Component {
  handleClick = () => {
    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide')
    })
  }
  state = {}
  render () {
    return <div />
  }
}

export default CloseMenu
