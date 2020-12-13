// @flow
import { useState } from "react"

// eslint-disable-next-line flowtype/no-weak-types
const packingLocalStorage = (key, initialValue) => {
  // get value from local storage by key
  const item = window.localStorage.getItem(key)

  const [storedValue, setStoredValue] = useState(item ? JSON.parse(item) : initialValue)

  // eslint-disable-next-line flowtype/no-weak-types
  const setValue = (value) => {
    // save state
    setStoredValue(value)
    // save to local storage
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  const removeValue = () => {
    window.localStorage.removeItem(key)
  }

  return [storedValue, setValue, removeValue]
}

export default packingLocalStorage
