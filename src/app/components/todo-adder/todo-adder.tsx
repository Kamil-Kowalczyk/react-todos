import { useState } from 'react';
import styles from './todo-adder.module.scss';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../reusable/icon-button/icon-button';
import { Alert, Modal, ModalBody, ModalHeader } from 'react-bootstrap';

export interface TodoAdderProps {
  handleTodoAdd: (todoName: string) => void
}

export function TodoAdder({ handleTodoAdd }: TodoAdderProps) {
  const [todoName, setTodoName] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value)
  }

  const handleClick = () => {
    if (todoName == "") {
      setError(true)
    } else {
      handleTodoAdd(todoName)
      setTodoName("")
      setError(false)
    }
  }

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }

  const handleInputBlur = () => {
    setIsInputFocused(false)
  }

  return (
    <>
      <div 
        className={`p-3 rounded-5 d-inline-flex w-100 ${styles['holder']} 
          ${isInputFocused ? styles['focusedInput'] : ''}`}
      >
        <input 
          type='text'
          className={`form-input col-11 text-center ${styles['todoInput']}`}
          onChange={handleChange}
          value={todoName}
          placeholder='Type here a new todo...'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <div className='col-1 text-center'>
          <IconButton 
            icon={faCirclePlus} 
            onClick={() => handleClick()} 
          />
        </div>
      </div>
      {
        error && (
          <Alert className='fixed-top' dismissible onClose={() => setError(false)} variant='danger'>
            <p className={`text-center`}> Name should be at least one character long!</p>
          </Alert>
        )
      }
    </>
  );
}

export default TodoAdder;
