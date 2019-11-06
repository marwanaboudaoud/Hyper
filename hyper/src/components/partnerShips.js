import React, { Component } from 'react'
import Footer from './footer'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import HyperMedewerker from '../images/hyper-medewerker-3.png'
import HyperMockup from '../images/hyper-mockup.png'
import Graph from '../images/graph.svg'
import Money from '../images/money.svg'
import Rocket from '../images/rocket.svg'
import Map from '../images/map.svg'
import classNames from 'classnames'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { ScrollTo } from 'react-scroll-to'

class PartnerShips extends Component {
  formDefaults = {
    voornaam: { value: '', isValid: true, message: '' },
    achternaam: { value: '', isValid: true, message: '' },
    emailadres: { value: '', isValid: true, message: '' },
    bedrifsnaam: { value: '', isValid: true, message: '' },
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
    const bedrifsnaam = { ...this.state.bedrifsnaam }
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

    if (!validator.isIn(bedrifsnaam.value)) {
      bedrifsnaam.isValid = false
      bedrifsnaam.message = 'Dit veld is niet goed ingevuld'
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
        bedrifsnaam,
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
      bedrifsnaam,
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
    const bedrifsnaamGroupClass = classNames('form-group', {
      'has-error': !bedrifsnaam.isValid
    })
    const berichtGroupClass = classNames('form-group', {
      'has-error': !bericht.isValid
    })
    return (
      <div>
        <div className='partnershipsHeader'>
          <Container>
            <Row>
              <Col md={{ span: 5, offset: 4 }}>
                <h1 className='werkenBijH1'>Partnership</h1>
                <Link to='PartnerShips'>
                  <ScrollTo>
                    {({ scroll }) => (
                      <Button
                        variant='primary'
                        className='werkenBijsoliciteerBtn'
                        onClick={() => scroll({ y: 2200, smooth: true })}
                      >
                        Word partner
                      </Button>
                    )}
                  </ScrollTo>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='FourthHomeContainer'>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h1 className='FourthHomeContainerH1'>
                  Wat hebben wij te bieden?
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 11, offset: 0 }}>
                <p className='FirstPartnershipContainerP'>
                  Hyper gaat per branche met maximaal één bedrijf een
                  partnership aan. Op deze manier behouden we onze Hyperfocus en
                  blijven we trouw aan onze missie: op persoonlijke en integere
                  wijze het klantenbestand van onze partners naar een hoger
                  niveau tillen. Niet dertien in een dozijn maar uniek, op maat
                  en uiterst effectief.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='firstPartnershipContainer'>
          <Container>
            <Row>
              <Col md={6}>
                <div className='onzeWerknemersContainer'>
                  <h1 className='homeOverOns'>Onze werknemers</h1>
                  <p className='onzeWerknemersContainerP'>
                    Zo selectief als we zijn met het aangaan van partnerships,
                    zo selectief zijn we met het aannemen van ambassadeurs.
                    Hyper neemt enkel de meest representatieve werknemers in
                    dienst, die eerst diverse trainingssessies moeten doorlopen
                    voordat ze jouw merk mogen vertegenwoordigen.
                    <br />
                    <br /> Tijdens onze trainingen wordt er - naast het
                    overbrengen van kennis en kunde - veel aandacht besteed aan
                    onze integriteitscode en de juiste omgangsvormen. Zodoende
                    bezorgen we je niet alleen nieuwe klanten, maar zorgen we er
                    ook voor dat het contact met de consument altijd positief en
                    beleefd verloopt.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <img className='hyperMedewerker3' src={HyperMedewerker} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className='secondPartnershipContainer'>
          <Container>
            <Row>
              <Col md={6}>
                <img className='hyper-mockup' src={HyperMockup} />
              </Col>
              <Col md={6}>
                <h1 className='secondPartnershipContainerH1'>
                  Ons eigen platform
                </h1>
                <p className='secondPartnershipContainerP'>
                  Meten is weten. Met ons op maat gemaakte platform zijn we in
                  staat om unieke inzichten te verkrijgen die verder reiken dan
                  de standaard verkooprapportages. Deze data gebruiken we om
                  interne processen te optimaliseren en onze aanpak te
                  perfectioneren. Tijdens onze besprekingen worden de verzamelde
                  gegevens uitgebreid met je behandeld, zodat we samen kunnen
                  kijken naar nieuwe mogelijkheden om het onderste uit de
                  conversie-kan te halen.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='thirdPartnershipContainer'>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h1 className='FourthHomeContainerH1'>
                  Ben je al enthousiast?
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <p className='thirdPartnershipContainerP'>
                  Als je op zoek bent naar een partner die fieldmarketing ademt,
                  integriteit hoog in het vaandel heeft staan en van A tot Z
                  betrokken is, dan ben je op de juiste plek aanbeland.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='FourthPartnershipContainer'>
          <Container>
            <Col md={{ span: 5, offset: 3 }}>
              <p className='FourthPartnershipContainerP1'>
                Jij vraagt, wij leveren:
              </p>
            </Col>
            <Row>
              <Col md={3}>
                <img className='fourPartnershipContainerImages' src={Graph} />
                <p className='FourthPartnershipContainerP2'>
                  Nieuwe klanten aantrekken? Check!
                </p>
              </Col>
              <Col md={3}>
                <img className='fourPartnershipContainerImages' src={Money} />
                <p className='FourthPartnershipContainerP2'>
                  Je huidige klanten belonen en verlengen? Komt in orde!
                </p>
              </Col>
              <Col md={3}>
                <img className='fourPartnershipContainerImages' src={Rocket} />
                <p className='FourthPartnershipContainerP2'>
                  Liever een uniek, innovatief en op maat gemaakt concept? Gaan
                  we regelen!
                </p>
              </Col>
              <Col md={3}>
                <img className='fourPartnershipContainerImages' src={Map} />
                <p className='FourthPartnershipContainerP2'>
                  Een rechttoe-rechtaan aanpak? Prima!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='fifthPartnershipContainer'>
          <Container>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Form onSubmit={this.onSubmit} className='partnershipsForm'>
                  <h1 className='partnershipsFormH'>Word partner!</h1>
                  <p className='partnershipsFormP'>
                    Kom er vrijblijvend achter hoe Hyper jouw bedrijf naar
                    nieuwe hoogten kan brengen.
                  </p>
                  <Row>
                    <Col md={6}>
                      <div className={voornaamGroupClass}>
                        <input
                          type='text'
                          name='voornaam'
                          className='form-control-partnerships'
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
                          className='form-control-partnerships'
                          placeholder='Achternaam'
                          value={achternaam.value}
                          onChange={this.onChange}
                        />
                        <span className='help-block'>{achternaam.message}</span>
                      </div>
                    </Col>
                  </Row>
                  <div className={emailadresGroupClass}>
                    <input
                      type='text'
                      name='emailadres'
                      className='form-control-partnerships'
                      placeholder='Emailadres'
                      value={emailadres.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{emailadres.message}</span>
                  </div>
                  <div className={bedrifsnaamGroupClass}>
                    <input
                      type='text'
                      name='bedrifsnaam'
                      className='form-control-partnerships'
                      placeholder='Bedrifsnaam'
                      value={bedrifsnaam.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{bedrifsnaam.message}</span>
                  </div>
                  <div className={telefoonnummerGroupClass}>
                    <input
                      type='text'
                      name='telefoonnummer'
                      className='form-control-partnerships'
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
                      className='form-control-partnerships'
                      placeholder='Bericht'
                      value={bericht.value}
                      onChange={this.onChange}
                    />
                    <span className='help-block'>{bericht.message}</span>
                  </div>
                  <Button
                    variant='primary'
                    className='partnershipFormBtn'
                    type='submit'
                  >
                    Verstuur
                  </Button>
                </Form>
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

export default PartnerShips
