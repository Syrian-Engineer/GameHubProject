import { Game } from '../hooks/useGame'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'

interface Props{
    game:Game,
}


const GameCard = ({game}:Props) => {
  return (
    <>
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)} />
            </CardBody>
        </Card>
    </>
  )
}

export default GameCard