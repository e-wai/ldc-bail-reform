import React from "react"
import { Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'
import IssuesHero from "../components/issues-hero"
import MomentumTabs from "../components/issues-momentum"

const Issue1Page = () => {
  const data = useStaticQuery(graphql `
    query {
      issue1: file(relativePath: { eq: "images/issue1.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      documents: allAirtable(
          filter: {
            data: { 
              Include_in_Momentum_: { in : "Theme 1 - Punish S&E Conditions" }
              Publish__or_Start_Date_: { ne: null }
            }
          }
        ) {
          nodes {
            data {
              Title
              Author_s_
              URL
              Include_in_Momentum_
              Publish__or_Start_Date_
              Momentum_Annotation
            }
          }
        }
    }
  `)

  return (
    <Layout>
      <Head title="Issues"/>
      <IssuesHero issueName="Worsening the Lives of Marginalized People" issueImg={ data.issue1.childImageSharp.fixed } link1="/issue1#momentum" link2="/issue1#opportunity" link3="/issue1#explanation" />

      <Row id="momentum" className="justify-content-center pt-5">
        <Col className="mb-2" md="10" lg="8">
          <h2 className="text-center uppercase">Momentum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat orci vel justo semper varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam fermentum, massa ut molestie venenatis, justo nibh laoreet risus, at imperdiet nisl purus sed augue.</p>
        </Col>
      </Row>

      <Row className="justify-content-center pb-5">
        <Col md="12">
          <MomentumTabs documents={ data.documents.nodes } />
        </Col>
      </Row>

      <Row id="opportunity" className="justify-content-center pt-5 pb-5 pl-4 pr-4 bg-rust">
        <Col className="mb-2 pt-4 pb-4 crooked-box" md="10" lg="8">
          <h2 className="text-center uppercase text-pink">Opportunity</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat orci vel justo semper varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam fermentum, massa ut molestie venenatis, justo nibh laoreet risus, at imperdiet nisl purus sed augue.</p>
        </Col>
      </Row>

      <Row id="explanation" className="justify-content-center">
        <Col className="mt-5 mb-5" md="10">
          <h2 className="text-center uppercase text-rust">Explorable Explanation</h2>
        </Col>
      </Row>
    </Layout>
  )
}

export default Issue1Page