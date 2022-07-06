import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="../images/model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="../images/model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="../images/model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="../images/model-x.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section
            title="Solar and Powerwall "
            description="Power Everything"
            backgroundImg="../images/solar-panel.jpg"
            leftBtnText="Learn More"
        />
        <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="../images/solar-roof.jpg"
            leftBtnText="Learn More"
        />
        <Section
            title="Accessories"
            description=""
            backgroundImg="../images/accessories.jpg"
            leftBtnText="Order Now"
        />
        <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`