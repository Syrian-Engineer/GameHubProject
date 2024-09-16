import { Platform } from '../hooks/useGame'
import { HStack, Icon } from '@chakra-ui/react'
import { FaWindows,FaPlaystation,FaApple,FaXbox,FaLinux,FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props{
    platforms:Platform[]
}

const PlatformIconsList = ({platforms}:Props) => {
    const mapIcon:{[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid
    }
  return (
    <HStack marginY={2}>
        {platforms.map((platform)=>(
            <Icon color='gray.500' as={mapIcon[platform.slug]}>{platform.name} </Icon>
            ))}
    </HStack>
  )
}

export default PlatformIconsList