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

      <div className="count-div">
        <div className="count">
          {count}
        </div>
      </div>

      <Card.Body className="title-count-buttons">
        <Card.Title>Habit Title</Card.Title>
        <Button className="counters" variant="secondary" onClick={countDown} size="sm">
            ▼ 1
          </Button>{' '}
          <Button className="counters" variant="secondary" onClick={countUp} size="sm">
            ▲ 1
          </Button>
      </Card.Body>

      <Card.Body className="edit-delete-buttons">
          <Button
            variant="secondary"
            size="sm"
            style={{ width: '120px', margin: '1px' }}
          >
            Edit Habit
          </Button>
          <Button
            variant="secondary"
            size="sm"
            style={{ width: '120px', margin: '1px' }}
          >
            Delete Habit
          </Button>
      </Card.Body>

    </Card>
  );
}