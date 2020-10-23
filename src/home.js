import React from 'react';
import './App.css';
import HomeImage from './home-image';
import { Container,Row, Col, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container>
        <Row>
            <Col>
                <HomeImage />
            </Col>

            <Col>
                <h3 className='frontText'>
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout.
                     <br></br>
                    <Button variant='primary'>Read More</Button>
                </h3>
            </Col>

        </Row>
        </Container>
    );
}

export default Home;
