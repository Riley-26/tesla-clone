import React from 'react'
import styled from "styled-components"

function Footer() {
  return (
    <Container>
        <a href="">Tesla &copy; 2022</a>
        <a href="">Privacy & Legal</a>
        <a href="">Contact</a>
        <a href="">Careers</a>
        <a href="">News</a>
        <a href="">Locations</a>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    height: 5vh;

    a{
        font-size: 12px;
        font-weight: 600;
        color: grey;
    }
`