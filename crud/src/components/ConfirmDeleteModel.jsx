import React from 'react'
import {Modal,Button} from 'react-bootstrap'

const ConfirmDeleteModel = ({onHide,onConfirm}) => {
  return (
    <div>
      <Modal>
        <Modal.Header>
            <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are You sure want to delete this user?
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={onHide}>
                Cancel
            </Button>
            <Button variant='danger' onClick={onConfirm}>
                Delete
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ConfirmDeleteModel
