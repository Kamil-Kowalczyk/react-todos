import { Todo } from 'src/app/models/todo.model';
import styles from './todo-edit-dialog.module.scss';
import { Form, Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface TodoEditDialogProps {
  show: boolean
  onCancel: () => void
  onSave: () => void
  todo: Todo 
  onChangeHandlers: {
    name: (event: React.ChangeEvent<HTMLInputElement>) => void
    completed: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
}

export function TodoEditDialog({show, onCancel, onSave, todo, onChangeHandlers}: TodoEditDialogProps) {
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validate()) 
      onSave()
  }

  const validate = () => {
    let error: boolean = false
    if (todo?.name.length == 0) {
      error = true
    }
    setError(error)
    return error != true
  }

  return (
    <Modal show={show}>
      <ModalHeader>
        <h2 className='h2'>Todo edition</h2>
      </ModalHeader>
      <ModalBody>
        <form id='todoEditionForm' onSubmit={handleSubmit}>
          <div className='form-group mb-4'>
            <label htmlFor='name' className='mb-2 form-label'>Todo name:</label>
            <input
              id='name'
              name='name'
              type='text'
              className='form-control'
              value={todo.name}
              onChange={onChangeHandlers.name}
            />
            {
              error && (
                <p className='text-danger'>
                  Name should be at least one character long!
                </p>
              )
            }
          </div>
          <div className='form-check'>
            <input 
              id='completed'
              type='checkbox'
              className='form-check-input'
              checked={todo.completed}
              onChange={onChangeHandlers.completed}
            />
            <label htmlFor='completed' className='form-check-label'>Is todo completed?</label>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <button 
          type='submit'
          form='todoEditionForm'
          className='btn btn-primary'
        >
          Save
        </button>
        <button 
          className='btn btn-secondary'
          onClick={onCancel}
        >
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default TodoEditDialog;
