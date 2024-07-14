import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header'


const Main = ({children}) => {
  return (
    <Box minW={'100%'} h={'300vh'}  bgImage={'/pizzz.png'} w={'100%'} bgAttachment={'fixed'}   bgSize={'cover'}    zIndex={'0'} >
      <Header/>
      <Box  mt={'10vh'}> 
        {children}
        
      </Box>

    </Box >
  )
}

export default Main


