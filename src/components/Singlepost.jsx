import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router';


function Singlepost() {
    const params=useParams();
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/posts/" + params.id).then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
    },[])
  return (
    <div>
      <h2>
        <Card className="single-blog">
          <Card.Body>
            <Card.Title>
              <NavLink to={/posts/ + data.id}>
                <h2>{data.title}</h2>
              </NavLink>
            </Card.Title>

            <Card.Text>{data.body}</Card.Text>
            <Button variant="primary">id : {data.id} </Button>
          </Card.Body>
        </Card>
      </h2>
    </div>
  );
}

export default Singlepost
