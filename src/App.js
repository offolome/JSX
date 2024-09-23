import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Components/name';
import Image from './Components/image';
import Price from './Components/price';
import Description from './Components/description';
import { Card, Container } from 'react-bootstrap';

function App() {
  return (
    <Container className='mt-5'>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
