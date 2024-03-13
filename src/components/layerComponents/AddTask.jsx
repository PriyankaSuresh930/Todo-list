import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { moduleAddTask } from '../../utilis/FormData';
import FormField from '../baseComponents/FormField';
import { addTask, headers } from '../../apis/todoApi';
import { useNavigate } from 'react-router-dom';
import { taskSchema } from '../baseComponents/Validation'
import { getprefixName } from '../baseComponents/Common';
import Loader from '../../images/Spinner-3.gif';

const AddTask = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [appLoader, setAppLoader] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        status: '',
    })
    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const clearFunc = () => {
        window.location.reload(false);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let errorMessage = {}
        async function sendData() {
            try {
                await taskSchema.validate(formData, { abortEarly: false }).then(async (responseData) => {
                    setFormError({});
                    setAppLoader(true);
                    var response = await addTask(responseData, headers);
                    if (response) {
                        setFormData(response.data);
                        setShow(false)
                        navigate('/todo-list')
                        clearFunc();
                        setAppLoader(false);
                    }
                })

            } catch (error) {
                const errors = error.errors;
                setAppLoader(false);
                console.log(error.errors)
                {
                    errors.map((error) => {
                        errorMessage[getprefixName(error)] = error;
                        setFormError(errorMessage);
                    })
                }
            }
        }
        sendData();
    }
    return (
        /* Start: Add Task
          ========================================= */
        <>
            <Button onClick={handleShow} variant="" className='btn-pink'> Add Task </Button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>

                <Offcanvas.Header closeButton className='border-bottom'>
                    <Offcanvas.Title>{moduleAddTask.Title}</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    {
                        appLoader ?
                            <div className="w-100 vh-100 d-flex justify-content-center align-items-center"><img src={Loader} width="70px" height="70px"/></div> :
                            <form onSubmit={handleSubmit}>
                                <FormField
                                    schema={moduleAddTask}
                                    setFormData={{ formData, setFormData }}
                                    setFormError={{ formError, setFormError }}
                                    setIsSubmit={{ isSubmit, setIsSubmit }}
                                    template={moduleAddTask.taskForm}
                                />
                            </form>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
        /* End: Add Task
        ========================================= */
    )
}

export default AddTask