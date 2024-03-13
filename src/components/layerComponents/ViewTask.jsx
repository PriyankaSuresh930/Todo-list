import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';

const ViewTask = ({ taskId }) => {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState([]);
  const { title,  description, status, name} = task;

  useEffect(() => {
    axios.get('http://localhost:8000/todo/' + taskId)
      .then(res => setTask(res.data))
      .catch(error => console.log(error))
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    /* Start: View task
      ========================================= */
    <>
      <span className='pe-2 cursor-pointer' onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16px" height="16px" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </span>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h5>View Task</h5></Offcanvas.Title>
        </Offcanvas.Header>
        <hr className='m-0' />
        <Offcanvas.Body>
          <div className='view-data mt-4'>
            <table className='table table-striped'>
              <tbody>
                <tr>
                  <td>Task Id</td>
                  <td>{taskId}</td>
                </tr>
                <tr>
                  <td>Title</td>
                  <td >{title}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{description}</td>
                </tr>
                <tr>
                  <td>Assigned To</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{status}</td>
                </tr>
              </tbody>
            </table>
            <div className='d-flex justify-content-between'>
              <button tupe="button" onClick={handleClose} className='btn btn-primary'>Back</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    /* End: View task
    ========================================= */
  )
}

export default ViewTask