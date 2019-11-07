import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rocket from '../images/rocket.svg'
import Map from '../images/map.svg'
import Graph from '../images/graph.svg'
import Money from '../images/money.svg'
import Share from '../images/share.svg'
import AwesomeSlider from 'react-awesome-slider'

import 'react-awesome-slider/dist/styles.css'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

class Slider extends Component {
  state = {}

  render () {
    return (
      <>
        <Row>
          <Col md={6}>
            <h1 className='thirdHomeH1'>Ben jij een Hyper?</h1>
            <p className='thirdHomeP1'>
              Klinkt het als muziek in de oren ? En denk je dat je uit het
              juiste Hyper-hout gesneden bent? Dan willen we je graag leren
              kennen ! Klik op de onderstaande buuton en laat je gegevens
              achter.
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

        <AwesomeSlider touchEnabled cssModule={AwesomeSliderStyles}>
          <Row>
            <Col md={6}>
              <div className='thirdHomeContainerItems'>
                <p className='thirdHomeContainerItemsP'>
                  <img className='thirdHomeContainerItemsIcon' src={Rocket} />
                  <strong>Sta je open om te leren van anderen?</strong>
                </p>
                <p className='thirdHomeContainerItemsP'>
                  Binnen Hyper tref je een schat van kennis en ervaring aan die
                  we maar al te graag met je willen delen. Maar dan moet je wel
                  openstaan voor feedback en bereid zijn om te leren.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className='thirdHomeContainerItems'>
                <p className='thirdHomeContainerItemsP'>
                  <img className='thirdHomeContainerItemsIcon' src={Money} />
                  <strong>Sta je open om te leren van anderen?</strong>
                </p>
                <p className='thirdHomeContainerItemsP'>
                  Binnen Hyper tref je een schat van kennis en ervaring aan die
                  we maar al te graag met je willen delen. Maar dan moet je wel
                  openstaan voor feedback en bereid zijn om te leren.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className='thirdHomeContainerItems'>
                <p className='thirdHomeContainerItemsP'>
                  <img className='thirdHomeContainerItemsIcon' src={Graph} />
                  <strong>Sta je open om te leren van anderen?</strong>
                </p>
                <p className='thirdHomeContainerItemsP'>
                  Binnen Hyper tref je een schat van kennis en ervaring aan die
                  we maar al te graag met je willen delen. Maar dan moet je wel
                  openstaan voor feedback en bereid zijn om te leren.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className='thirdHomeContainerItems'>
                <p className='thirdHomeContainerItemsP'>
                  <img className='thirdHomeContainerItemsIcon' src={Map} />
                  <strong>Sta je open om te leren van anderen?</strong>
                </p>
                <p className='thirdHomeContainerItemsP'>
                  Binnen Hyper tref je een schat van kennis en ervaring aan die
                  we maar al te graag met je willen delen. Maar dan moet je wel
                  openstaan voor feedback en bereid zijn om te leren.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className='thirdHomeContainerItems'>
                <p className='thirdHomeContainerItemsP'>
                  <img className='thirdHomeContainerItemsIcon' src={Share} />
                  <strong>Sta je open om te leren van anderen?</strong>
                </p>
                <p className='thirdHomeContainerItemsP'>
                  Binnen Hyper tref je een schat van kennis en ervaring aan die
                  we maar al te graag met je willen delen. Maar dan moet je wel
                  openstaan voor feedback en bereid zijn om te leren.
                </p>
              </div>
            </Col>
          </Row>
        </AwesomeSlider>
      </>
    )
  }
}

export default Slider

// class SliderItem extends Component {
//     state = {}
//     render () {
//       let settings = {
//         className: '',
//         dots: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         adaptiveHeight: true
//       }
//       return (
//         <>
//           <div>
//             <Row>
//               <Col md={6}>
//                 <h1 className='thirdHomeH1'>Ben jij een Hyper?</h1>
//                 <p className='thirdHomeP1'>
//                   Klinkt het als muziek in de oren ? En denk je dat je uit het
//                   juiste Hyper-hout gesneden bent? Dan willen we je graag leren
//                   kennen ! Klik op de onderstaande buuton en laat je gegevens
//                   achter.
//                 </p>
//                 <Link to='WerkenBij'>
//                   <Button
//                     variant='primary'
//                     className='thirdHomeContainerSoliciteerBtn'
//                   >
//                     Solliciteer
//                   </Button>
//                 </Link>
//               </Col>
//             </Row>
//           </div>
//           <div>
//             <Slider {...settings}>
//               <div className='thirdHomeContainerItems'>
//                 <p className='thirdHomeContainerItemsP'>
//                   <img className='thirdHomeContainerItemsIcon' src={Rocket} />
//                   <strong>Sta je open om te leren van anderen?</strong>
//                 </p>
//                 <p className='thirdHomeContainerItemsP'>
//                   Binnen Hyper tref je een schat van kennis en ervaring aan die we
//                   maar al te graag met je willen delen. Maar dan moet je wel
//                   openstaan voor feedback en bereid zijn om te leren.
//                 </p>
//               </div>

//               <div className='thirdHomeContainerItems'>
//                 <p className='thirdHomeContainerItemsP'>
//                   <img className='thirdHomeContainerItemsIcon' src={Money} />
//                   <strong>Sta je open om te leren van anderen?</strong>
//                 </p>
//                 <p className='thirdHomeContainerItemsP'>
//                   Binnen Hyper tref je een schat van kennis en ervaring aan die we
//                   maar al te graag met je willen delen. Maar dan moet je wel
//                   openstaan voor feedback en bereid zijn om te leren.
//                 </p>
//               </div>

//               <div className='thirdHomeContainerItems'>
//                 <p className='thirdHomeContainerItemsP'>
//                   <img className='thirdHomeContainerItemsIcon' src={Graph} />
//                   <strong>Sta je open om te leren van anderen?</strong>
//                 </p>
//                 <p className='thirdHomeContainerItemsP'>
//                   Binnen Hyper tref je een schat van kennis en ervaring aan die we
//                   maar al te graag met je willen delen. Maar dan moet je wel
//                   openstaan voor feedback en bereid zijn om te leren.
//                 </p>
//               </div>

//               <div className='thirdHomeContainerItems'>
//                 <p className='thirdHomeContainerItemsP'>
//                   <img className='thirdHomeContainerItemsIcon' src={Map} />
//                   <strong>Sta je open om te leren van anderen?</strong>
//                 </p>
//                 <p className='thirdHomeContainerItemsP'>
//                   Binnen Hyper tref je een schat van kennis en ervaring aan die we
//                   maar al te graag met je willen delen. Maar dan moet je wel
//                   openstaan voor feedback en bereid zijn om te leren.
//                 </p>
//               </div>

//               <div className='thirdHomeContainerItems'>
//                 <p className='thirdHomeContainerItemsP'>
//                   <img className='thirdHomeContainerItemsIcon' src={Share} />
//                   <strong>Sta je open om te leren van anderen?</strong>
//                 </p>
//                 <p className='thirdHomeContainerItemsP'>
//                   Binnen Hyper tref je een schat van kennis en ervaring aan die we
//                   maar al te graag met je willen delen. Maar dan moet je wel
//                   openstaan voor feedback en bereid zijn om te leren.
//                 </p>
//               </div>
//             </Slider>
//           </div>
//         </>
//       )
//     }
//   }

//   export default SliderItem
