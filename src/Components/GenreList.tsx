import { Button, HStack, Image, Spinner } from "@chakra-ui/react";
import useGeners, { Genre } from "../hooks/useGeners";
import getCroppedImage from "../hooks/image-url";
import { List , ListItem } from "@chakra-ui/react";

interface Props{
    onSelectedGenre:(genre:Genre)=> void
}

const GenreList = ({onSelectedGenre}:Props) => {
   const {Data,isLoading,error} = useGeners()

   if (error)
    return null

    if  (isLoading){
        return <Spinner />
    }
  return (
   <>

        <ul>
        {Data.map(genre=>
        <li key={genre.id}>
                <List>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImage(genre.image_background)} />
                            <Button onClick={() => onSelectedGenre(genre)} variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                </List>
        </li>)}
        </ul>
    </>
  )
}

export default GenreList