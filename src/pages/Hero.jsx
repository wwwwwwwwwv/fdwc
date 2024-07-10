import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Box >
   <br />
   <br />

      <Box  w={'100%'} h={'30%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        
        <Box padding={'10px 10px '} w={'50%'} textAlign={'center'}  display={'grid'}>
        <Text border={'1px solid black'} p={'10px'} borderRadius={'50px'} bg={' #ffffffd0'} color={'black'} fontWeight={'900'} fontSize={'60px'} >
                    Волшебные Блюда

            <Text fontSize={'20px'} >
              Открой для себя мир вкуса и удивления с нашими необычными рецептами, оживленными анимациями и плавными вкусовыми сочетаниями.
            </Text>

                  </Text>
        

      
          
        </Box>
       
       
      </Box>
    </Box>
  )
}

export default Hero
