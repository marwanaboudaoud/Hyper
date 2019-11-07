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
    } else if (window.innerWidth >= 769) {
      this.setState({ color: 'white', backgroundColor: 'transparent' })
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
              <Navbar.Toggle aria-controls='basic-navbar-nav' bg='light' />
              <Navbar.Collapse id='basic-navbar-nav '>
                <Nav>
                  <Nav.Link
                    className='navContent'
                    href='Home'
                    style={{ color: this.state.color }}
                  >
                    Over ons
                  </Nav.Link>
                  <Nav.Link
                    className='navContent'
                    href='WerkenBij'
                    style={{ color: this.state.color }}
                  >
                    Werken Bij
                  </Nav.Link>
                  <Nav.Link
                    className='navContent'
                    href='PartnerShips'
                    style={{ color: this.state.color }}
                  >
                    Partnerships
                  </Nav.Link>
                  <Nav.Link
                    className='navContact'
                    href='Contact'
                    style={{ color: 'white' }}
                  >
                    Contact
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
