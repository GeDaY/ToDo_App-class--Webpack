import { data } from './toDoForm'

const listElem = document.querySelector('#list')

class ToDoList {
  constructor(listElem) {
    this.listElem = listElem
    this.#init()
  }

  #init() {
    this.handleChange = this.#handleChange.bind(this)
    this.handleclickDelBtn = this.#handleclickDelBtn.bind(this)
    this.handleRenderNeed = this.#handleRenderNeed.bind(this)

    this.listElem.addEventListener('change', this.handleChange)
    this.listElem.addEventListener('click', this.handleclickDelBtn)
    window.addEventListener('render:need', this.handleRenderNeed)
    window.addEventListener('render:needEditListElem', this.handleRenderNeed)
    window.addEventListener('render:needAfterReload', this.handleRenderNeed)
  }

  #handleChange(event) {
    const { target } = event
    const { id, checked, type } = target

    if (type != 'checkbox') return

    data.forEach((item) => {
      if (item.id == id) {
        item.isChecked = checked
      }
    })

    this.render()
  }

  #handleclickDelBtn(event) {
    const { role, id } = event.target.dataset

    if (role == 'delete') {
      data = data.filter((item) => item.id != id)

      this.render()
    }
  }

  #handleRenderNeed() {
    this.render()
  }

  template({ id, todo_content, isChecked }) {
    const checkedAttr = isChecked ? 'checked' : ''

    const template = `
        <li class="d-flex p-2 border border-1 rounded-3 ${checkedAttr}">
      
          <div class="form-check form-check-lg d-flex flex-grow-1 align-items-center">
            <input class="form-check-input mt-0 me-2" ${checkedAttr} type="checkbox" id="${id}">
            <label class="form-check-label" for="${id}">${todo_content}</label>
          </div>
      
          <button type="button" data-role="edit" data-id="${id}" class="btn btn-sm btn-primary me-2">
            <svg class="pe-none" width="16" height="16"><use href="#pencil"/></svg>
          </button>
      
          <button type="button" data-role="delete" data-id="${id}" class="btn btn-sm btn-danger ms-auto">
            <svg class="pe-none" width="16" height="16"><use href="#trash"/></svg>
          </button>
      
        </li>
      `
    return template
  }

  toDoElements() {
    let result = ''

    data.forEach((todo) => {
      result = result + this.template(todo)
    })

    return result
  }

  render() {
    const todoElements = this.toDoElements()
    this.listElem.innerHTML = todoElements
  }
}

new ToDoList(listElem)
