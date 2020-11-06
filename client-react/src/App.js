import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { LinkContainer } from 'react-router-bootstrap'
import Image from 'react-bootstrap/Image'
import smith from './images/smith.jpg'
import portfolio from './images/personal.jpg'
import teton from './images/tetons.JPG'

import './App.css'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

const App = () => (
  <MemoryRouter>
    <header class='sticky-top'>
      <Jumbotron>
        <h2>
          <h2 className='headline'>Austen Cote</h2>
          <ButtonToolbar className='custom-btn-toolbar'>
            <LinkContainer to='/'>
              <Button id='btn'>Home</Button>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Button id='btn'>Contact</Button>
            </LinkContainer>
            <LinkContainer to='/projects'>
              <Button id='btn'>Projects</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
      </Jumbotron>
    </header>
    <Container className='p-3'>
      <Container className='pic_background'>
        <Row class='justifiy-content-md-center'>
          <Col xs='auto' sm='auto' md='4'>
            <Image src={smith} className='Images1' class='float-left' rounded />
          </Col>
          <Col xs='auto' sm='auto' md='4'>
            <Image src={portfolio} className='Images2' rounded />
          </Col>
          <Col xs='auto' sm='auto' md='4'>
            <Image src={teton} className='Images3' class='float-right' rounded />
          </Col>
        </Row>
      </Container>
      <h2>
        <Switch>
          <Route path='/contact'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </h2>
    </Container>
  </MemoryRouter>
)

export default App
