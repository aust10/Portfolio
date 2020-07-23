import React from 'react'

import Contact from './Contact'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import chat from '../images/Chat.PNG'
import fftg from '../images/FFTG.PNG'
import homr from '../images/HOMR.png'

export default function Projects () {
  return (
    <div>
      <div id='checkProj'>
        <h2><i class='fa fa-angle-double-down' aria-hidden='true' /> <em>Check out a few of my projects </em><i class='fa fa-angle-double-down' aria-hidden='true' /></h2>
        <hr />
      </div>
      <Container>
        <Row id='main'>
          <Col xs={2} md={4} varient='#546e7a'>
            <h3 id='projectsTitle'><strong>Foodforthegoddess</strong></h3>
            <p id='subTitle'><em>Individual Project</em></p>
            <a href='http://159.65.74.24/'><Image id='projPic' src={fftg} className='Images' rounded /></a>
          </Col>
          <Col xs={2} md={4}>
            <h3 id='projectsTitle'><strong>Chatapp</strong></h3>
            <p id='subTitle'><em>GroupProject</em></p>
            <a href='http://209.151.157.48/'><Image id='projPic' src={chat} className='Images' rounded /></a>
          </Col>
          <Col xs={2} md={4}>
            <h3 id='projectsTitle'><strong>HOMR</strong></h3>
            <p id='subTitle'><em>Group Project</em></p>
            <a href='https://homr.herokuapp.com/'><Image id='projPic' src={homr} className='Images' rounded /></a>
          </Col>
        </Row>
      </Container>
      <Contact />
    </div>
  )
}
