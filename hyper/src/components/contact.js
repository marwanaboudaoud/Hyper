import React, { Component } from 'react'
import Footer from './footer'
import SimpleMap from './map'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import Mail from '../images/mail.svg'
import Phone from '../images/phone.svg'
import Graph from '../images/graph.svg'
import WhiteLogo from '../images/logo-white.svg'
import classNames from 'classnames'
import validator from 'validator'
import { Link } from 'react-router-dom'

class Contact extends Component {
  formDefaults = {
    voornaam: { value: '', isValid: true, message: '' },
    achternaam: { value: '', isValid: true, message: '' },
    emailadres: { value: '', isValid: true, message: '' },
    telefoonnummer: { value: '', isValid: true, message: '' },
    bericht: { value: '', isValid: true, message: '' }
  }

  state = {
    ...this.formDefaults
  }

  onChange = e => {
    const state = {
      ...this.state,
      [e.target.name]: {
        ...this.state[e.target.name],
        value: e.target.value
      }
    }

    this.setState(state)
  }

  onSubmit = e => {
    e.preventDefault()
    this.resetValidationStates()
    if (this.formIsValid()) {
    }
  }

  formIsValid = () => {
    const voornaam = { ...this.state.voornaam }
    const achternaam = { ...this.state.achternaam }
    const telefoonnummer = { ...this.state.telefoonnummer }
    const emailadres = { ...this.state.emailadres }
    const bericht = { ...this.state.bericht }
    let isGood = true

    if (!validator.isAlpha(voornaam.value)) {
      voornaam.isValid = false
      voornaam.message = 'Dit veld is niet goed ingevuld'
      isGood = false
    }

    if (!validator.isAlpha(achternaam.value)) {
      achternaam.isValid = false
      achternaam.message = 'Dit veld is niet goed ingevuld'
      isGood = false
    }

    if (!validator.isFloat(telefoonnummer.value)) {
      telefoonnummer.isValid = false
      telefoonnummer.message = 'Dit veld is niet goed ingevuld'
      isGood = false
    }

    if (!validator.isEmail(emailadres.value)) {
      emailadres.isValid = false
      emailadres.message = 'Dit veld is niet goed ingevuld'
      isGood = false
    }

    if (!validator.isIn(bericht.value)) {
      bericht.isValid = false
      bericht.message = 'Dit veld is niet goed ingevuld'
      isGood = false
    }
    if (!isGood) {
      this.setState({
        voornaam,
        achternaam,
        telefoonnummer,
        emailadres,
        bericht
      })
    }

    return isGood
  }

