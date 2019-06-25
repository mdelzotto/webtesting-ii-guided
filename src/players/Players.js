import React from "react";

function Players(props) {
  const {  players = [] } = props;
  if ( !players ||  !players.length > 0) {
    return <h1>No Players available</h1>;
  }
  return (
    <div>
      <h3>Player List</h3>
      {players.map(player => (
        <div data-testid="player-name" key={player.id}>{player.name}</div>
      ))}
    </div>
  );
}

export default Players;
