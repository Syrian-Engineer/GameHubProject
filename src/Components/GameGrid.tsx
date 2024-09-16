
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';





const GameGrid = () => {
    
    const{games,error} = useGame();

  return (
    <div>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1 , md:2 , lg:3 }} spacing={10} >
            {games.map(game=>(
                <GameCard key={game.id} game={game} />
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid