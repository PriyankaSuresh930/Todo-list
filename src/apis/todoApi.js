import axios from 'axios';
const token = localStorage.getItem('auth');
export const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Authorization" : `Bearer ${token && token}`
}

const todoEndPoint = 'http://localhost:8000/todo';

export const addTask = async (data,headers) => {
    try {
        console.log("data", data)
        const response = await axios.post(todoEndPoint, data, {headers: headers});
        return response;
        } 
    catch (error) {
        return error;
    }
}

export const getTask = async (headers) => {
    try {
        const response = await axios.get(todoEndPoint, {headers: headers});
        return response;
        } 
    catch (error) {
        return error;
    }
}

export const updateTask = async (data,headers) => {
    try {
        const response = await axios.put(`${todoEndPoint}/${data.id}`, data, {headers: headers});
        return response;
        } catch (error) {
        return error;
    }
}

export const deleteTask = async (id,headers) => {
    try {
        const response = await axios.delete(`${todoEndPoint}/${id}`,{headers: headers});
        return response;
        } catch (error) {
        return error;
    }
}