import {createContext, useEffect, useState} from 'react';

export const Context = createContext(null);

export default function ContextProvider({children}) {

  const [players, setPlayers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/players/?page=${currentPage}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(response => setPlayers(response))
      .catch(error => console.log(error))
  }, [currentPage])

  const data = {
    players,
    currentPage,
    setCurrentPage
  }

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
}