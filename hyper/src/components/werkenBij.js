import React, { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './footer'
import Werken4 from '../images/werken-4.jpg'
import Werken5 from '../images/werken-5.jpg'
import Werken2 from '../images/werken-2.jpg'
import classNames from 'classnames'
import validator from 'validator'
import { ScrollTo } from 'react-scroll-to'

class WerkenBij extends Component {
  formDefaults = {
    voornaam: { value: '', isValid: true, message: '' },
    achternaam: { value: '', isValid: true, message: '' },
    telefoonnummer: { value: '', isValid: true, message: '' }
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

    if (!isGood) {
      this.setState({
        voornaam,
        achternaam,
        telefoonnummer
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

  checkScrollTop = scroll => {
    const applySectionOffset = this.refs.applyScrollTo.offsetTop - 200
    scroll({ y: applySectionOffset, smooth: true })
  }

  resetForm = () => {
    this.setState(...this.formDefaults)
  }

  render () {
    const { voornaam, achternaam, telefoonnummer } = this.state
    const voornaamGroupClass = classNames('form-group', {
      'has-error': !voornaam.isValid
    })
    const achternaamGroupClass = classNames('form-group', {
      'has-error': !achternaam.isValid
    })
    const telefoonnummerGroupClass = classNames('form-group', {
      'has-error': !telefoonnummer.isValid
    })

    return (
      <div>
        <div className='werkenBijHeader'>
          <Container>
            <Row>
              <Col md={{ span: 5, offset: 4 }}>
                <h1 className='werkenBijH1'>Werken bij</h1>
                <ScrollTo>
                  {({ scroll }) => (
                    <Button
                      variant='primary'
                      className='werkenBijsoliciteerBtn'
                      onClick={() => this.checkScrollTop(scroll)}
                    >
                      Soliciteer
                    </Button>
                  )}
                </ScrollTo>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='firstHomeContainer'>
          <Container>
            <Row>
              <Col md={6}>
                <img className='home2Img' src={Werken2} />
              </Col>

              <Col md={6}>
                <div className='overOnsContainer'>
                  <h1 className='homeOverOns'>
                    Een goed betaalde en flexibele baan
                  </h1>
                  <p>
                    Op zoek naar een flexibele baan waar je veel geld kunt
                    verdienen en waar elke werkdag een feestje is? Gevonden! Als
                    merkambassadeur ga je werken voor mooie merken. In
                    teamverband, in de buitenlucht en met de nodige kennis en
                    kunde. Zodra je je training hebt afgerond, kun je in
                    principe werken wanneer je wilt. Doordeweeks beschikbaar?
                    Top. Druk met je studie? Dan werk je toch lekker in het
                    weekend. We bieden je alle dagen van de week de mogelijkheid
                    om veel geld te verdienen. En als je van al je welverdiende
                    euro’s op reis wilt gaan, dan wensen we je veel plezier en
                    zien we je later weer terug.
                  </p>
                  <Button variant='primary' className='soliciteerBtn'>
                    Soliciteer
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='home1ImgContainer' />
        <div>
          <Container>
            <Row>
              <Col md={6} className='werkdag1Item'>
                <div className='overOnsContainer'>
                  <h1 className='homeOverOns'>Hoe een werkdag eruit ziet?</h1>
                  <p className='overOnsContainerP'>
                    In de ochtend verzamelen we op kantoor. Hier krijg je te
                    horen waar en met wie je gaat werken. De eerste paar keer ga
                    je met een ervaren Hyper op pad, die het voortouw neemt en
                    je gedurende de dag van meer tips en kennis voorziet. Na een
                    potje pingpong, een kopje koffie en een collectieve kick-off
                    vertrek je samen met je teamgenoot naar de locatie in
                    kwestie. Hier is het je doel om potentiële klanten te
                    overtuigen van je commerciële boodschap. Wat die boodschap
                    inhoudt, hangt af van het merk waarvoor je werkt. Rond een
                    uur of vijf keer je weer terug naar de vestiging, waar je
                    meer dan welkom bent om samen met andere collega’s een hapje
                    en een drankje te doen.
                    <br />
                    <br /> Ging het goed vandaag? Klasse! Was het pittig? Elk
                    begin is moeilijk. Maar als jij bereid bent om te leren,
                    gaan we er samen voor zorgen dat 200 euro per werkdag
                    verdienen de normaalste zaak van de wereld wordt. Het hele
                    jaar door verzorgen we namelijk talloze trainingen en
                    masterclasses die bijdragen aan je skills, kennis en
                    persoonlijke ontwikkeling. We bieden je concrete tips en
                    handvatten waarmee je de beste versie van jezelf kunt
                    worden. Waardevolle inzichten die niet alleen bijdragen aan
                    je portemonnee, maar ook aan je mindset, veerkracht en
                    doorzettingsvermogen. Hyper zorgt voor persoonlijke groei
                    waar je de rest van je leven profijt van zult hebben. Veel
                    meer dan een bijbaan, dus. Hyperenthousiast? We hadden niet
                    anders verwacht.
                  </p>
                </div>
              </Col>

              <Col md={5} className='werkdag2Item' ref='applyScrollTo'>
                <h1 className='werkenbijFormH1'>Solliciteer nu!</h1>
                <p className='werkenbijFormP'>
                  Laat je gegevens achter en we nemen spoedig contact met je op!
                </p>

                <Form onSubmit={this.onSubmit} className='werkbijForm'>
                  <div className={voornaamGroupClass}>
                    <input
                      type='text'
                      name='voornaam'
                      className='form-control'
                      placeholder='Voornaam'
                      value={voornaam.value}
                      onChange={this.onChange}
                      autoFocus
                    />
                    <span className='help-block'>{voornaam.message} </span>
                  </div>

                  <div className={achternaamGroupClass}>
                    <input
                      type='text'
                      name='achternaam'
                      className='form-control'
                      placeholder='Achternaam'
                      value={achternaam.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{achternaam.message}</span>
                  </div>

                  <div className={telefoonnummerGroupClass}>
                    <input
                      type='nu'
                      name='telefoonnummer'
                      className='form-control'
                      placeholder='Telefoonnummer'
                      value={telefoonnummer.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{telefoonnummer.message}</span>
                  </div>
                  <Button
                    variant='primary'
                    className='werkenbijFormButton'
                    type='submit'
                  >
                    Soliciteer
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='firstWerkenBijContainer'>
          <div>
            <div className='firstWerkenBijContainerImg' />
            <Container>
              <Row>
                <Col md={{ span: 8, offset: 4 }}>
                  <div className='overOnsContainer'>
                    <p className='firstWerkenBijContainerH1'>
                      “ Hoop is goed zolang je er wat mee doet. Bij Hyper leer
                      je hoe je je dromen kunt waarmaken.”
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 1, offset: 4 }}>
                  <img className='werken-2' src={Werken4} />
                </Col>
                <Col md={4}>
                  <p className='firstWerkenBijContainerP'>Mitch Boom</p>
                  <p className='firstWerkenBijContainerP2'>Founder Hyper</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className='lastWerkenbihContainer'>
          <Container>
            <Row>
              <Col md={6}>
                <img className='home2Img' src={Werken5} />
              </Col>
              <Col md={6}>
                <div className='mooiCarrierContainer'>
                  <h1 className='homeOverOns'>Een mooie carrièrestap</h1>
                  <p className='mooiCarrierContainerP'>
                    Ben jij de A-speler die het kantoorteam van Hyper naar een
                    hoger niveau komt tillen? Commercieel talent is bij ons
                    altijd welkom! Hyper is op zoek naar jonge, getalenteerde
                    mensen met uiteenlopende achtergronden: van HR tot economie
                    en van marketing tot econometrie. Ben je ambitieus, net
                    klaar met studeren en wil je werken voor een jong en
                    dynamisch bedrijf waar plezier en hard werken hand in hand
                    gaan? Dan willen we je graag uitnodigen voor een kopje
                    koffie! Stuur ons een mailtje met wat meer
                    achtergrondinformatie en we nemen spoedig contact met je op.
                  </p>
                  <Button variant='primary' className='soliciteerBtn'>
                    <Link to='Contact'> Neem contact op</Link>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default WerkenBij
