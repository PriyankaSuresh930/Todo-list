import React, { useState, useEffect } from 'react';
import RenderTbody from '../layerComponents/RenderTable';
import AddTask from '../layerComponents/AddTask';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTask, headers } from '../../apis/todoApi';
import Loader from '../../images/Spinner-3.gif';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [appLoader, setAppLoader] = useState(true);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await getTask(headers);
                if (
                    response &&
                    response.status === 200 &&
                    response.statusText === 'OK'
                ) {
                    setTasks(response.data)
                    setAppLoader(false);

                }
                else {
                    toast.error("Something went wrong.");
                    setAppLoader(false);
                }
            } catch (error) {
                console.log(error.message);
                setAppLoader(false);
            }
        }
        fetchTasks();
    }, [])
    return (
        <main className='task-content p-3 p-lg-5'>
            <section>
                <aside className='d-flex justify-content-end'><AddTask /></aside>
                
                <div className="table-responsive">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th className='list-wrapper'>Task ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Assigned To</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appLoader ? 
                                <tr className='bg-light'><td td className='text-center' colSpan="6">
                                    Loading...
                                    </td></tr> 
                                    :
                                <RenderTbody tasks={tasks} />}

                        </tbody>

                    </table>
                </div>
            </section>
        </main>
    )
}

export default TodoList