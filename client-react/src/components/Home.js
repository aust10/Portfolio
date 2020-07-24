import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Contact from './Contact'

export default function Home () {
  const languages = [
    'JavaScript',
    'Python',
    'HTML5',
    'CSS3'
  ]
  const libraries = [
    'React.js',
    'Node.js',
    'Express',
    'Vue Cli',
    'Vuex',
    'Vue Router',
    'Django',
    'Django Rest Api',
    'Vuetify',
    'Semantic.ui'
  ]
  const misc = [
    'Git',
    'Github',
    'SQLite3',
    'MongoDB',
    'JWT Authorization',
    'Windows/Mac',
    'Data Visualization',
    'UpCloud',
    'DigitalOcean'
  ]
  return (
    <div>
      <p id='main'>Hello! I'm Austen, a Full Stack Software Developer based in Portland, OR. I love learning new technologies and building things that provide people with enjoyable internet experiences.
        <br />
        <br />
      Outside the office I love the outdoors and am an avid rock climber and travel enthusiast.
      </p>
      <h2><i>Technical Skills</i></h2>
      <hr />
      <Container>
        <Row id='main'>
          <Col xs={6} md={4} varient='#546e7a'>
            <p id='title'><strong>Programming Languages:</strong></p>
            <ul>
              {languages.map(item => <li id='lists' key={item}>{item}</li>)}
            </ul>
          </Col>
          <Col xs={6} md={4}>
            <p id='title'><strong>Libraries:</strong></p>
            <ul>
              {libraries.map(item => <li id='lists' key={item}>{item}</li>)}
            </ul>
          </Col>
          <Col xs={6} md={4}>
            <p id='title'><strong>Misc:</strong></p>
            <ul>
              {misc.map(item => <li id='lists' key={item}>{item}</li>)}
            </ul>
          </Col>
        </Row>
      </Container>
      <Contact />
    </div>
  )
}
