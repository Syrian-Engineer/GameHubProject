import {  Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'

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

      <Show above='lg'>
        <GridItem area={'aside'}>
          Aside
        </GridItem>
      </Show>

      <GridItem area={'main'}>
        Main
      </GridItem>
    </Grid>
    </>
  )
}

export default App