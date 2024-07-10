
import { 
  Box, 
  Button, 
  Container, 
  Drawer, 
  DrawerBody, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  Flex, 
  Heading, 
  Text, 
  useDisclosure, 

} from '@chakra-ui/react';
import React, {  } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { AspectRatio } from '@chakra-ui/react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Header = () => {

  const navs =[
    {
      name:'Home',
      path:'/'
    },
    {
      name:'Message',
      path:'https://food-without-a-cook.vercel.app/'
    },
    {
      name:'Recept',
      path:'/chat'
    },
    {
      name:'Plus',
      path:'/about'
    },


 
 
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');




  return (
  <Box padding={'10px 100px'}>
      <Box   border={'1px solid black'}  boxShadow={'0px 5px 10px 2px rgba(0, 0, 0, 0.2)'} w={'100%'} h={'14vh'} bg={' #ffffffd0'} padding={'10px 60px'} borderRadius={'50px'}>
        <Box  w={'170vh'} h={'12vh'}  color={'#fff'}   >
          <Container fontWeight={'700'}  fontSize={'20px'} maxW={'container.xl'}  top={0}>
            <Flex justify={'space-between'} align={'center'} h={'10vh'} > 
           
              <Box   display={'flex'} alignItems={'center'} gap={'0'} >
                <Heading color={'Black '} fontFamily={'cursive'} fontSize={'25px'}>Food </Heading>
                <img width={'100px'} src="/cuckoldTipsi.png" alt="" />
                <Heading   color={'Black'}  fontFamily={'cursive'} fontSize={'25px'}>Without A Cook </Heading>
              </Box>

             
              <Box gap={'10px'} display={'flex'}  justifyContent={'space-between'} alignItems={'center'} >
              {
                navs.map((c,i)=>(
                  <Text color={'Black'} p={5}  fontFamily={'cursive'}  _hover={{bg:'#4671D5'}}  borderRadius={'10px'} key={i}>
                    <Link my={2} to={c.path}>{c.name}</Link>
                  </Text>
                ))
              }
  <br/>
                <Button boxShadow={' 4px 4px 8px 0px rgba(0, 144, 255, 0.2)'}  fontSize={'20px'} display={'flex'} alignItems={'center'} padding={'15px'} gap={'5px'} w={'25%'} bg={'#4671D5'}  _hover={{bg:'#1240AB'}} onClick={onOpen}>
                <FaAlignJustify />
                </Button>
                <Drawer   placement={placement} onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay   />
                  <DrawerContent fontFamily={'cursive'} fontWeight={'700'} bgSize={'cover'} bg={' #ffffffd0'}> 
                    <DrawerHeader display={'flex'} alignItems={'center'} gap={'5px'} borderBottomWidth='1px'><FaAlignJustify /> </DrawerHeader>
                    <DrawerBody  >

                    <TableContainer>
    <Table bg={' #ffffffd0'}  variant='simple'>
      <TableCaption>Статистика за месяц </TableCaption>
      <Thead>
        <Tr>
          <Th>Популярные блюда</Th>
          <Th>Статистика </Th>
          <Th isNumeric>Лайков</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Плов</Td>
          <Td display={'flex'} gap={'5px'} ><img width={'20px'} src="https://img.icons8.com/?size=100&id=BejLa7thZg7D&format=png&color=40C057" alt="" />1.5M </Td>
          <Td isNumeric>3.5M👍 </Td>
        </Tr>
        <Tr>
          <Td>Суп</Td>
          <Td display={'flex'} gap={'5px'}><img width={'20px'} src="https://img.icons8.com/?size=100&id=SQXmuq2sNlJv&format=png&color=FA5252" alt="" />15K</Td>
          <Td isNumeric>1M👍 </Td>
        </Tr>
        <Tr>
          <Td>Пицца</Td>
          <Td display={'flex'} gap={'5px'}><img width={'20px'} src="https://img.icons8.com/?size=100&id=BejLa7thZg7D&format=png&color=40C057" alt="" />1.2M</Td>
          <Td isNumeric>947k👍 </Td>
        </Tr>
      </Tbody>
    
    </Table>
  </TableContainer>
<br />


        <br />
<AspectRatio ratio={16 / 9}>
  <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng' />
</AspectRatio>



                    </DrawerBody>
                    <Box display={'flex'} justifyContent={'center'}>
                    <iframe src="https://tgwidget.com/widget/btn/?id=666d53b5bddbf77e9b02258f" frameborder="0" scrolling="no" horizontalscrolling="no" verticalscrolling="no" width="250px" height="50px" async></iframe>

                    </Box>

                  </DrawerContent>
                  
                </Drawer>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  
  
  );
};

export default Header;