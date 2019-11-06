import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home2 from '../images/home-2.jpg'
import Home3 from '../images/home-3.jpg'
import Rocket from '../images/rocket.svg'
import Map from '../images/map.svg'
import Graph from '../images/graph.svg'
import Money from '../images/money.svg'
import Share from '../images/share.svg'
import Bullseye from '../images/bullseye.svg'
import Footer from '../components/footer'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

class Home extends Component {
  state = {
    isMobile: false
  }

  updateDimensions = () => {
    const w = window
    const d = document
    const documentElement = d.documentElement
    const body = d.getElementsByTagName('body')[0]
    const width =
      w.innerWidth || documentElement.clientWidth || body.clientWidth
    if (width <= 768) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }
  componentWillMount = () => {
    this.updateDimensions()
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    return (
      <div>
        <div className='homeHeader'>
          <Container>
            <Row>
              <Col md={8}>
                <h1 className='homeHeaderH1'>
                  Hyper staat voor
                  <div className='animation'>
                    <div className='animated'>
                      <p className='animationSpan'>goed verdienen</p>
                      <p className='animationSpan'>jezelf ontwikkel</p>
                      <p className='animationSpan'>grenzen verleggen</p>
                      <p className='animationSpan'>goed verdienen</p>
                    </div>
                  </div>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 4 }}>
                <p className='homeHeaderP'>
                  Aangenaam, wij zijn Hyper.voortgekomen uit jarenlange ervaring
                  en experise op het gebied van sales en ambassadeurschap.wij
                  kennen het lappen van de zweep,wetwn wat wr speelt.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2 }}>
                <Link to='WerkenBij'>
                  <Button variant='primary' className='soliciteerBtn'>
                    Soliciteer
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='firstHomeContainer'>
          <Container>
            <Row>
              <Col md={6}>
                <img className='home2Img' src={Home2} />
              </Col>

              <Col md={6}>
                <div className='overOnsContainer'>
                  <h1 className='homeOverOns'>Over ons</h1>
                  <p>
                    Aangenaam, wij zijn Hyper.voortgekomen uit jarenlange
                    ervaring en experise op het gebied van sales en
                    ambassadeurschap.wij kennen het lappen van de zweep,wetwn
                    wat wr speelt.Wij beseffen als geen ander hoe een fijne en
                    energieke werkomgeving kan bijdragen aan iemands
                    persoonlijke ontwikkwling. Hoe belangrijk vertrouwen en
                    integriteit zijn binnen een organisatie, Hoe je door grenzen
                    te verleggen bergen kunt verzetten .Die bergen verzetten wij
                    met behulp van onze Hypers: ambassadeurs die een sterke
                    eerste indruk maken en een positieve indruk achterlaten.
                    Zorgvuldig geselecteerde werkpers die met de broodnodige
                    knowhow en de juiste omgangsvromen mooie merken
                    vetegenwoordigen.
                  </p>
                  <Link to='WerkenBij'>
                    <Button variant='primary' className='soliciteerBtn'>
                      Soliciteer
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='SecondtHomeContainer'>
          <Container>
            <Row>
              <Col md={6}>
                <div className='hyperfocusContainer'>
                  <h1 className='homeOverOns'>Hyperfocus</h1>
                  <p>
                    Alles wat je aandacht geeft,groeit.Darrom behoren
                    onverdeelde aandacht en toewiding tot de kern van ons
                    bedrijf.Aandacht voor onze werknemers, aandacht voor onze
                    partners.Dat dit geen loze woorden zijn, blijkt wel uit het
                    feit dat wel voor maximaal een bedrijf per sector werken.Zo
                    waarborgen we onzekwaliteit en kunnen we ons volledig
                    focussen op de wensen van de klanr. Hayperfocus , noemen we
                    dat ook wel .Want wanner je aandacht voor aandacht
                    hebt,kunnen er hele mooie dingen ontstaan.
                    <br />
                    <br />
                    <strong>Hyper dus. Ben je al hyped?</strong>
                  </p>
                  <Button variant='primary' className='soliciteerBtn'>
                    <Link to='PartnerShips'> Word partner </Link>
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <img className='home3Img' src={Home3} />
              </Col>
            </Row>
          </Container>
        </div>
        {/* **************************************************** */}
        <div className='thirdHomeContainer'>
          <Container>
            {this.state.isMobile ? (
              <>
                <Row>
                  <Col md={6}>
                    <h1 className='thirdHomeH1'>Ben jij een Hyper?</h1>
                    <p className='thirdHomeP1'>
                      Klinkt het als muziek in de oren ? En denk je dat je uit
                      het juiste Hyper-hout gesneden bent? Dan willen we je
                      graag leren kennen ! Klik op de onderstaande buuton en
                      laat je gegevens achter.
                    </p>
                    <Link to='WerkenBij'>
                      <Button
                        variant='primary'
                        className='thirdHomeContainerSoliciteerBtn'
                      >
                        Solliciteer
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <AwesomeSlider
                  className='slider'
                  cssModule={AwesomeSliderStyles}
                  touchEnabled
                >
                  <Row>
                    <Col md={6}>
                      <div className='thirdHomeContainerItems'>
                        <p className='thirdHomeContainerItemsP'>
                          <img
                            className='thirdHomeContainerItemsIcon'
                            src={Rocket}
                          />
                          <strong>Sta je open om te leren van anderen?</strong>
                        </p>
                        <p className='thirdHomeContainerItemsP'>
                          Binnen Hyper tref je een schat van kennis en ervaring
                          aan die we maar al te graag met je willen delen. Maar
                          dan moet je wel openstaan voor feedback en bereid zijn
                          om te leren.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className='thirdHomeContainerItems'>
                        <p className='thirdHomeContainerItemsP'>
                          <img
                            className='thirdHomeContainerItemsIcon'
                            src={Money}
                          />
                          <strong>Sta je open om te leren van anderen?</strong>
                        </p>
                        <p className='thirdHomeContainerItemsP'>
                          Binnen Hyper tref je een schat van kennis en ervaring
                          aan die we maar al te graag met je willen delen. Maar
                          dan moet je wel openstaan voor feedback en bereid zijn
                          om te leren.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className='thirdHomeContainerItems'>
                        <p className='thirdHomeContainerItemsP'>
                          <img
                            className='thirdHomeContainerItemsIcon'
                            src={Graph}
                          />
                          <strong>Sta je open om te leren van anderen?</strong>
                        </p>
                        <p className='thirdHomeContainerItemsP'>
                          Binnen Hyper tref je een schat van kennis en ervaring
                          aan die we maar al te graag met je willen delen. Maar
                          dan moet je wel openstaan voor feedback en bereid zijn
                          om te leren.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className='thirdHomeContainerItems'>
                        <p className='thirdHomeContainerItemsP'>
                          <img
                            className='thirdHomeContainerItemsIcon'
                            src={Map}
                          />
                          <strong>Sta je open om te leren van anderen?</strong>
                        </p>
                        <p className='thirdHomeContainerItemsP'>
                          Binnen Hyper tref je een schat van kennis en ervaring
                          aan die we maar al te graag met je willen delen. Maar
                          dan moet je wel openstaan voor feedback en bereid zijn
                          om te leren.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className='thirdHomeContainerItems'>
                        <p className='thirdHomeContainerItemsP'>
                          <img
                            className='thirdHomeContainerItemsIcon'
                            src={Share}
                          />
                          <strong>Sta je open om te leren van anderen?</strong>
                        </p>
                        <p className='thirdHomeContainerItemsP'>
                          Binnen Hyper tref je een schat van kennis en ervaring
                          aan die we maar al te graag met je willen delen. Maar
                          dan moet je wel openstaan voor feedback en bereid zijn
                          om te leren.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </AwesomeSlider>
              </>
            ) : (
              <>
                <Row>
                  <Col md={6}>
                    <h1 className='thirdHomeH1'>Ben jij een Hyper?</h1>
                    <p className='thirdHomeP1'>
                      Klinkt het als muziek in de oren ? En denk je dat je uit
                      het juiste Hyper-hout gesneden bent? Dan willen we je
                      graag leren kennen ! Klik op de onderstaande buuton en
                      laat je gegevens achter.
                    </p>
                    <Link to='WerkenBij'>
                      <Button
                        variant='primary'
                        className='thirdHomeContainerSoliciteerBtn'
                      >
                        Solliciteer
                      </Button>
                    </Link>
                  </Col>
                  <Col md={6}>
                    <div className='thirdHomeContainerItems'>
                      <p className='thirdHomeContainerItemsP'>
                        <img
                          className='thirdHomeContainerItemsIcon'
                          src={Rocket}
                        />
                        <strong>Sta je open om te leren van anderen?</strong>
                      </p>
                      <p className='thirdHomeContainerItemsP'>
                        Binnen Hyper tref je een schat van kennis en ervaring
                        aan die we maar al te graag met je willen delen. Maar
                        dan moet je wel openstaan voor feedback en bereid zijn
                        om te leren.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className='thirdHomeContainerItems'>
                      <p className='thirdHomeContainerItemsP'>
                        <img
                          className='thirdHomeContainerItemsIcon'
                          src={Money}
                        />
                        <strong>Sta je open om te leren van anderen?</strong>
                      </p>
                      <p className='thirdHomeContainerItemsP'>
                        Binnen Hyper tref je een schat van kennis en ervaring
                        aan die we maar al te graag met je willen delen. Maar
                        dan moet je wel openstaan voor feedback en bereid zijn
                        om te leren.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='thirdHomeContainerItems'>
                      <p className='thirdHomeContainerItemsP'>
                        <img
                          className='thirdHomeContainerItemsIcon'
                          src={Graph}
                        />
                        <strong>Sta je open om te leren van anderen?</strong>
                      </p>
                      <p className='thirdHomeContainerItemsP'>
                        Binnen Hyper tref je een schat van kennis en ervaring
                        aan die we maar al te graag met je willen delen. Maar
                        dan moet je wel openstaan voor feedback en bereid zijn
                        om te leren.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className='thirdHomeContainerItems'>
                      <p className='thirdHomeContainerItemsP'>
                        <img
                          className='thirdHomeContainerItemsIcon'
                          src={Map}
                        />
                        <strong>Sta je open om te leren van anderen?</strong>
                      </p>
                      <p className='thirdHomeContainerItemsP'>
                        Binnen Hyper tref je een schat van kennis en ervaring
                        aan die we maar al te graag met je willen delen. Maar
                        dan moet je wel openstaan voor feedback en bereid zijn
                        om te leren.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='thirdHomeContainerItems'>
                      <p className='thirdHomeContainerItemsP'>
                        <img
                          className='thirdHomeContainerItemsIcon'
                          src={Share}
                        />
                        <strong>Sta je open om te leren van anderen?</strong>
                      </p>
                      <p className='thirdHomeContainerItemsP'>
                        Binnen Hyper tref je een schat van kennis en ervaring
                        aan die we maar al te graag met je willen delen. Maar
                        dan moet je wel openstaan voor feedback en bereid zijn
                        om te leren.
                      </p>
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </div>
        <div className='home4ImgContainer' />
        <div className='FourthHomeContainer'>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h1 className='FourthHomeContainerH1'>
                  Partner worden van Hyper?
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <p className='FourthHomeContainerP'>
                  Aangezien we voor slechts één bedrijf per sector werken, is
                  een goede klik van groot belang. Denk je dat jouw merk en
                  Hyper een goede match zouden zijn? Neem dan contact met ons op
                  of bezoek onze partner-pagina voor meer informatie!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        {/* *************************************** */}
        <div className='FifthhHomeContainer'>
          <Container>
            <Row>
              <Col md={4}>
                <img src={Bullseye} />
                <p className='FifthhHomeContainerP1'>
                  Wil je samenwerken met een partner die écht aandacht heeft
                  voor jouw merk?
                </p>
                <p className='FifthhHomeContainerP2'>
                  Door voor maximaal één bedrijf per branche te werken, kunnen
                  we jouw merk onze onverdeelde aandacht geven en met Hyperfocus
                  toewerken naar de gewenste resultaten.
                </p>
              </Col>
              <Col md={4}>
                <img src={Map} />
                <p className='FifthhHomeContainerP1'>
                  Wil je samenwerken met een bureau dat weet hoe de vork in de
                  steel zit?
                </p>
                <p className='FifthhHomeContainerP2'>
                  Hyper is opgericht door mensen met jarenlange ervaring in alle
                  facetten van fieldmarketing: van zelf verkopen tijdens onze
                  studentenjaren tot op landelijk niveau partners helpen met het
                  vergroten van hun klantenbestand.
                </p>
              </Col>
              <Col md={4}>
                <img src={Rocket} />
                <p className='FifthhHomeContainerP1'>
                  Wil je samenwerken met ambassadeurs die door het vuur gaan,
                  maar niet over lijken?
                </p>
                <p className='FifthhHomeContainerP2'>
                  Onze ambassadeurs zijn getraind en gedreven om jouw merk aan
                  de man te brengen, maar passen hierbij wel de juiste
                  omgangsvormen toe. Ze vormen tenslotte het visitekaartje van
                  jouw organisatie.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='sixthhHomeContainer'>
          <Container>
            <Row>
              <Col md={{ span: 1, offset: 3 }}>
                <Link to='PartnerShips'>
                  <Button variant='primary' className='soliciteerBtn '>
                    Partner worden
                  </Button>
                </Link>
              </Col>
              <Col md={{ span: 1, offset: 2 }}>
                <Button variant='primary' className='meerInfoBtn'>
                  Meer informatie
                </Button>
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

export default Home
