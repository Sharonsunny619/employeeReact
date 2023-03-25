import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import employee from './components/Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';


function Add() {
    
    
    const[id,SetId]=useState('')
    const[uname,Setuname]=useState('')
    const[age,Setage]=useState('')
    const[desig,Setdesig]=useState('')
    const[salary,Setsalary]=useState('')

    let history=useNavigate()

    const handleAdd=(e)=>{
        e.preventDefault()
        let ids=uuid()
        // console.log(ids);
        let uniqueid =ids.slice(0,8)

        employee.push(
            {
                id:uniqueid ,
                name:uname,
                age:age,
                desig:desig,
                salary:salary
            }
        )
        history('/')
    }

    return (
        <>
            <h1 className='text-center text-primary p-3 mt-3'>ADD DETAILS OF EMPLOYEE</h1>
            <div className='text-center p-2  fs-5'>
                <p className='p-3'>Watchout !!!!!</p>

            </div>

            <Container>
                <Row>
                    <Col md={4}>
                        <img className='mt-6 w-100' src='https://i.postimg.cc/zv2XSMkK/Contact-Call-phone-person-icon-Graphics-3390795-1-580x387.png'></img>
                    </Col>
                    <Col md={8}>
                        <Form className='border p-5'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Employee Name</Form.Label>
                                <Form.Control type="text" placeholder='Employee Name' required
                                onChange={(e) => Setuname(e.target.value)}
                                 />

                                <Form.Label>Employee AGE</Form.Label>
                                <Form.Control  type="text" placeholder='Employee Age' required
                                 onChange={(e) => Setage(e.target.value)} 
                                 />

                                <Form.Label>Employee Designation</Form.Label>
                                <Form.Control  type="text" placeholder='Employee Designation' required
                                 onChange={(e) => Setdesig(e.target.value)} 
                                 />

                                <Form.Label>Employe Salary</Form.Label>
                                <Form.Control  type="text" placeholder='Employee Salary' required
                                 onChange={(e) => Setsalary(e.target.value)} 
                                 />


                            </Form.Group>

                            <Button 
                            onClick={(e) => handleAdd(e)} 
                            variant="primary" type="submit">
                               ADD
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Add
