import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import Youtube from '../images/youtube.svg'
import Instagram from '../images/instagram.svg'
import Facebook from '../images/facebook.svg'

import Logo from '../images/logo.svg'

import { Link } from 'react-router-dom'

class Footer extends Component {
  state = {}
  render () {
    return (
      <div className='footerContainer'>
        <div>
          <Container>
            <Row>
              <Col md={12}>
                <img className='footerLogo' src={Logo} />
              </Col>
              <Col md={3} className='footerItems'>
                <a href='#'>info@highperformers.nl</a>
                <br />
                <a href='#'>+ 31 6 21 25 78 55</a>
              </Col>
              <Col md={3} className='footerItems'>
                <ul className='footerUl'>
                  <li>
                    <Link to='Home'>Over ons</Link>
                  </li>
                  <li>
                    <Link to='WerkenBij'> Werken bij</Link>
                  </li>
                  <li>
                    <Link to='PartnerShips'> Partnership</Link>
                  </li>
                  <li>
                    <Link to='Contact'>Contact</Link>
                  </li>
                </ul>
              </Col>
              <Col md={3} className='footerItems'>
                <a
                  href='http://highperformers.nl/assets/files/Privacyverklaring.pdf'
                  target='_blank'
                >
                  Privacy policy
                </a>
              </Col>
              <Col md={3} className='footerItems'>
                <p>Afrikanerplein 1</p>
                <p>1091 PN Amsterdam</p>
                <a href='https://www.youtube.com/' target='_blank'>
                  <img className='footerImages' src={Youtube} />
                </a>
                <a href='https://www.instagram.com' target='_blank'>
                  <img className='footerImages' src={Instagram} />
                </a>
                <a href='https://www.facebook.com' target='_blank'>
                  <img className='footerImages' src={Facebook} />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Footer
