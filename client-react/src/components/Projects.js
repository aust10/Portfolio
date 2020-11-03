import React from 'react'

import Contact from './Contact'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import chat from '../images/Chat.PNG'
import fftg from '../images/FFTG.PNG'
import homr from '../images/HOMR.png'
import ticketDesk from '../images/TicketDesk.png'

export default function Projects () {
  return (
    <div>
      <div id='checkProj'>
        <h2><i class='fa fa-angle-double-down' aria-hidden='true' /> <em>Check out a few of my projects </em><i class='fa fa-angle-double-down' aria-hidden='true' /></h2>
        <hr />
      </div>
      <Container>
        <Row id='main'>
          <Col xs='auto' sm='auto' md='4'>
            <h3 id='projectsTitle'><strong>Foodforthegoddess</strong></h3>
            <p id='subTitle'><em>Individual Project</em></p>
            <a href='http://159.65.74.24/'><Image id='projPic' src={fftg} className='Images' rounded /></a>
          </Col>
          <Col xs='auto' sm='auto' md='4'>
            <h3 id='projectsTitle'><strong>HOMR</strong></h3>
            <p id='subTitle'><em>Group Project</em></p>
            <a href='https://homr.herokuapp.com/'><Image id='projPic' src={homr} className='Images' rounded /></a>
            <div id="bottomText">
              <p class="sub"><i>Sign in with</i><b>↴</b></p>
              <p><b>username:</b> guest<br/><b>password:</b> guest123</p>
            </div>
          </Col>
        </Row>
        <Row id='main2'>
          <Col xs='auto' sm='auto' md='4'>
            <h3 id='projectsTitle'><strong>TicketDesk</strong></h3>
            <p id='subTitle'><em>Individual Project</em></p>
            <a href='http://209.151.144.62/'><Image id='projPic' src={ticketDesk} className='Images' rounded /></a>
            <div id="bottomText">
              <p class="sub"><i>Sign in with</i><b>↴</b></p>
              <p><b>username:</b> guest<br/><b>password:</b> guest123</p>
            </div>
          </Col>
          <Col xs='auto' sm='auto' md='4'>
            <h3 id='projectsTitle'><strong>Chatapp</strong></h3>
            <p id='subTitle'><em>GroupProject</em></p>
            <a href='https://github.com/aust10/chatapp/blob/master/index.js'><Image id='projPic' src={chat} className='Images' rounded /></a>
          </Col>
        </Row>
      </Container>
      <Contact />
    </div>
  )
}
