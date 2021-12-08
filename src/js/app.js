/* eslint-disable */

import '../sass/style.scss'

import { ToDoList } from './to-do-list'
import { ToDoFormCreate } from './to-do-form'
import { ToDoListEdit } from './to-do-listEdit'
import { ToDoStorage } from './to-do-storage'

const formElem = document.querySelector('#form')
const listElem = document.querySelector('#list')

const storage = new ToDoStorage()
const data = storage.data
new ToDoFormCreate(data, formElem)
new ToDoList(data, listElem)
new ToDoListEdit(data, listElem)