  resetValidationStates = () => {
    const state = JSON.parse(JSON.stringify(this.state))

    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {
        state[key].isValid = true
        state[key].message = ''
      }
    })

    this.setState(state)
  }

  resetForm = () => {
    this.setState(...this.formDefaults)
  }
  render () {
    const {
      voornaam,
      achternaam,
      telefoonnummer,
      emailadres,
      bericht
    } = this.state
    const voornaamGroupClass = classNames('form-group', {
      'has-error': !voornaam.isValid
    })
    const achternaamGroupClass = classNames('form-group', {
      'has-error': !achternaam.isValid
    })
    const telefoonnummerGroupClass = classNames('form-group', {
      'has-error': !telefoonnummer.isValid
    })
    const emailadresGroupClass = classNames('form-group', {
      'has-error': !emailadres.isValid
    })
    const berichtGroupClass = classNames('form-group', {
      'has-error': !bericht.isValid
    })
    return (
      <div>
        <div className='contactHeader'>
          <Container>
            <Row>
              <Col md={{ span: 7, offset: 3 }}>
                <h1 className='werkenBijH1'>Neem contact op</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='firstContactContainer'>
          <Container>
            <Row>
              <Col md={5} className='contact1Item'>
                <div className='overOnsContainer'>
                  <p className='contactBoldP'>
                    Heb je vragen, opmerkingen of wil je meer informatie? Dan
                    kun je het contactformulier invullen of ons bereiken op via
                    onderstaande gegevens.
                  </p>
                  <p className='middleContactP'>
                    Sta je ons liever persoonlijk te woord? Onze deur staat
                    altijd voor je open!
                  </p>
                  <p className='contactBoldP'>
                    <img className='contactImage1' src={Mail} />
                    info@highperformers.nl
                  </p>
                  <p className='contactBoldP'>
                    <img className='contactImage2' src={Phone} />
                    06 12 25 78 55
                  </p>
                </div>
              </Col>

              <Col md={6} className='contactForm'>
                <Form onSubmit={this.onSubmit}>
                  <Row>
                    <Col md={6}>
                      <div className={voornaamGroupClass}>
                        <input
                          type='text'
                          name='voornaam'
                          className='form-control-contact'
                          placeholder='Voornaam'
                          value={voornaam.value}
                          onChange={this.onChange}
                          autoFocus
                        />
                        <span className='help-block'>{voornaam.message}</span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className={achternaamGroupClass}>
                        <input
                          type='text'
                          name='achternaam'
                          className='form-control-contact'
                          placeholder='Achternaam'
                          value={achternaam.value}
                          onChange={this.onChange}
                        />
                        <span className='help-block'>{achternaam.message}</span>
                      </div>
                    </Col>
                  </Row>

                  <div className={telefoonnummerGroupClass}>
                    <input
                      type='nu'
                      name='telefoonnummer'
                      className='form-control-contact'
                      placeholder='Telefoonnummer'
                      value={telefoonnummer.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{telefoonnummer.message}</span>
                  </div>
                  <div className={emailadresGroupClass}>
                    <input
                      type='text'
                      name='emailadres'
                      className='form-control-contact'
                      placeholder='Emailadres'
                      value={emailadres.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{emailadres.message}</span>
                  </div>
                  <div className={telefoonnummerGroupClass}>
                    <input
                      type='text'
                      name='telefoonnummer'
                      className='form-control-contact'
                      placeholder='Telefoonnummer'
                      value={telefoonnummer.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{telefoonnummer.message}</span>
                  </div>
                  <div className={berichtGroupClass}>
                    <textarea
                      type='text'
                      name='bericht'
                      className='last-form-control-contact'
                      placeholder='Bericht'
                      value={bericht.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{bericht.message}</span>
                  </div>
                  <div className='contacFormBtnContainer'>
                    <Button
                      variant='primary'
                      className='contactFormBtn'
                      type='submit'
                    >
                      Verstuur
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='mapContainer'>
          <Container>
            <Row>
              <Col md={{ span: 11, offset: 0 }}>
                <Row>
                  <Col md={3}>
                    <div className='mapDetails'>
                      <img className='mapDeatailsImg' src={WhiteLogo} />
                      <p className='mapDeatailsP1'>Amsterdam</p>
                      <p className='mapDeatailsP'>Afrikanerplein 1,</p>
                      <p className='mapDeatailsP'>1091 PN Amsterdam</p>
                      <p className='mapDeatailsP'>Nederland</p>
                    </div>
                  </Col>
                </Row>
                <SimpleMap />
              </Col>
            </Row>
          </Container>
        </div>
        <div className='secondContactContainer'>
          <Container>
            <div>
              <Row>
                <Col className='secondContactContainer2' md={11}>
                  <img className='secondContactContainerImages ' src={Graph} />
                  <h3 className='secondContactContainerH1'>Toekomst delen?</h3>
                  <p className='secondContactContainerP'>
                    Als je op zoek bent naar een uitdagende baan of meer
                    informatie wilt over een eventuele samenwerking, dan
                    verwijzen we je graag door naar de onderstaande pagina’s:
                  </p>
                  <Row>
                    <Col md={{ span: 4, offset: 2 }}>
                      <Link to='WerkenBij'>
                        <Button
                          variant='primary'
                          className='secondContactContainerbtns'
                        >
                          Werken bij
                        </Button>
                      </Link>
                    </Col>
                    <Col md={{ span: 2, offset: 0 }}>
                      <Link to='PartnerShips'>
                        <Button
                          variant='primary'
                          className='secondContactContainerbtns'
                        >
                          Word partner
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Contact
