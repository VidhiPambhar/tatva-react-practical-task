import React, { useEffect, useState } from 'react'
import {Table,Button} from 'react-bootstrap'
import { deleteUser, getUsers } from '../services/api';
import { ITEMS_PER_PAGE } from '../utils/constants';
const UserTable = ({onEdit,user, onDelete}) => {

    const [users,setUsers]=useState([]);
    const [currentPage ,setCurrentPage] =useState(1)
    //get all usets
    const fetchUsers = async()=>{
        try{
            const data = await getUsers();
            console.log("datadatadata",data);
            setUsers(data);
        }catch(error){
            console.log("Error fetching data:",error);
        }
    }

    //delete particular user
    const handleDelete = async(userId) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if(confirmed){
            try{
                await deleteUser(userId);
                fetchUsers();  
                onDelete();  //notify parent component about the deletion 
            }
            catch(error){
                console.error('Error deleting user',error)
            }
        }
    }

    const indexOfLastUser = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstUser = indexOfLastUser - ITEMS_PER_PAGE;
    const currentUsers = users.slice(indexOfFirstUser,indexOfLastUser)

    useEffect(()=>{
        fetchUsers();
    },[])


  return (
    <div>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>phone</th>
                <th>status</th>
                <th>Actions</th>

            </tr>
        </thead>
            <tbody>
                {currentUsers.map((users)=>(
                    <tr key={user.id}>
                        <td>{users.firstName}</td>
                        <td>{users.lastName}</td>
                        <td>{users.email}</td>
                        <td>{users.phone}</td>
                        <td>{users.status== 1 ? 'Active' : 'InActive'}</td>
                        <td>
                            <Button variant='info' onClick={()=> onEdit(user)}>Edit</Button>
                            <Button variant='danger' onClick={()=> handleDelete(user.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
    <td>
    </td>
    </tbody>
    </Table>
    </div>
  )
}

export default UserTable
