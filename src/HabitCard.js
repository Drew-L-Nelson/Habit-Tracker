import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HabitCard.css';

export default function HabitCard () {
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
    <Card style={{ width: '98%', display: 'flex', flexDirection: 'row', 'justify-content': 'space-between', 'margin-top': '0.5rem' }}>

      <Card.Body style={{ width: '20px', height: '80%', display: 'flex', 'align-items': 'center', 'justify-content': 'center', 'background-color': 'light-gray', border: '1px solid orange', 'border-radius': '5px'}}>
        <Card.Title size="sm" style={{  height: '98%', 'align-items': 'center', display: 'flex', 'justify-content': 'center', 'font-size': "4rem"}}>
          {count}
        </Card.Title>
      </Card.Body>

      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary" onClick={countDown} size="sm">
            ▼ 1
          </Button>{' '}
          <Button variant="primary" onClick={countUp} size="sm">
            ▲ 1
          </Button>
      </Card.Body>

      <Card.Body style={{ display: 'flex', flexDirection: 'column', 'align-items': 'flex-end' }}>
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