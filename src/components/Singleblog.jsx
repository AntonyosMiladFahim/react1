import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './Singleblog.css'


function Singleblog(props) {
  return (
    
     <Card className='single-blog' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
        </Card.Text>
        <Button variant="primary">id : {props.id} </Button>
      </Card.Body>
    </Card>
  );
}

export default Singleblog;