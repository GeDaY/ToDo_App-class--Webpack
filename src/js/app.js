import '../sass/style.scss'

import { ToDoFormCreate } from './toDoForm'
import { ToDoList } from './toDoList'
import { ToDoListEdit } from './toDoListEdit'
import { ToDoSaver } from './toDoSaver'

const data = []
const listElem = document.querySelector('#list')
const formElem = document.querySelector('#form')

new ToDoFormCreate(formElem, data)
new ToDoList(listElem, data)
new ToDoListEdit(listElem, data)
new ToDoSaver(data)
