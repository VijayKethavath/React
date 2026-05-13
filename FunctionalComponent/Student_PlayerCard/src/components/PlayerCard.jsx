const Player = (p) => {
  const { name, game, level } = p;
  return (
    <div>
      <h3>Player Name: {name}</h3>
      <h3>Game Name: {game}</h3>
      <h3>Level: {level}</h3>
    </div>
  );
};

export default Player;
