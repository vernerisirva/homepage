
import React from "react"
import { Col, Row, Image, Container } from "react-bootstrap"
import Title from "./title.js"


function Home() {
  return (
    <div>
      <Container className="mt-5 mb-5">
        {/* Present myself shortly including CV */}
      <Row>I am a Finnish born developer living in Lund Sweden. I hold a master's degree in Economics from Lund University and study computer science
        at University of Turku and LTH. I soon graduate with bachelor's degree in Computer science.
          I have worked as a software developer for couple of years as a full-stack developer.
          Currently I work as a developer at Consafe Logistics, which is a software company providing Warehouse Management Systems and automation
          for many large customers' around the world. Besides my full-time job at Consafe Logistics and studies I do various freelance projects for small to mid-size companies
          and foundations. Those projects have mainly included web applications created with ReactJS, GatsbyJS and some back-end.
          Projects have included setting up pages from zero including free hosting, getting domain and emails. 
      </Row>
      {/* Link to substack, linkedin and twitter */}
      <Row>
        I have a block on substack: 
        My linkedin
        Twitter
      </Row>
      {/* Services */}
      <Row>
      Web applications created with ReactJS
      Back-end
      Setting up company 
      Various statistics and AI-based optimization
      </Row>
      {/* Contact details */}
      <Row>
      You reach me easiest through email: verneri.sirva@gmail.com or LinkedIn
      </Row>
      </Container>
    </div>
  )
}

export default Home