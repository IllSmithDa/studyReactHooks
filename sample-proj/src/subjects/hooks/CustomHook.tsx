import { useState, useEffect } from 'react';

export function useCustomHook():string[] {
  const [namesList, setNamesList] = useState([]);
  
  useEffect(() => {
    fetch('./data/names.json')
    .then(res => res.json())
    .then((data) => {
       console.log(data);
       setNamesList(data)
     })
  }, []);

  return namesList;
}