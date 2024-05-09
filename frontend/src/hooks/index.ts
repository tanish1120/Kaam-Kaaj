import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Todo{
    "content": string
    "title": string
    "id": string
    "completed": boolean
}

export const useTodos = () => {
    const [loading,setLoading] = useState(true);
    const [todos,setTodos] = useState<Todo[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/todo/bulk`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then( response =>{
                setTodos(response.data.todos);
                setLoading(false);
            })
    },[])
    
    return{
        loading,
        todos
    }
}

export const useTodo = ( { id }: { id: string }) =>{
    const [loading,setLoading] = useState(true);
    const [todo,setTodo] = useState<Todo>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/todo/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then( response =>{
                setTodo(response.data.todo);
                setLoading(false);
            })
    },[id])
    
    return{
        loading,
        todo
    }
}

export const useUpdateTodo = () => {
    const [loading,setLoading] = useState(true);
    const [todos,setTodos] = useState<Todo[]>([]);

    useEffect(()=>{
        axios.put(`${BACKEND_URL}/api/v1/todo`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then( response =>{
                setTodos(response.data.todos);
                setLoading(false);
            })
    },[])
    
    return{
        loading,
        todos
    }
}