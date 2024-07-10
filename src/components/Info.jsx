import React from 'react'
import { Box, Container, Img,  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Accordion,Text } from '@chakra-ui/react'

const Info = () => {
  return (

   
     
      
 
    
     
<Box  display={'flex'} gap={'100px'}>
     {/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// */}
       
     <Box bg={'#ffffffd0'} borderRadius={'15px'} padding={'10px'} boxShadow={'0px 5px 35px 10px rgba(0, 0, 0, 0.2)'}  textAlign={'center'} border={'1px solid black'}  bgSize={'cover'} w={'50vh'} h={'50vh'}  >
          <Container display={'grid'} justifyContent={'center'}>
          <Img w={'100px'} h={'75px'} src="/work.png" alt="" />
          </Container>

          <Box textShadow={'yellow 6px 2px 1px'} fontSize={'20px '} fontWeight={'700'} padding={'30px'} display={'flex'} justifyContent={'center'} >
            <h1 >На сайт ежедневно будут добовляться новые функции и многое другое.</h1>
          </Box>
        
        </Box>

     {/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// */}

        <Box bg={'#ffffffd0'} borderRadius={'15px'} boxShadow={'0px 5px 35px 10px rgba(0, 0, 0, 0.2)'} padding={'10px'} border={'1px solid black'} textAlign={'center'} bgSize={'cover'} w={'50vh'} h={'50vh'}  >
          <Container display={'grid'} justifyContent={'center'}>
           <Img w={'100px'} h={'80px'} src="/idea.png" alt="" />
          </Container>
            <Box  textShadow={'blue 5px 2px 5px'} fontSize={'20px '} fontWeight={'700'} padding={'30px'} display={'flex'} justifyContent={'center'}>
              <h1> Оставляйте свои отзовы делитесь идеями,это поможет продвинуться сайту.</h1>
            </Box>
        </Box>

     {/* //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// */}

        <Box bg={'#ffffffd0'} borderRadius={'15px'}  boxShadow={'0px 5px 35px 10px rgba(0, 0, 0, 0.2)'} padding={'10px'} border={'1px solid black'} textAlign={'center'} bgSize={'cover'} w={'50vh'} h={'50vh'}  >
         <Container display={'grid'} justifyContent={'center'}>
         <Img w={'100px'} h={'79px'} src="/natural.png" alt="" />

         </Container>
          <Box  textShadow={'green 5px 2px 5px'} fontSize={'19px '} fontWeight={'700'} padding={'30px'} display={'flex'} justifyContent={'center'} >
            <h1> Только полезные блюда.  питание, обеспечивающее рост, нормальное развитие и жизнедеятельность человека.</h1>
          </Box>
          
        </Box>

</Box>




     




  )
}

export default Info
