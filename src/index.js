import { Todo } from '../classes/todo.class.js';
import { TodoList } from '../classes/todo-list.class.js';
import { crearTodoHtml } from './js/componentes.js';
import './styles.css';


export const todoList = new TodoList()
// const tarea2 = new Todo('Aprender Python')
// todoList.nuevoTodo(tarea2)
todoList.todos.forEach(todo => crearTodoHtml(todo))
