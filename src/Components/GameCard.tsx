import { Game } from '../hooks/useGame'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CirticScore from './CirticScore'
import getCroppedImage from '../services/image-url';
import Emoji from './Emoji';

interface Props{
    game:Game,
}


const GameCard = ({game}:Props) => {
  return (
    <>
        <Card>
            <Image src={ getCroppedImage(game.background_image) }></Image>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={2}>
                    <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)} />
                    <CirticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top} /></Heading>
            </CardBody>
        </Card>
    </>
  )
}

export default GameCard