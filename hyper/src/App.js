import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home'
import Contact from './components/contact'
import PartnerShips from './components/partnerShips'
import WerkenBij from './components/werkenBij'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Route, Switch, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Logo from './images/logo.svg'
import LogoColor from './images/logo-color.svg'

export default class App extends React.Component {
  state = {
    color: 'white',
    backgroundColor: 'transparent'
  }
  listenScrollEvent = e => {
    if (window.scrollY > 80) {
      this.setState({
        color: 'black',
        backgroundColor: 'white'
      })
    } else {
      this.setState({ color: 'white', backgroundColor: '' })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render () {
    return (
      <div>
        <Router>
          <Navbar
            expand='lg'
            className='navContainer'
            style={{ backgroundColor: this.state.backgroundColor }}
          >
            <Container>
              <Navbar.Brand className='navHome'>
                <Link to='Home'>
                  {this.state.color === 'white' ? (
                    <img src={Logo} />
                  ) : (
                    <img src={LogoColor} />
                  )}
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                  <Nav.Link className='navContent'>
                    <Link to='Home' style={{ color: this.state.color }}>
                      Over ons
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='navContent'>
                    <Link to='WerkenBij' style={{ color: this.state.color }}>
                      Werken Bij
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='navContent'>
                    <Link to='PartnerShips' style={{ color: this.state.color }}>
                      Partnerships
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='navContact'>
                    <Link to='Contact' style={{ color: this.state.color }}>
                      Contact
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Home' exact component={Home} />
            <Route path='/Home' exact component={Home} />
            <Route path='/WerkenBij' exact component={WerkenBij} />
            <Route path='/PartnerShips' exact component={PartnerShips} />
            <Route path='/Contact' exact component={Contact} />
          </Switch>
        </Router>
      </div>
    )
  }
}
