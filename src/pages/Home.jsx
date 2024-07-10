import React from 'react'
import Hero from './Hero'
import Header from '../components/Header'
import { Box, Text } from '@chakra-ui/react'
import Info from '../components/Info'
import Contact from '../components/layers/Contact'
import Evry from '../components/layers/Evry'
import Main from '../components/layers/Main'


const Home = () => {
  return (
    <Main>
 <Box    fontFamily={'cursive'} h={'100%'}>
    <br />
    <br />
        <Hero/>
        
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<Evry/>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<Box display={'flex'} w={'100%'} justifyContent={'center'}>
<Info/> 

</Box>
<br />
<br />
<br />


<Contact/>


      </Box>
    </Main>
   
  )
}

export default Home
