class ToDoSaver {
  constructor(data) {
    this.data = data
    this.#init()
  }

  #init() {
    this.handleBeforeUnload = this.#handleBeforeUnload.bind(this)
    this.handleAfterReload = this.#handleAfterReload.bind(this)

    window.addEventListener('beforeunload', this.handleBeforeUnload)
    window.addEventListener('DOMContentLoaded', this.handleAfterReload)
  }

  #handleBeforeUnload() {
    const json = JSON.stringify(this.data)
    localStorage.setItem('this.data', json)
  }

  #handleAfterReload() {
    const dataStorage = localStorage.getItem('this.data')

    if (dataStorage) {
      this.data = JSON.parse(dataStorage)

      const eventRenderAfterReload = new Event('render:needAfterReload')
      window.dispatchEvent(eventRenderAfterReload)
    }
  }
}

export { ToDoSaver }
