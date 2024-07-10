  import { Box, Text } from '@chakra-ui/react'
  import React from 'react'
  

  const Contact = () => {
    
    return (
      <Box bgImage={'pizzz.png'}  display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'50px'} w={'100%'} h={'33vh'}  bg={' #ffffffd0'} > 
       <Box display={'grid'} gap={'5px'}>
       <Text  fontWeight={'700'} fontSize={'20px'} padding={'15px 0px'}>Связаться </Text> 

       <Box justifyContent={'center'} h={'55px'} w={'167px'} bg={'blue.500'} fontFamily={'cursive'} display={'flex'} alignItems={'center'}>
          <iframe  src="https://tgwidget.com/widget/count/?id=666d53b5bddbf77e9b02258f" frameborder="0" scrolling="no" horizontalscrolling="no" verticalscrolling="no"  width="160px" height="50px" async></iframe>
        </Box>



    <Box  bgGradient='linear(to-l, #7928CA, #FF0080)' w={'167px'} h={'55px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
     <Box  padding={'5px'} gap={'7px'}  bg={'#fff'} h={'50px'} w={'160px'} display={'flex'} alignItems={'center'}>
              <img   width={'35px'} src="https://www.lordflex.com/wp-content/uploads/2022/09/logo-instagram-1200x1199.png" alt="" />
            <Box fontSize={'15px'} >
            <a  href="https://www.instagram.com/csectionvenus/"> Instagram</a>
            <Text fontSize={'10px'}  color='gray'>107 подписчиков</Text>
            </Box>
          
            </Box>  
    </Box>
       </Box>

   

        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} bgGradient='linear(to-l, #000000, #808080)' w={'166px'} h={'56px'}>
      
      <Box alignItems={'center'} display={'flex'}  w={'160px'} h={'52px'} bg={'#fff'}>
      <img   width={'35px'} src="https://portfolio-sigma-ashen-71.vercel.app/alsls.png" alt="" />

          <a href="https://portfolio-sigma-ashen-71.vercel.app/">Portfolio</a>
        </Box>

      </Box>
  
      
       </Box>
    
 
    )
  }

  export default Contact
