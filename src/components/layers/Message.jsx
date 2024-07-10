import { Box, Button, Input, Text, Wrap, WrapItem, Flex, Spacer, Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';

const MessageList = ({ messages, onDeleteMessage }) => {
  return (
    <Wrap border={'1px solid #4671D5'} height={'50vh'} spacing="4" align="center"  w="100%"  maxW="600px" p="4" mt="4" bg="#f5f5f5" borderRadius="md" >
      {messages.map((message, index) => (
        <WrapItem key={index}  w="fit-content">
          
          <Box  h={'100%'} w={'50vh'} display={'grid'}  bg="white" borderRadius="md" p="2" shadow="md" maxW="70%" position="relative">
   
   <Box padding={'5px 0px'} >

   <Text left={'10px'} top={'-3px'} fontSize="sm" color="gray.500" position="absolute" bottom="2px" right="2px">
                  {message.author}
                </Text>
                {onDeleteMessage && (
                  <Button
                    variant="ghost"
                    colorScheme="red"
                    size="sm"
                    position="absolute"
                    top="-5px"
                    right="2px"
                    onClick={() => onDeleteMessage(index)}
                  >
                    Удалить
                  </Button>
                )}
 

   </Box>
          

          <Box padding={'10px'}>
          <Text   fontSize="md" fontWeight="medium">
              {message.content}
            </Text>

          </Box>
                
             
  

  
     
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
};

const MessageForm = ({ onMessageSubmit }) => {
  const [newMessage, setNewMessage] = useState('');
  const [author, setAuthor] = useState('');

    const [currentTime, setCurrentTime] = useState(null);
  


  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newMessage.trim() !== '' && author.trim() !== '') {
      onMessageSubmit({ content: newMessage, author: author });
      setNewMessage('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <Flex border={'1px solid #4671D5 '} gap={'5px'} alignItems="center" justifyContent="center" w="100%"  maxW="600px" p="4" mt="4" bg="#f5f5f5" borderRadius="md" >
        <Box w="100%" mr="2">
          <Input
            placeholder="Введите сообщение"
            value={newMessage}
            onChange={handleInputChange}
            size="lg"
            borderRadius="md"
            focusBorderColor="blue.500"
          />
        </Box>
        <Box w="100%" ml="2">
          <Input
            placeholder="Введите автора"
            value={author}
            onChange={handleAuthorChange}
            size="lg"
            borderRadius="md"
            focusBorderColor="blue.500"
          />
        </Box>
        <Spacer />
        
        <Button w={'35%'} type="submit" bgGradient="linear(to-r, blue.300, blue.600, blue.900)" _hover={{bgGradient:'linear(blue.200 0%, blue.200 25%, blue.400 50%)'}} borderRadius="md" px="6"  color="white">
          Отправить
        </Button>
      </Flex>
    </form>
  );
};

const Message = () => {
  const [messages, setMessages] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const avatars = document.querySelectorAll('.message-container .avatar');
      avatars.forEach(avatar => {
        const randomColor = Math.random() < 0.5 ? '#32CD32' : 'red';
        avatar.style.borderColor = randomColor;
      });
    }, 15000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Box bgImage={'/fon.png'} bgSize={'cover'} padding={'10px'} display={'flex'}  justifyContent={'center'} w={'100%'} h={'100vh'}>
          <Box boxShadow={'3px 1px 30px 20px rgba(0, 0, 0, 0.2)'} borderRadius={'10px'} border={'1px solid black'}  display={'grid'} padding={'10px 30px'}   bgSize={'cover'} bg={'  #ffffffd0'} w={'90%'} className="message-container">
     <Box justifyContent={'space-between'} display={'flex'}>
<Box display={'flex'} alignItems={'center'} >
<Text fontSize={'30px'}>Чат</Text>
<img width={'50px'} src="/messag.png" alt="" />
</Box>
    



     <Wrap>
  <WrapItem>
    <Avatar className="avatar" border={'2px solid #32CD32'} name='Serega' src='/serg.png' />
  </WrapItem>
  <WrapItem>
    <Avatar className="avatar" border={'2px solid red'} name='Z10' src='z10.jpg' />
  </WrapItem>
  <WrapItem>
    <Avatar className="avatar" border={'2px solid #32CD32'} name='Tipsi' src='trollust.jpg' />
  </WrapItem>
  <WrapItem>
    <Avatar className="avatar" border={'2px solid #32CD32'} name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  </WrapItem>
  <WrapItem>
    <Avatar className="avatar" border={'2px solid #32CD32'} name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
    
  </WrapItem>
  <WrapItem>
    <Avatar className="avatar"  border={'2px solid red'} name='Christian Nwamba' src='https://bit.ly/code-beast' />
  </WrapItem>
  <WrapItem>
    <Avatar className="avatar"  border={'2px solid red'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  </WrapItem>
</Wrap>
     </Box>

      <MessageList  messages={messages} onDeleteMessage={handleDeleteMessage} />
      <MessageForm   onMessageSubmit={handleNewMessage} />
    </Box>
    </Box>




  );

  
};




export default Message;