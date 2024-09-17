
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkelton from './GameCardSkelton';





const GameGrid = () => {
    
    const{games,error,isLoading} = useGame();
    const skeletons = [1,2,3,4,5,6];

  return (
    <div>
        {error && <Text>{error}</Text>}
        
        <SimpleGrid columns={{sm:1 , md:2 , lg:3 }} spacing={10} >
        {isLoading && skeletons.map(skeleton=><GameCardSkelton key={skeleton} />)}
            {games.map(game=>(
                <GameCard key={game.id} game={game} />
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid