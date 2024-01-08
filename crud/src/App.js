// import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from './components/UserTable';
import AddEditUserModel from './components/AddEditUserModel';
import { Button,Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { addUser, editUser } from './services/api';
import ConfirmDeleteModel from './components/ConfirmDeleteModel';

function App() {
  const [selectedUser,setSelectedUser] = useState(null)
  const [showAddEditModal,setShowAddEditModal] = useState(false)
  const [showConfirmationDeleteModal,setConfirmationDeleteModal] = useState(false)
  const[currentPage,setCurrentPage] = useState(1)
  const handleShowAddEditModal = (user=null) => {
    setSelectedUser(user)
    showAddEditModal(true)
  }

  const handleHideAddEditModal = (user=null) => {
    setSelectedUser(user)
    showAddEditModal(true)
  }
  const handleConfirmationDeleteModal = () =>{
    setSelectedUser(null);
    setConfirmationDeleteModal(false)
  }

  //add edit user
  const handleAddEditUser =  async(formData) => {
    try{
      if(selectedUser){
        await editUser(selectedUser.id,formData)
      }
      else{
        await addUser(formData)
      }
    }catch(error){
      console.log("Error in adding/editing",error);
    }
  }

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <Container>
      <Row>
        <Col>
          <Button variant='success' onClick={()=>{handleAddEditUser()}}>Add User</Button>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col>
          <UserTable
          onEdit={handleShowAddEditModal}
          onDelete ={handleConfirmationDeleteModal}/>
        </Col>
      </Row>

      <AddEditUserModel
      show={showAddEditModal}
      onHide = {handleHideAddEditModal}
      onSubmit={handleAddEditUser}
      user={selectedUser}
      />

      <ConfirmDeleteModel
      show={showConfirmationDeleteModal}
      onHide={handleConfirmationDeleteModal}
      onConfirm={()=>handleAddEditUser()}
      />
    </Container>
  );
}

export default App;
