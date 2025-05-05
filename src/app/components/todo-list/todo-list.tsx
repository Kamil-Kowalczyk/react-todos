import { Todo, TodoHandler } from 'src/app/models/todo.model';
import styles from './todo-list.module.scss';
import { faCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import IconButton, { IconButtonProps } from '../reusable/icon-button/icon-button';

export interface TodoListProps {
  list: Todo[]
  handleEdit: TodoHandler
  handleDelete: TodoHandler
  handleCompletion: TodoHandler
}

interface TodoListItemProps {
  name: string
  completed: boolean
  handleEdit: () => void
  handleDelete: () => void
  handleCompletion: () => void
}

function TodoListItem({ name, completed, handleEdit, handleDelete, handleCompletion }: TodoListItemProps) {
  const iconButtonStyle: IconButtonProps["style"] = {
    icon: {height: '2em'},
    button: {marginRight: '0.5em'}
  }

  return (
    <div className={`${completed ? styles['completed'] : ''} bg-white mb-3 rounded-5 p-3 d-flex w-100`}>
      <div className=' col-9 ps-4 row m-0' >
        <div className={`d-flex my-auto text-break ${completed ? 'text-decoration-line-through' : ''}`}>
          {name}
        </div>
      </div>
      <div className='col-3 row m-0'>
        <div className='d-flex justify-content-end'>
          <IconButton 
            icon={faTrashCan}
            onClick={() => handleDelete()}
            style={iconButtonStyle}
          />
          <IconButton 
            icon={faPenToSquare}
            onClick={() => handleEdit()}
            style={iconButtonStyle}
          />
          <IconButton 
            icon={faCheck}
            onClick={() => handleCompletion()}
            style={iconButtonStyle}
          />
        </div>
      </div>
      
    </div>
  )
}

export function TodoList({ list, handleCompletion, handleDelete, handleEdit }: TodoListProps) {
  return (
    <div className={`mt-5`}>
      {list.map((todo) => (
        <TodoListItem 
          key={todo.date.getTime()}
          name={todo.name}
          completed={todo.completed}
          handleEdit={() => handleEdit(todo.date)}
          handleDelete={() => handleDelete(todo.date)}
          handleCompletion={() => handleCompletion(todo.date)}
        />
      ))}
    </div>
  );
}

export default TodoList;
