import '../sass/style.scss'

import { ToDoSaver } from './toDoSaver'
import { ToDoFormCreate } from './toDoForm'
import { ToDoList } from './toDoList'
import { ToDoListEdit } from './toDoListEdit'

const data = []
const listElem = document.querySelector('#list')
const formElem = document.querySelector('#form')

new ToDoSaver(data)
new ToDoFormCreate(formElem, data)
new ToDoList(listElem, data)
new ToDoListEdit(listElem, data)

export { formElem }
