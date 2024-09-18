import {  Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGeners'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './hooks/useGame'
import SortSelector from './Components/SortSelector'


export interface GameQuery{
  genre:Genre | null,
  platform:Platform | null,
  sortOrder:string
}


const App = () => {
  const[gameQuery , setGameQuery] =useState({} as GameQuery)

  return (
    <>
    <Grid templateAreas={{
      base :`"nav" "main"`,
      lg :`"nav nav" "aside main"` // min width 1024 px
    }}
    templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}
    >
      {/* NavBar */}
      <GridItem area={'nav'} >
        <NavBar />
      </GridItem>

      {/* Aside Panel */}
      <Show above='lg' >
        <GridItem area={'aside'} paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genre})} />
        </GridItem>
      </Show>

    {/* MainBody GameCard */}
      <GridItem area={'main'}>
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery , platform})} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})} />
        </HStack>
        <GameGrid gameQery={gameQuery} />
      </GridItem>
    </Grid>
    </>
  )
}

export default App