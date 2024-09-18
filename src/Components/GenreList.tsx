import { Button, Heading, HStack, Image, Spinner } from "@chakra-ui/react";
import useGeners, { Genre } from "../hooks/useGeners";
import getCroppedImage from "../services/image-url";
import { List , ListItem } from "@chakra-ui/react";

interface Props{
    onSelectedGenre:(genre:Genre)=> void,
    selectedGenre:Genre|null
}

const GenreList = ({selectedGenre,onSelectedGenre}:Props) => {
   const {Data,isLoading,error} = useGeners()

   if (error)
    return null

    if  (isLoading){
        return <Spinner />
    }
  return (
   <>
        <Heading fontSize='2xl' marginY={2}>Genres</Heading>
        <ul>
        {Data.map(genre=>
        <li key={genre.id}>
                <List>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image 
                            boxSize='32px' borderRadius={8} objectFit='cover'
                            src={getCroppedImage(genre.image_background)} />
                            <Button 
                            whiteSpace='normal' textAlign='left' 
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} 
                            onClick={() => onSelectedGenre(genre)} variant='link'>
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                </List>
        </li>)}
        </ul>
    </>
  )
}

export default GenreList