import { Game } from '../hooks/useGame'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CirticScore from './CirticScore'
import getCroppedImage from '../services/image-url';

interface Props{
    game:Game,
}


const GameCard = ({game}:Props) => {
  return (
    <>
        <Card>
            <Image src={ getCroppedImage(game.background_image) }></Image>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)} />
                    <CirticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    </>
  )
}

export default GameCard