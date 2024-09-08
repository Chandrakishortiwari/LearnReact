import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blog } from '../Data/blog';

function Passobjecttochildcomponent() {
  return (
    <div>
        <Container>
            <Row>
                {blog.map((v,i)=>{
                    return(
                        <ProductItems pitems={v} key={i} />
                    )
                })};
            
            </Row>
        </Container>
    </div>
  )
}

export default Passobjecttochildcomponent

function ProductItems({pitems}){
    return(
        <>
        <div className='col-lg-3 mb-4' >
        <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{pitems.title}</Card.Title>
        <h1>{pitems.id}</h1>
        <Card.Text>
          {pitems.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </>
    )
}