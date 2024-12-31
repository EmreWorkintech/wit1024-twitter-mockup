import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  function updataStorage(value) {
    //localStorage'ı güncelleyecek.
    //state'i güncelleyecek.
    setData(value);
    localStorage.setItem(key, JSON.stringify(value));
  }
  return [data, updataStorage];
}
