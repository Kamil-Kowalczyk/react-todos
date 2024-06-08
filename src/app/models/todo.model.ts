export type TodoHandler = (todoDate: Date) => void

export interface Todo {
    name: string
    completed: boolean
    date: Date
}