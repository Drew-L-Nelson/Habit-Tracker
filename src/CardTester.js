import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardTester.css';

export default function CardTester () {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  function countDown() {
    if (count <= 0) {
      return 0;
    }
    setCount(count - 1);
  }

  return (
    <Card style={{ width: '98%', display: 'flex', flexDirection: 'row' }}>

      <Card.Body style={{ width: '20%', display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
        <Card.Title style={{ width: '30px', height: '30px', 'margin-left': '40%'}} >{count}</Card.Title>
      </Card.Body>

      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={countDown} size="sm">
            ▼ 1
          </Button>{' '}
          <Button variant="primary" onClick={countUp} size="sm">
            ▲ 1
          </Button>
      </Card.Body>

      <Card.Body>
          <Button
            variant="dark"
            size="sm"
            style={{ width: '120px', margin: '1px' }}
          >
            Edit Habit
          </Button>
          <Button
            variant="danger"
            size="sm"
            style={{ width: '120px', margin: '1px' }}
          >
            Delete Habit
          </Button>
      </Card.Body>

    </Card>
  );
}