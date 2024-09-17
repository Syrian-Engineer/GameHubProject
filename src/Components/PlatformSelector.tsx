import { Button, Menu, MenuButton, MenuItem,MenuList } from "@chakra-ui/react"
import {BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"



const PlatformSelector = () => {
    const{Data,error}=usePlatform()
    if(error)return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >PlatForm</MenuButton>
        <MenuList>
            {Data.map(platform=><MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector