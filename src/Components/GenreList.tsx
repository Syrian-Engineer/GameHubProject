import { HStack, Image, Spinner, Text } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";
import getCroppedImage from "../hooks/image-url";
import { List , ListItem } from "@chakra-ui/react";

const GenreList = () => {
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
                            <Text>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                </List>
        </li>)}
        </ul>
    </>
  )
}

export default GenreList