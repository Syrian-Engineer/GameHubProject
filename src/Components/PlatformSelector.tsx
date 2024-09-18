import { Button, Menu, MenuButton, MenuItem,MenuList } from "@chakra-ui/react"
import {BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import { Platform } from "../hooks/useGame"

interface Props{
  onSelectedPlatform:(platform:Platform)=>void,
  selectedPlatform?:Platform | null
}

const PlatformSelector = ({onSelectedPlatform,selectedPlatform}:Props) => {
    const{Data,error}=usePlatform()
    if(error)return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >
        {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
            {Data.map(platform=>(
            <MenuItem onClick={()=>onSelectedPlatform(platform)}  key={platform.id}>{platform.name}</MenuItem>
            ))}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector