/* eslint-disable */
class ToDoStorage {
  data = JSON.parse(localStorage.getItem('appData')) || []

  constructor() {
    this.#init()
  }

  #init() {
    this.handleBeforeUnload = this.#handleBeforeUnload.bind(this)
    this.handleAppReady = this.#handleAppReady.bind(this)

    window.addEventListener('beforeunload', this.handleBeforeUnload)
    window.addEventListener('app:ready', this.handleAppReady)
  }

  #handleBeforeUnload() {
    localStorage.setItem('appData', JSON.stringify(this.data))
  }

  #handleAppReady() {
    if (this.data.length) window.dispatchEvent(new Event('render:need'))
  }
}

export { ToDoStorage }
