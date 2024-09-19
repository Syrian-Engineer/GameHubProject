
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkelton from './GameCardSkelton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';


interface Props{
  gameQery:GameQuery
}

const GameGrid = ({gameQery}:Props) => {
    
    const{Data,error,isLoading} = useGame(gameQery);
    const skeletons = [1,2,3,4,5,6];

    if(error) return <Text>{error}</Text>

  return (       
        <SimpleGrid  
        columns={{sm:1 , md:2 , lg:3 }} 
        spacing={5} >

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
  )
}

export default GameGrid