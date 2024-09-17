
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkelton from './GameCardSkelton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGeners';


interface Props{
  selectedGenre:Genre | null
}

const GameGrid = ({selectedGenre}:Props) => {
    
    const{Data,error,isLoading} = useGame(selectedGenre);
    const skeletons = [1,2,3,4,5,6];

  return (
    <div>
        {error && <Text>{error}</Text>}
        
        <SimpleGrid  
        columns={{sm:1 , md:2 , lg:3 }} 
        spacing={3} >

        {isLoading && skeletons.map(skeleton=>(
          <GameCardContainer key={skeleton}>
            <GameCardSkelton  />
          </GameCardContainer>
          
          ))}
            {Data.map(game=>(
                <GameCardContainer key={game.id}>
                  <GameCard  game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid