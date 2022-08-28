import Card from './Card';

function Board(props) {

  const maxCards = 12;
  const cardIndex = [...Array(maxCards).keys()];

  return (
    <div className="board">
      {[...Array(maxCards).keys()].map((key) => {
        const randIndex = Math.floor(Math.random() * cardIndex.length);
        return (
        <Card 
          index = {cardIndex.splice(randIndex,1)[0]}
          handleOnClick = {props.handleOnClick} 
        />
        )
      })}
    </div>
  );
}

export default Board;
