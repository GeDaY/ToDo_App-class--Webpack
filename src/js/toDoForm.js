export let data = []

const formElem = document.querySelector('#form')

class ToDoFormCreate {
  constructor(formElement) {
    this.formElement = formElement
    this.#init()
  }

  #init() {
    this.handleSubmit = this.#handleSubmit.bind(this)

    this.formElement.addEventListener('submit', this.handleSubmit)
  }

  #handleSubmit(event) {
    event.preventDefault()

    const todo = {
      id: new Date().getTime(),
      isCheked: false,
    }

    const formData = new FormData(formElem)
    for (let [name, value] of formData.entries()) {
      todo[name] = value
    }

    data.push(todo)
    formElem.reset()

    const eventRender = new Event('render:need')
    window.dispatchEvent(eventRender)
  }
}

new ToDoFormCreate(formElem)
