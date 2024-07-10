import { Box, Text,  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from '@chakra-ui/react'
import React from 'react'

const Evry = () => {
  return (
    <Box w={'100%'} h={'100%'}  display={'flex'} justifyContent={'center'}>
<Box border={'1px solid black'} borderRadius={'30px'} bg={'#ffffffd0'} h={'60vh'} w={'80%'} display={'flex'} justifyContent={'center'} >
         <Box   borderRadius={'50px'} padding={'10px 20px'} bg={' '} w={'100%'} h={'30vh'}>
        <Text color={'black'} fontWeight={'900'} fontSize={'40px'} textAlign={'center'}>
        Часто Задаваемые Вопросы
        </Text>

        <Accordion fontSize={'25px'} display={'grid'}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize={'20px'} as='span' flex='1' textAlign='left'>
        Как добавить рецепт ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={1}>
    Впишите название рецепта. Оно должно быть понятным и отражать тип и состав вашего блюда.
Укажите ингредиенты, их количество и единицы измерения.
елайте инструкцию пошаговой, отделяя каждый шаг двойным нажатием «Enter»
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize={'20px'} as='span' flex='1' textAlign='left'>
        Как фотографировать еду ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Чтобы рецепт привлекал внимание и пользовался популярностью, важно подойти к его оформлению со всей ответственностью.
    
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize={'20px'} as='span' flex='1' textAlign='left'>
        Как найти рецепт?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Вы можете использовать поле поиска на странице"Recept" для выполнения поиска по ключевому слову или ингредиенту и там будут то блюдо которое вам надо.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Box>
    
    </Box>
    </Box>
    
  )
}

export default Evry
