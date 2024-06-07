import { useState } from 'react';
import styles from './todo-adder.module.scss';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../reusable/icon-button/icon-button';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

export interface TodoAdderProps {
  handleTodoAdd: (todoName: string) => void
}

interface ValidationErrorPopupProps {
  show: boolean
  onHide: () => void
}

function ValidationErrorPopup({ show, onHide }: ValidationErrorPopupProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <ModalHeader closeButton className={`${styles['modalHeader']}`}>
        <h5 className='h5'>Validation Error</h5>
      </ModalHeader>
      <ModalBody className={`${styles['modalHeader']}`}>
        <h2 className='h2 text-center text-danger'>A new todo should be at least one character long!</h2>
      </ModalBody>
    </Modal>
  )
}

export function TodoAdder({ handleTodoAdd }: TodoAdderProps) {
  const [todoName, setTodoName] = useState<string>("")
  const [isError, setIsError] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value)
  }

  const handleClick = () => {
    if (todoName == "") {
      setIsError(true)
    } else {
      handleTodoAdd(todoName)
      setTodoName("")
    }
  }

  const handlePopupHide = () => {
    setIsError(false)
  }

  return (
    <>
      <ValidationErrorPopup
        show={isError} 
        onHide={handlePopupHide}
      />
      <div className={`p-3 rounded-5 d-inline-flex w-100 ${styles['holder']}`}>
        <input 
          type='text'
          className='form-input col-11 text-center' 
          onChange={handleChange}
          value={todoName}
          placeholder='Type here a new todo...'
        />
        <div className='col-1 text-center'>
          <IconButton 
            icon={faCirclePlus} 
            onClick={() => handleClick()} 
          />
        </div>
      </div>
    </>
  );
}

export default TodoAdder;
