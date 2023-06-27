const Player = (props) => {

  const {player} = props;

  return (

    <>
      {player &&
        <div className="text-xl inline-block bg-slate-200 p-3">
          <h1 className="">Player : {player.first_name + " " + player.last_name}</h1>
          <h1>Position : {player.position}</h1>
          <h2 className="">Team : {player.team.full_name} ({player.team.abbreviation})</h2>
          <h2>Team City : {player.team.city}</h2>
        </div>
      }
    </>
  );
}

export default Player;