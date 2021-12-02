import { data } from './toDoForm'

class ToDoSaver {
  constructor() {
    this.#init()
  }

  #init() {
    this.handleBeforeUnload = this.#handleBeforeUnload.bind(this)
    this.handleAfterReload = this.#handleAfterReload.bind(this)

    window.addEventListener('beforeunload', this.handleBeforeUnload)
    window.addEventListener('DOMContentLoaded', this.handleAfterReload)
  }

  #handleBeforeUnload() {
    const json = JSON.stringify(data)
    localStorage.setItem('data', json)
  }

  #handleAfterReload() {
    const dataStorage = localStorage.getItem('data')

    if (dataStorage) {
      data = JSON.parse(dataStorage)

      const eventRenderAfterReload = new Event('render:needAfterReload')
      window.dispatchEvent(eventRenderAfterReload)
    }
  }
}

new ToDoSaver()
