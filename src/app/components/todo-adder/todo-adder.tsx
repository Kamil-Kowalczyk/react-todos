import { useState } from 'react';
import styles from './todo-adder.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../reusable/icon-button/icon-button';

/* eslint-disable-next-line */
export interface TodoAdderProps {
  handleTodoAdd: (todoName: string) => void
}

export function TodoAdder({ handleTodoAdd }: TodoAdderProps) {
  const [todoName, setTodoName] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value)
  }

  return (
    <div className={`p-3 rounded-5 d-inline-flex w-100 ${styles['holder']}`}>
      <input 
        type='text'
        className='form-input col-11 text-center' 
        onChange={handleChange}
        placeholder='Type here a new todo...'
      />
      <div className='col-1 text-center'>
        <IconButton 
          icon={faCirclePlus} 
          onClick={() => handleTodoAdd(todoName)} 
        />
      </div>
    </div>
  );
}

export default TodoAdder;
