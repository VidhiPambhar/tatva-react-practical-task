import axios from 'axios'
const API_URL = 'http://localhost:9000/users/all/';

export const getUsers = async()=>{
    try{
        const response = await axios.get(API_URL);
        console.log("responseresponseresponse",response);
        return response.data;
    }catch(error){
        throw error
    }
}

export const addUser = async(user)=>{
    try{
        const response = await axios.post(`${API_URL}`,user);
        return response.data;
    }catch(error){
        throw error
    }
}

export const editUser = async(userId,updateUser)=>{
    try{
        const response = await axios.put(`${API_URL}/${userId}`,updateUser);
        return response.data;
    }catch(error){
        throw error
    }
}

export const deleteUser = async(userId)=>{
    try{
        const response = await axios.delete(`${API_URL}/${userId}`);
        return response.data;
    }catch(error){
        throw error
    }
}