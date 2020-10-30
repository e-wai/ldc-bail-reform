import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Controller, Scene } from 'react-scrollmagic';
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import RichText from "./rich-text"
import Img from "gatsby-image"



const KaraComponent = ({ handleShow, handleBg }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNarrativePageBackground(filter: { pageTitle:{eq:"Kara"}}) {
        edges {
          node {
            pageTitle
            backgroundImage {
              fluid(maxWidth: 1920) {
                ...GatsbyContentfulFluid
              }
            }
            slides {
              heading
              story {
                json
              }
              slideImage {
                fluid(maxWidth: 600) {
                  ...GatsbyContentfulFluid
                }
              }
              modalButtons {
                heading
                content {
                  json
                }
                image {
                  fluid(maxWidth: 400) {
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
        }
      }
    }`
  )
  const slides = data.allContentfulNarrativePageBackground.edges[0].node.slides

  console.log('slides', slides);
  
  // const Text = ({ children }) => <p>{children}</p>
  // const richTextOptions = {
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  //   },
  // }


  const showModal = (data) => {
    handleShow(data);
  }

  return (
    <Controller>
      {/* Kara */}

      {/* meet kara - portrait img */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"150%"}
        pinSettings={{ pushFollowers: false }}
        pin
      >
        {(progress, event) => {
          if (event.scrollDirection === "REVERSE" && event.type === "leave") {
            // console.log(event.type);
            handleBg('nathan');
          }
          return (
            <div className={`vh-100 character-01 `}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex align-items-center text-white">
                  <Col className="h-100 offset-md-6 col-md-6" >
                    <div className="h-100 w-100 position-relative">
                      <Img
                        fluid={slides[0].slideImage.fluid}
                        className={`h-100 w-100 position-absolute bottom-locked opacity-0 ${progress < .9 ? 'opacity-1' : ''}`}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>

      {/* meet kara - text */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"50%"}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100 character-01`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex align-items-center text-white">
                  <Col md={{ span: 6, offset: 0 }}>
                    <h1>
                      {slides[0].heading}
                    </h1>
                    <RichText json={slides[0].story.json}/>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>

      {/* opportunity for bail - text */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"50%"}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex align-items-center text-white">
                  <Col>
                    <div>
                      <h1>
                        {slides[6].heading}
                      </h1>
                      <RichText json={slides[1].story.json}/>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>

      {/* contacting family */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"70%"}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100 character-01 contacting-family`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex justify-content-center align-items-center">
                  <Col lg="10" className="text-left">
                    <Row className="d-flex justify-content-between mt-5 kara-contact-cards">
                      <Col className={`opacity-0 slide-from-top ${progress > .15 ? 'active opacity-1' : ''}`}>

                        <Card>
                          <Card.Body className="px-3 py-2 d-flex align-items-center">
                            <img src="https://via.placeholder.com/50x50" />
                            <div>
                              <p className="mb-0">Jason M.</p>
                              <p className="mb-0">905-555-2323</p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col className={`opacity-0 slide-from-top ${progress > .25 ? 'active opacity-1' : ''}`}>
                        <Card>
                          <Card.Body className="px-3 py-2 d-flex align-items-center">
                            <img src="https://via.placeholder.com/50x50" />
                            <div>
                              <p className="mb-0">Jason M.</p>
                              <p className="mb-0">905-555-2323</p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col className={`opacity-0 slide-from-top ${progress > .35 ? 'active opacity-1' : ''}`}>
                        <Card>
                          <Card.Body className="px-3 py-2 d-flex align-items-center">
                            <img src="https://via.placeholder.com/50x50" />
                            <div>
                              <p className="mb-0">Jason M.</p>
                              <p className="mb-0">905-555-2323</p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <div className="text-white mt-5">
                      <h1>
                        {slides[1].heading}
                      </h1>
                      <RichText json={slides[2].story.json}/>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>

      {/* family or money  */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"50%"}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100 character-01`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex justify-content-center align-items-center text-white">
                  <Col lg="7" className="text-left">
                    <h1>
                      {slides[3].heading}
                    </h1>
                    <p>
                      <RichText json={slides[3].story.json}/>
                    </p>
                    <div className="text-center mt-5">
                      <div className={`d-inline-block slide-from-bottom ${progress > .1 ? 'active' : ''}`}>
                        <Button
                          className={`text-uppercase btn-stories btn-rotate-right text-white py-2 mr-3`}
                          variant="pink"
                          onClick={() => showModal(
                            { 
                              title: slides[3].modalButtons[0].heading, 
                              json: slides[3].modalButtons[0].content.json,
                              fluid: slides[3].modalButtons[0].image.fluid
                            }
                          )} 
                        >
                          <span>Buy Landline</span>
                        </Button>
                      </div>
                      <div className={`d-inline-block slide-from-bottom ${progress > .1 ? 'active' : ''}`}>
                        <Button
                          className={`text-uppercase btn-stories btn-rotate-left text-white py-2`}
                          variant="pink"
                          onClick={() => showModal(
                            { 
                              title: slides[3].modalButtons[1].heading, 
                              json: slides[3].modalButtons[1].content.json,
                              fluid: slides[3].modalButtons[1].image.fluid
                            }
                          )} 
                        >
                          <span>Call Amy</span>
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>


      {/* life in jail  - lightbulb img */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"150%"}
        pinSettings={{ pushFollowers: false }}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex align-items-center text-white">
                  <Col className="text-center col-6 offset-6">
                    <Img
                      className={`img-fluid ${progress > 0 ? 'active' : ''}`}
                    // fluid={slides[4].slideImage.fluid}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>

      {/* life in jail - text */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"50%"}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100 character-01`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex align-items-center text-white">
                  <Col md={{ span: 6, offset: 0 }}>
                    <h1>
                      {slides[3].heading}
                    </h1>
                    <RichText json={slides[3].story.json}/>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>



      {/* opportunity for bail - text */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"50%"}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex align-items-center text-white">
                  <Col>
                    <div>
                      <h1>
                        {slides[4].heading}
                      </h1>
                      <RichText json={slides[4].story.json}/>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>

      {/* opportunity for bail - cards */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"50%"}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100 opportunity-for-bail`}>
              <Container className={`h-100 d-flex flex-column justify-content-center align-items-center`}>
                <Row className="justify-content-center align-items-center">
                  <Col className="d-flex flex-column align-items-center">
                    <Card className="kara-card monique">
                      <Card.Body className="kara-card-content">
                        <span>Monique</span>
                        <ul>
                          <li>Recently lost her job as a bank teller</li>
                          <li>Instacart worker</li>
                        </ul>
                      </Card.Body>
                    </Card>
                    <Card className="kara-card lisa">
                      <Card.Body className="kara-card-content">
                        <span>Lisa</span>
                        <ul>
                          <li>Home-care worker</li>
                          <li>Lives with employer</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <Card className="kara-card alex">
                      <Card.Body className="kara-card-content">
                        <span>Alex</span>
                        <ul>
                          <li>Uber driver</li>
                        </ul>
                      </Card.Body>
                    </Card>
                    <Card className="kara-card mike">
                      <Card.Body className="kara-card-content">
                        <span>Mike</span>
                        <ul>
                          <li>Starbucks barista</li>
                          <li>Night shift janitor</li>
                          <li>Has a kid entering university</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center none-fits-requirements-text">
                  <p>None fits the requirements</p>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>

      {/* phone call */}
      <Scene
        // indicators={true}
        triggerHook={0}
        duration={"70%"}
        pin
      >
        {(progress, event) => {
          return (
            <div className={`vh-100 character-01`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex justify-content-center align-items-center text-white">
                  <Col className="text-center">
                    <img
                      // src="./assets/mobile.png"
                      src="https://via.placeholder.com/500x600"
                      className="w-100"
                      alt=""
                    />

                  </Col>
                  <Col lg="7" className="text-left">
                    <h1>
                      {slides[5].heading}
                    </h1>
                    <RichText json={slides[5].story.json}/>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene>

      {/* what happened next */}
      < Scene
        // indicators={true}
        triggerHook={0}
        duration={"50%"}
        pin
      >
        {(progress, event) => {
          if (event.scrollDirection === "FORWARD" && event.type === "leave") {
            // console.log(event.type);
            handleBg('george');
          } else if (event.scrollDirection === "REVERSE" && event.type === "enter") {
            // console.log(event.type);
            handleBg('kara');
          }
          return (
            <div className={`vh-100 character-01`}>
              <Container className={`h-100`}>
                <Row className="h-100 d-flex align-items-center text-white">
                  <Col>
                    <h1>
                      {slides[6].heading}
                    </h1>
                    <RichText json={slides[6].story.json}/>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }}
      </Scene >
    </Controller>
  )
}

export default KaraComponent