export class Storage {
  constructor () {
    this.storage = window.localStorage
  }

  set (key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  get (key) {
    const value = this.storage.getItem(key)
    if (value && value !== 'undefined' && value !== 'null') {
      try {
        return JSON.parse(value)
      } catch (error) {
        return value
      }
    } else {
      return null
    }
  }

  remove (key) {
    this.storage.removeItem(key)
  }

  clear () {
    this.storage.clear()
  }
}

const storage = new Storage()

export function createStorage () {
  return new Storage()
}

export default storage
