import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectSortOrder:(sortOrder:string)=>void,
    sortOrder:string    
}


const SortSelector = ({onSelectSortOrder,sortOrder}:Props) => {
    const sortorder = [
        {value:'' , label:'Revelance'},
        {value:'-added' , label:'Data added'},
        {value:'-name' , label:'Name'},
        {value:'-released' , label:'Release Data'},
        {value:'-metacritic' , label:'Popularity'},
        {value:'-rating' , label:'Average rating'},
    ]

    const currentSortOrder = sortorder.find(order=>order.value === sortOrder)
  return (
    <Menu>
        <MenuButton 
            as={Button} rightIcon={<BsChevronDown />}>
                Orderd By :{currentSortOrder?.label || 'Reveleance'}
        </MenuButton>
        <MenuList>
           {sortorder.map(order=>
            <MenuItem
                onClick={()=> onSelectSortOrder(order.value)} 
                key={order.value} value={order.value}>
                    {order.label}
            </MenuItem>
           )}
        </MenuList>
    </Menu>
  )
}

export default SortSelector