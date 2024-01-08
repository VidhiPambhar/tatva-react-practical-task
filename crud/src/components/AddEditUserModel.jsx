import React, { useState } from 'react'
import { Modal ,Form, Button} from 'react-bootstrap'
const AddEditUserModel = ({user, onSubmit}) => {
    const [formData,setFormData] = useState({
        firstName : user ? user.firstName : '',
        lastName: user ? user.lastName : '',
        email : user ? user.email : '',
        phone : user ? user.phone : '',
        status: user ? user.status : ''

    })
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData((prevData)=>({...prevData,[name]:value}))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        onSubmit(formData)
    }
  return (
    <div>
      <Modal>
        <Modal.Header closeButton>
            <Modal.Title>{user? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formName'>
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter FirstName'
                    name='firstName'
                    value={FormData.firstName}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>
                <Form.Group controlId='formLastName'>
                    <Form.Label>LastName</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter lastName'
                    name='lastName'
                    value={FormData.lastName}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>
                <Form.Group controlId='formLastName'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter lastName'
                    name='email'
                    value={FormData.email}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>
                <Form.Group controlId='phone'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter phone'
                    name='phone'
                    value={FormData.phone}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>
                <Form.Group controlId='status'>
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter status'
                    name='status'
                    value={FormData.status}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Button>
                    {user ? 'Update' : 'Add'}
                </Button>
            </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddEditUserModel
