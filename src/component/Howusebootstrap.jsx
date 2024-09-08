
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Howusebootstrap() {
  return (
    <div className=''> Howusebootstrap
    <h1 className='text-danger'> welcome</h1>
    

     {/* he is a using react-bootstrap  */}

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/3701e/MainBefore.avif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     </div>
  )
}

export default Howusebootstrap