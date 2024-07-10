import {
  Box,
  Container,
  Heading,
  Input,
  Checkbox,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Stack,
  SimpleGrid,
  GridItem,
  Flex,

  Spacer,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Main from './layers/Main';



const recipes = [

  
  {
    name: 'Пицца',
    ingredients: ['мука ', 'томатный соус ', 'сыр ', 'ветчина '],
    imageUrl: '/public/пицца.jpg',
    cookingTime: '30 минут',
    description: 'Классическая пицца с томатным соусом, сыром и ветчиной.',
    reviews: [
      { author: 'Иван:', text: 'Очень вкусно! Быстро и просто приготовить.' },
      { author: 'Мария:', text: 'Пицца получилась отличная, рекомендую.' },
    ],
    mealType:'Ужин',
  },
  {
    name: 'Салат Цезарь',
    ingredients: ['салат', 'курица', 'сыр', 'соус Цезарь'],
    imageUrl:
      'https://bogatyr.club/uploads/posts/2023-03/1677742350_bogatyr-club-p-tsezar-kurinii-foni-oboi-18.jpg',
    cookingTime: '15 минут',
    description: 'Классический салат Цезарь с сочным куриным филе и пикантным соусом.',
    reviews: [
      { author: 'Петр:', text: 'Салат просто объедение! Свежий и вкусный.' },
      { author: 'Ольга:', text: 'Легкий и сытный, отлично подходит для обеда.' },
    ],
    mealType:'Ужин',
  },
  
{
  name: 'Плов',
  ingredients: ['Баранина 300', 'Капуста белокочанная300 гр', 'Рис0.8 стак.', 'Морковь 0,8шт', 'Лук 0,8 шт ', 'Яйца 0,8шт',"Пшеничная мука4.5 стол.л.","Сметана 4,5 стол,л","Томатная паста 4.5стол.л","Специи-по вкусу" ],
  imageUrl:
    'https://avatars.mds.yandex.net/get-entity_search/1634327/725014013/S600xU_2x',
  cookingTime: '60 минут',
  description: 'Сочные, ароматные, вкуснейшие, из обычных продуктов!',
  reviews: [
    
    { author: 'Алигатор9174:', text: 'Бомба!' },
    { author: 'ЗАйнидин911:', text: 'Доки Доки?...' },
  ],
  mealType: 'Обед ', 
},

  {
    name: 'Омлет',
    ingredients: ['яйца', 'молоко', 'соль', 'перец'],
    imageUrl:
      'https://restoran-goldenmileclub.ru/assets/components/phpthumbof/cache/IMG_0756.0823d7e08c7863522c4b3643c0d0230f.jpg',
    cookingTime: '10 минут',
    description: 'Классический Омлет.',
    reviews: [
      { author: 'Егор:', text: 'Круто' },
      { author: 'Серега:', text: 'Всю кухню сжог.' },
    ],
    mealType:'Завтрак ',
  },
  {
    name: 'Суп',
    ingredients: ['Картофель', 'Мясо', 'соль', 'Морковь', 'Лук'],
    imageUrl:
      'https://avatars.mds.yandex.net/i?id=7fee101f1352ba87651f2e3ec32e72c8ce685ae3-11506583-images-thumbs&n=13',
    cookingTime: '25 минут',
    description: 'Суп.',
    reviews: [
      { author: 'Крипер2007228:', text: 'Вау!' },
      { author: 'ЗАйнидин:', text: 'Зачем так вкусно?...' },
    ],
    mealType:'Обед',
  },
  {
    name: 'Запеканка из картофеля',
    ingredients: [
      'Картофель -700 гр.',
      'Яйцо -1 шт.',
      'Соль -1 чл. (неполная)',
      'Сливочное масло -30-50 гр.',
      'Молоко -по вкусу',
      'Луковица -1 шт.',
      'Фарш -500 гр.',
      'Черный перец – по вкусу',
      'Сладкая паприка -1/2 ч.л.',
      'Сушенный чеснок -1/2 ч.л.',
      'Мука -1 ст.л.',
      'Сыр -100 гр.',
      'Молоко -300 мл.',
    ],
    imageUrl:
      'https://main-cdn.sbermegamarket.ru/hlr-system/897/657/174/111/623/40/100045251402b0.jpg',
    cookingTime: '1 час',
    description: 'Запиканка из картофеля.',
    reviews: [
      { author: 'Вован:', text: 'Спасибо!' },
      { author: 'Серега:', text: 'У бабушки вкуснее.' },
    ],
    mealType:'Ужин',
  },
  {
    name: 'Ленивые Голубцы',
    ingredients: ['Фарш Мясной 450гр', 'Капуста белокочанная300 гр', 'Рис0.8 стак.', 'Морковь 0,8шт', 'Лук 0,8 шт ', 'Яйца 0,8шт',"Пшеничная мука4.5 стол.л.","Сметана 4,5 стол,л","Томатная паста 4.5стол.л","Специи-по вкусу" ],
    imageUrl:
      'https://static.1000.menu/res/640/img/content-v2/c8/45/22379/lenivye-golubcy-s-risom-kapustoi-i-farshem-v-kastrule_1671259872_14_max.jpg',
    cookingTime: '45 минут',
    description: 'Сочные, ароматные, вкуснейшие, из обычных продуктов!',
    reviews: [
      
      { author: 'Алигатор9174:', text: 'Бомба!' },
      { author: 'ЗАйнидин911:', text: 'Доки Доки?...' },
    ],
    mealType:'Обед',
  },
  {
    name: 'Жареная Морковь с луком на сковороде',
    ingredients: ['Морковь 500гр', 'Лук репчатый 1 шт', 'Чеснок 1 зубч', 'Томатная паста 1 стол,л', 'Соль 0,5 чайн,л ',"Специи-по вкусу" ],
    imageUrl:
      'https://static.1000.menu/res/640/img/content-v2/68/bf/10711/zharenaya-morkov-s-lukom_1575625187_8_max.jpg',
    cookingTime: '30 минут',
    description: 'Сочные, ароматные, вкуснейшие, из обычных продуктов!',
    reviews: [
      
      { author: 'ййййй:', text: 'класс!' },
      { author: 'Alex:', text: 'good' },
      { author: 'Диназавар-911:', text: 'Спасибо!' },
    ],
    mealType:'Обед',
  },
  {
    name: 'Спагетти из кабачков',
    ingredients: ['Молодые кабачки (два средних или один крупный): 400 гр', 'Помидоры (два небольших) : 200 гр',"Чеснок : 2зубч", "Растительное масло : 3 стол.л ","Сахар : 1 чайн.л"],
    imageUrl:
      'https://static.1000.menu/res/640/img/content-v2/28/9b/24337/spagetti-iz-kabachkov1_1720519890_6_449vb9r_max.jpg',
    cookingTime: '20 минут',
    description: 'Еще один способ утилизации урожая овощей - вкуснотища!',
    reviews: [
      
      { author: 'Alex:', text: 'Wow' },
      { author: 'Арт:', text: 'Вкусно советую!' },
      { author: 'Диназавар-911:', text: 'Спасибо!' },
    ],
    mealType:'Ужин',
  },
];

const Chat = () => {

 

  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [availableIngredients, setAvailableIngredients] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setAvailableIngredients([]);
    onOpen();
  };

  const handleIngredientChange = (ingredient, checked) => {
    setAvailableIngredients((prevIngredients) => {
      if (checked) {
        return [...prevIngredients, ingredient];
      } else {
        return prevIngredients.filter((item) => item !== ingredient);
      }
    });
  };





  const filteredRecipes = recipes.filter((recipe) => {
    if (searchTerm && !recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }

    if (availableIngredients.length > 0 && !recipe.ingredients.every((ingredient) => availableIngredients.includes(ingredient))) {
      return false;
    }

   

    return true;
  });

  return (

    <Main>
   <Box      display={'flex'} alignItems={'center'} justifyContent={'center'}  w={'100%'} >
      <Container  boxShadow={'0px 5px 35px 10px rgba(0, 0, 0, 0.2)'}border={'1px solid black'} bgSize={'cover'} p={5} borderRadius={'10px'} bg={'#ffffffd0  '} w={'100%'}>
        <Heading fontFamily={'cursive'} as="h1" size="lg" mb={4}>
          Поиск рецептов
        </Heading>

        <Flex mb={4}>
          <Input
          fontFamily={'cursive'}
          boxShadow={'0px 5px 10px 2px rgba(0, 0, 0, 0.2)'}
            w={'100%'}
            type="text"
            placeholder="Введите ингредиент"
            value={searchTerm}
            onChange={handleSearch}
            border={'1px solid black '}
          />

          <Spacer />


          <Spacer />

    
        </Flex>

        <Heading fontFamily={'cursive'}  as="h2" size="md" mt={4} mb={2}>
          Результаты поиска
        </Heading>
        <SimpleGrid  columns={2} spacing={4} mt={4}>
          
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <GridItem fontFamily={'cursive'}   key={recipe.name}>
                <Box 
                
                border={'1px solid black'}
                backgroundSize={'cover'}
               
                  p={5}
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <Heading fontFamily={'cursive'}  as="h3" size="md" mb={2}>
                    {recipe.name}
                  </Heading>
                  <Image
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    borderRadius="md"
                    height="100px"
                  />
                </Box>
              </GridItem>
            ))
          ) : (
            <Text fontFamily={'cursive'} >Рецептов не найдено.</Text>
          )}
        </SimpleGrid>


  

        <Modal  transition={'.3s ease'}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent  fontWeight={'700'} fontFamily={'cursive'} border={'1px solid black'} bgImage={'https://catherineasquithgallery.com/uploads/posts/2023-01/1674511416_catherineasquithgallery-com-p-fon-dlya-menyu-tekstura-shokolad-128.jpg'}>
            <ModalHeader fontFamily={'cursive'} >{selectedRecipe?.name}</ModalHeader>
            <ModalBody fontSize={'20px'}>
              <Image bgImage={''} border={'1px solid black'}
                src={selectedRecipe?.imageUrl}
                alt={selectedRecipe?.name}
                borderRadius="md"
                mb={4}
              />
              <Heading fontFamily={'cursive'} fontSize={'20px'} as="h3" size="sm" mb={2}>
                Список ингредиентов:
              </Heading>
              <ul>
                {selectedRecipe?.ingredients.map((ingredient) => (
                  <li key={ingredient}>
                    <Checkbox
                      onChange={(e) =>
                        handleIngredientChange(ingredient, e.target.checked)
                      }
                      isChecked={availableIngredients.includes(ingredient)}
                    >
                      <Text
                      fontFamily={'cursive'}
                       fontSize={'20px'}
                        as="span"
                        color={
                          availableIngredients.includes(ingredient)
                            ? 'green.500'
                            : 'red.500'
                        }
                      >
                        {ingredient}
                      </Text>
                    </Checkbox>
                  </li>
                ))}
              </ul>
              <Text  textShadow={'red 5px 2px 5px'} mt={4}>Время готовки: {selectedRecipe?.cookingTime}</Text>
              <Text   mt={4}>Описание: {selectedRecipe?.description}</Text>

              <Heading  textShadow={'blue 5px 2px 5px'} fontSize={'20px'} as="h3" size="sm" mt={4} mb={2}>
                Отзывы:
              </Heading>
              <Stack spacing={2}>
                {selectedRecipe?.reviews?.map((review, index) => (
                  <Box key={index}>
                    <Box gap={'5px'} alignItems={'center'} display={'flex'}>
                    <img width={'30px'} src="https://lework.net/uploads/no-photo.png" alt="" />

                    <Text fontWeight="bold">{review.author}</Text>

                    </Box>
                  
                    <Text >{review.text}</Text>
                  </Box>
                ))}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button border={'1px solid black'} onClick={onClose}>Закрыть</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
      </Box>
     
    </Main>
   



  );
};

export default Chat;