import {useContext} from 'react'
import {Context} from './Context/ContextProvider.jsx'
import Player from './Components/Player.jsx'

export default function App() {

  const {players, currentPage, setCurrentPage} = useContext(Context);

  const nextPageHandler = () => {
    if (players.meta) {
      if (players.meta.total_pages > currentPage) {
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
      }
    }
  }

  const prevPageHandler = () => {
    if (players.meta) {
      if (currentPage > 1) {
        setCurrentPage(prevCurrentPage => prevCurrentPage - 1)
      }
    }
  }

  console.log(players)

  return (
    <div className="container mx-auto min-h-screen bg-slate-500 p-4 ">
      <div className="text-center text-slate-100 mb-4">
        <button
          className="bg-stone-900 px-2 py-1 rounded-s-md hover:bg-green-700 duration-150 disabled"
          onClick={prevPageHandler}
        >Prev
        </button>
        <span className="bg-slate-200 px-2 py-1 text-stone-900">{currentPage}</span>
        <button className="bg-stone-900 px-2 py-1 rounded-e-md hover:bg-green-700 duration-150"
                onClick={nextPageHandler}>Next
        </button>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        {players.data && players.data.map(player => (
          <Player key={player.id} player={player}/>
        ))}
      </div>
    </div>
  );
}