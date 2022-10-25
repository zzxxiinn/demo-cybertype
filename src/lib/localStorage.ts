import { useEffect } from "react";

export function getLocalStorage(
    key: string,
    defaultValue: string,
    validator: (value: string) => boolean
): string {
  if (typeof window == 'undefined') return defaultValue
  try {
    const value = localStorage.getItem(key)
    if (value === null) return defaultValue
    if (validator(value)) return value
    setLocalStorage(key, defaultValue)

    return defaultValue
  } catch (error) {
    return defaultValue
  }
}


export function setLocalStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch (error) {
    console.error(error)
  }
}
