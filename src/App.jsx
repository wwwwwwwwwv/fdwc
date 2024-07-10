
import React, {   } from 'react'
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './components/Chat';
import About from './components/layers/About';


const App = () => {
 


  return (
  <Box fontFamily={'cursive'}  >


<>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chat'element={<Chat/>}/>
      <Route path='/about'element={<About/>}/>


      

    </Routes>
    
    </>
      
    </Box>
  )
}

export default App


