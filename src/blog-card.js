import React from 'react';
import './App.css';
import { Container, CardColumns,Card,Button } from 'react-bootstrap';
import waffles from './waffles.jpg';
import spagetti from './spagetti.jpg';
import almondchoco from './almondchoco.jpg';

function BlogCard() {
    return (
        <Container className='card-blog'>
        <CardColumns>
              <Card>
                  <Card.Img src={waffles} alt='Waffles'/>
                  <Card.Title>Breakfast Waffles !</Card.Title>
                  <Card.Text>
                  There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, 
                  by injected humour, or randomised words which don't look
                  </Card.Text>
                  <Button variant='primary'>Read</Button>  
              </Card>

              <Card>
                  <Card.Title>Spagetti Bolognese !</Card.Title>
                  <Card.Text>
                  There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, 
                  by injected humour, or randomised words which don't look
                  </Card.Text>
                  <Button variant='primary'>Read</Button>
                  <Card.Img src={spagetti} alt='Spagetti'/>  
              </Card>

              <Card>
                  <Card.Img src={almondchoco} alt='Almond Chocolate'/>
                  <Card.Title>White Almond Milk Chocolate !</Card.Title>
                  <Card.Text>
                  There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, 
                  by injected humour, or randomised words which don't look
                  </Card.Text>
                  <Button variant='primary'>Read</Button>  
              </Card>
        </CardColumns>  
        </Container>
    );
}

export default BlogCard;
