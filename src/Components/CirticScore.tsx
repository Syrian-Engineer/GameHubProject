import { Badge } from '@chakra-ui/react'


interface Props{
    score:number,
}

const CirticScore = ({score}:Props) => {
    const color = score>=75?'green':score<75 && score>60?'yellow':'' 
  return (
    <Badge borderRadius='10px' colorScheme={color} fontSize='14px' paddingX={2} >{score}</Badge>
  )
}

export default CirticScore