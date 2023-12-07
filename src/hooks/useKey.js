import { useEffect } from "react";

export function useKey(key, action) {

  useEffect(() => {
    const clean = (e) => {
      if(e.code.toLowerCase() === key.toLowerCase()) {
        action()
      }
    }
    document.addEventListener('keydown', clean);

    return () => {
      document.removeEventListener('keydown', clean)
    }
  }, [key, action])

}