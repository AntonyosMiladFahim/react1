import React, { useEffect } from 'react'
import { useState } from 'react';
import Singleblog from './Singleblog';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Blog.css'

const Blog = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/posts").then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
    },[])
  return (
    <div className="blog-container">
        <Row className="blog-row">
            {data.map((item)=>(
                <Col className="blog-col" md={4}  key={item.id}>
                    <Singleblog id={item.id} title={item.title} body={item.body}  />
                </Col>
            ))}
        </Row>
       
        
    </div>
  )
}

export default Blog