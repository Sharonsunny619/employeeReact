import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import employee from './components/Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const[id,Setid]=useState(0)
    const[uname,Setuname]=useState('')
    const[age,Setage]=useState(0)
    const[desig,Setdesig]=useState('')
    const[salary,Setsalary]=useState(0)

    useEffect(()=>{
        Setid(JSON.parse(localStorage.getItem("id")))
        Setuname(localStorage.getItem("uname"))
        Setage(JSON.parse(localStorage.getItem("age")))
        Setdesig(localStorage.getItem("desig"))
        Setsalary(JSON.parse(localStorage.getItem("salary")))
    },[])   

    var index=employee.map((item)=>item.id).indexOf(id)
    let history=useNavigate()
   

    const handleUpdate=(e)=>{
        e.preventDefault()

        let emp=employee[index]
        emp.name=uname
        emp.age=age
        emp.desig=desig
        emp.salary=salary
        history('/')
    }


    // console.log(id);
    // console.log(uname);
    // console.log(desig);
    // console.log(age);
    // console.log(salary);

  return (
    <>
    <h1 className='text-center text-primary p-3 mt-3'>UPDATE DETAILS OF EMPLOYEE</h1>
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
        <Form.Control value={uname} type="text" onChange={(e)=>Setuname(e.target.value)}  />

        <Form.Label>Employee AGE</Form.Label>
        <Form.Control value={age} type="text" onChange={(e)=>Setage(e.target.value)} />

        <Form.Label>Employee Designation</Form.Label>
        <Form.Control value={desig} type="text" onChange={(e)=>Setdesig(e.target.value)} />

        <Form.Label>Employe Salary</Form.Label>
        <Form.Control value={salary} type="text" onChange={(e)=>Setsalary(e.target.value)} />
      
       
      </Form.Group>
     
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
       UPDATE
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default Edit
