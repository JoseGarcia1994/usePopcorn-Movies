import { useRef, useEffect } from "react";

const Search = ({ query, setQuery }) => {

  const inputEl = useRef(null);

  useEffect(() => {

    const clean = (e) => {
      if (document.activeElement === inputEl.current)
      return

      if (e.code === 'Enter') {
        inputEl.current.focus()
        setQuery('')
      }
    };

    document.addEventListener('keydown', clean);
    
    return () => document.addEventListener('keydown', clean);
  }, [setQuery])
  
  
  return (
    <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
  );
};

export default Search;