import {  Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'

const App = () => {
  return (
    <>
    <Grid templateAreas={{
      base :`"nav" "main"`,
      lg :`"nav nav" "aside main"` // 1024 px
    }}>
      <GridItem area={'nav'} >
        <NavBar />
      </GridItem>

      <Show above='lg' >
        <GridItem area={'aside'}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
    </>
  )
}

export default App