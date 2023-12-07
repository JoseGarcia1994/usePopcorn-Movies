import { useState, useEffect } from "react";
export function useLocalStorageState(initialState, key) {

  // value = watched 
  // setValue = setWatched
  // Change name so we can re use this hook
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}