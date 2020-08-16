/* Import React, Gatsby & React Bootstrap */
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col, Jumbotron, Button, Container, Card } from "react-bootstrap"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

/* Import Layout Components */
import Layout from "../components/layout"
import Head from "../components/head";

/* Import graphics */
import ChevronDown from "../../static/assets/svg/chevron-down.svg";
import HomeLogo from "../../static/assets/svg/logo_homepage.svg";

const IndexPage = () => {
  const data = useStaticQuery(graphql `
    query {
      homeHero: file(relativePath: { eq: "images/home_hero.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      issue1: file(relativePath: { eq: "images/issue1.jpg" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      issue2: file(relativePath: { eq: "images/issue2.jpg" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      issue3: file(relativePath: { eq: "images/issue3.jpg" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <Jumbotron className="hero" fluid>
        <BackgroundImage
          fluid={data.homeHero.childImageSharp.fluid}
          backgroundColor={`#F08FDB`}
          alt="A jail cell overlaid with a stylized pink dot pattern"
        >
          <Container>
            <Row className="justify-content-center">   
              <Col md="10" className="text-center">
                <HomeLogo width={200} fill='#fff' className="mt-5 mb-5"/>
                <h1 className="display-2 mt-4 mb-0 text-rust uppercase">According to the Auditor General</h1>
                <h1 className="display-1 mb-5 text-rust uppercase">70% of people held in Ontario jails are <span className="hero-em">legally innocent</span></h1>
                <p className="display-3 pt-4 mb-3">Why?</p>
                <p>
                  <Button variant="link" className="heartbeat mb-4" aria-label="Learn more">
                    <Link to="/#main">
                      <ChevronDown />
                    </Link>
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </BackgroundImage>
      </Jumbotron>

      <Container>
        <Row id="main" className="justify-content-md-center pt-5 mb-4">
          <Col className="mt-4" md="10">
            <p><strong>If we have a bail system that is supposed to release people from jail, with the assurance that they show up for trial, and they aren’t a risk to public safety, then why does this issue exist?</strong></p>
            <p>We’ve created some resources to try and help you answer this question:</p>
          </Col>
        </Row>

        <Row className="justify-content-between mb-5 pb-5">
          <Col sm="12" md="4" className="text-center">
            <Link to="/system-map">
              <Card className="bg-dark text-dark">
                <Card.Img src="https://placehold.it/400x400" alt="Card image" />
                <Card.ImgOverlay className="align-contents-bottom">
                  <Card.Title><h3 className="text-white">The Bail System</h3></Card.Title>
                  <Card.Text className="min-height-3rem">
                    How bail is supposed to work and when it doesn’t.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>

          <Col sm="12" md="4" className="text-center">
            <Link to="/narrative">
              <Card id="staging" className="bg-dark text-dark">
                <Card.Img src="https://placehold.it/400x400" alt="Card image" />
                <Card.ImgOverlay className="align-contents-bottom">
                  <Card.Title><h3 className="text-white mb-0">The Human Experience</h3></Card.Title>
                  <Card.Text className="min-height-3rem">
                    Hear stories about the human cost of bail.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>

          <Col sm="12" md="4" className="text-center">
            <Link to="/methodology">
              <Card className="bg-dark text-dark">
                <Card.Img src="https://placehold.it/400x400" alt="Card image" />
                <Card.ImgOverlay className="align-contents-bottom">
                  <Card.Title><h3 className="text-white">Timeline</h3></Card.Title>
                  <Card.Text className="min-height-3rem">
                    The human cost of bail.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
        </Row>

        <Row className="justify-content-md-center mb-4 text-center">
          <Col sm="12" md="10">
            <h2 className="uppercase">Why are innocent people in jail?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada eget sit rhoncus sagittis. Sollicitudin in nisl, congue posuere nullam ut scelerisque. Suscipit elementum vitae laoreet dignissim. Id blandit neque est, non habitant. Nunc cras congue purus dolor facilisi. Non tempus diam condimentum mattis morbi nisl vel, ultrices.</p>
          </Col>
        </Row>

        <Row className="justify-content-md-center mb-5 pb-5">
          <Col xs="12" md="4" className="text-center">
            <Link to="" aria-label="Read more ">
              <Img fixed={data.issue1.childImageSharp.fixed} className="mb-4" alt="Culture of Fear"/>
            </Link>
          </Col>
          <Col xs="12" md="4" className="text-center">
            <Link to="" aria-label="Read more about Socioeconomic factors">
              <Img fixed={data.issue2.childImageSharp.fixed} className="mb-4" alt="Making Poverty a Crime"/>
            </Link>
          </Col>
          <Col xs="12" md="4" className="text-center">
            <Link to="" aria-label="Read more about Insufficient Resources">
              <Img fixed={data.issue3.childImageSharp.fixed} className="mb-4" alt="Basic Dignity and Rights"/>
            </Link>
          </Col>
        </Row>

      </Container>
    </Layout>
  )
}

export default IndexPage;