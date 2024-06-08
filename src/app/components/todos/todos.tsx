import { useEffect, useState } from 'react';
import TodoAdder from '../todo-adder/todo-adder';
import TodoList from '../todo-list/todo-list';
import styles from './todos.module.scss';
import { Todo, TodoHandler } from 'src/app/models/todo.model';
import TodoEditDialog, { TodoEditDialogProps } from '../todo-edit-dialog/todo-edit-dialog';

export interface TodosProps {}

const TODOS: Todo[] = [
  {name: 'go for a walk with the dog', completed: false, date: new Date(2024, 3, 10, 3, 20, 0)},
  {name: 'take the garbage out', completed: false, date: new Date(2024, 6, 10, 3, 20, 0)},
  {name: 'hoover the floors', completed: true, date: new Date(2024, 3, 13, 10, 20, 0)},
]

export function Todos(props: TodosProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editedTodo, setEditedTodo] = useState<Todo | undefined>(undefined)

  const updateTodos = (updatedTodo: Todo) => {
    let updatedTodos: Todo[] = todos.filter((todo) => todo.date != updatedTodo.date)

    if (updatedTodo.completed == true)
      updatedTodos = [...updatedTodos, updatedTodo]
    else
      updatedTodos = [updatedTodo, ...updatedTodos]

    setTodos(updatedTodos)
  }

  const handleTodoAdd = (todoName: string) => {
    setTodos([
      {name: todoName, completed: false, date: new Date()},
      ...todos
    ])
  }

  const handleTodoEdit: TodoHandler = (todoDate: Date) => {
    setEditedTodo(todos.filter((todo) => todo.date == todoDate)[0])
    setIsEditing(true)
  }

  const handleTodoDelete: TodoHandler = (todoDate: Date) => {
    setTodos(todos.filter((todo) => todo.date != todoDate))
  }

  const handleTodoCompletion: TodoHandler = (todoDate: Date) => {
    let todo: Todo = todos.filter((todo) => todo.date == todoDate)[0]
    todo.completed = !todo.completed

    updateTodos(todo)
  }

  const editionOnChangeHandlers: TodoEditDialogProps['onChangeHandlers'] = {
    name: (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditedTodo((value: Todo | undefined) => {
        if (!value)
          return undefined

        return {
          name: event.target.value,
          date: value.date,
          completed: value.completed
        }
      })
    },
    completed: (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditedTodo((value: Todo | undefined) => {
        if (!value) 
          return undefined

        return {
          name: value.name,
          date: value.date,
          completed: event.target.checked
        }
      })
    }
  }

  const handleTodoEditCancel = () => {
    setIsEditing(false)
    setEditedTodo(undefined)
  }

  const handleTodoEditSave = () => {
    setIsEditing(false)

    if (!editedTodo)
      return

    updateTodos(editedTodo)
  }

  return (
    <div className='col-9 mx-auto'>
      <TodoAdder handleTodoAdd={handleTodoAdd} />
      {
        editedTodo && (
          <TodoEditDialog 
            show={isEditing}
            onCancel={handleTodoEditCancel}
            onSave={handleTodoEditSave}
            todo={editedTodo}
            onChangeHandlers={editionOnChangeHandlers}
          />
        )
      }
      <TodoList 
        list={todos} 
        handleEdit={handleTodoEdit}
        handleDelete={handleTodoDelete}
        handleCompletion={handleTodoCompletion}
      />
    </div>
  );
}

export default Todos;
