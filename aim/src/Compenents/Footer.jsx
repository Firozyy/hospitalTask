import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='fixed-bottom'>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; Shopicartz
                </Col>
            </Row>
        </Container >
    </footer>
  )
}

export default Footer