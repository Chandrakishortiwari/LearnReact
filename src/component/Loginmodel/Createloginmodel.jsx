import React, { useState } from 'react'
import Module from "./Createloginm.module.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Createloginmodel() {

  let [modelstatus,setmodelstatus] = useState(false)

  return (
    <div>
      <Button variant="primary" className={Module.env} onClick={()=>{setmodelstatus(!modelstatus)}}>Enquery Now</Button>{' '}

    <div className={`${Module.modelOverLay} ${modelstatus ? `${Module.modelShow}`: ''}`}>

     <div className={Module.modelDiv}>
     <div className='form'>
      
      <div>  <Button variant="primary" className={Module.x} onClick={()=>{setmodelstatus(!modelstatus)}}>X</Button>{' '}</div>
        <div className={Module.f}>
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
        </div>
     

     </div>

     </div>


    </div>

    </div>
  )
}

export default Createloginmodel