import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate} from 'react-router-dom';

function Home() {
    let history=useNavigate() 
    
    const handleDelete=(id)=>{
        let index= employee.map(item=>item.id).indexOf(id)
        employee.splice(index,1)
        history('/')
    }

    const handleEdit=(id,uname,age,desig,salary)=>{
        localStorage.setItem("id",JSON.stringify(id))
        localStorage.setItem("uname",uname)
        localStorage.setItem("age",JSON.stringify(age))
        localStorage.setItem("desig",desig)
        localStorage.setItem("salary",JSON.stringify(salary))
    }

  return (
    <>
    <h1 className="text-center text-primary p-3 mt-3"> EMPLOYEE MANAGEMENT SYSTEM</h1>
    <div className='text-center p-2 fs-5 '>
        <p>
           Watch out!  elements don't naturally support a disabled attribute. In browsers that support it this is handled with a point-events: none style but not all browsers support it yet.
           React Bootstrap will prevent any onClick handlers from firing regardless of the rendered element.Watch out!  elements don't naturally support a disabled attribute. In browsers that support it this is handled with a point-events: none style but not all browsers support it yet.
           
        </p>

       <Link to={'/add'}>
           <Button className='mt-3' variant="outline-primary"   size="lg">   ADD NEW EMPLOYEE  <i class="fa-solid fa-user-plus"></i> </Button>
       </Link>   
       <Table striped bordered hover className='border border-white' style={{margin:'7rem', width:"88%"}} >
      <thead>
        <tr className='text-primary fs-4' >
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>DESIGNATION</th>
          <th>SALARY</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
         {
            employee && employee.length>0?
            employee.map(item=>(
                <tr className='fs-5'>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.desig}</td>
                    <td>{item.salary}</td>
                    <td>

                    <Link to={'/edit'}>
                        <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} className='ms-2 me-2' variant="info"><i class="fa-solid fa-pencil"></i></Button>

                    </Link>                    
                    
                        <Button onClick={()=>handleDelete(item.id)} className='ms-3' variant="danger"><i class="fa-solid fa-trash-can"></i></Button>
                    
                    </td>
                </tr>

            )):'no table data'
         }
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Home
