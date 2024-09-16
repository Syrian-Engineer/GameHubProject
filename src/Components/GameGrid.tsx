
import { Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';




const GameGrid = () => {
    
    const{games,error} = useGame();

  return (
    <div>
        {error && <Text>{error}</Text>}
        <ul>
            {games.map(game=><li key={game.id}>{game.name}</li>)}
        </ul>
    </div>
  )
}

export default GameGrid