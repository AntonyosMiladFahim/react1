import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './Singleblog.css'
import { NavLink } from 'react-router';



function Singleblog(props) {
  return (
    
     <Card className='single-blog' >
      <Card.Body>
        <Card.Title>
          <NavLink to={/blog/ + props.id}>
          <h2>
            {props.title}
          </h2>
            
          </NavLink>
        </Card.Title>
        
        <Card.Text>
          {props.body}
        </Card.Text>
        <Button variant="primary">id : {props.id} </Button>
      </Card.Body>
    </Card>
  );
}

export default Singleblog;