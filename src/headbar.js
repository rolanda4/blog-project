import React from 'react';
import './App.css';
import Login from './login';
import {Row, Col } from 'react-bootstrap';

function Headbar() {
    return (
      <Row>
        <Col>
        <h3 style={{float:"left"}}><i>A Ghanaian Foodie</i></h3>
        </Col>

        <Col>
        <Login />
        </Col>
      </Row>
    );
  }
  
  export default Headbar;