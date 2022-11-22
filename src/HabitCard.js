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
    <Card className='main-div'>

      <Card.Body style={{ width: '30px', display: 'flex', 'align-items': 'center', 'justify-content': 'center', border: '1px solid gray', 'border-radius': '100px'}}>
          <Card.Title style={{ height: '98%',  display: 'flex', 'align-items': 'center', 'justify-content': 'center', 'font-size': "4rem"}}>
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