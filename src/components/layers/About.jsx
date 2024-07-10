import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
  Image,
  Stack,
  Divider,
  Text,
} from '@chakra-ui/react';
import Main from './Main';

const About = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [userPoints, setUserPoints] = useState(0);
  const [recipeImage, setRecipeImage] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
    const storedUserPoints = localStorage.getItem('userPoints') || 0;
    setUserPoints(parseInt(storedUserPoints, 10));
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('userPoints', userPoints);
  }, [userPoints]);

  const saveRecipe = () => {
    if (recipeName && ingredients && instructions) {
      const newRecipe = {
        name: recipeName,
        ingredients: ingredients.split(',').map((item) => item.trim()),
        instructions: instructions,
        image: recipeImage,
      };
      setRecipes([...recipes, newRecipe]);
      setUserPoints(userPoints + 10);
      setRecipeName('');
      setIngredients('');
      setInstructions('');
      setRecipeImage(null);
      toast({
        title: 'Рецепт сохранен! +10 баллов!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Please fill in all fields!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setRecipeImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (

    <Main>
 <Container borderRadius={'10px'} bg={'#ffffffd0'} fontFamily={'cursive'} maxW="container.xl" padding={10}>
      <Heading fontFamily={'cursive'} as="h1" size="2xl" mb={4} textAlign="center">
        Добавтье свой рецепт!
      </Heading>
      <Box mb={4}>
        <Heading fontFamily={'cursive'} as="h2" size="md">
        Ваши баллы: {userPoints}
        </Heading>
      </Box>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl mb={4}>
          <FormLabel htmlFor="recipeName">Название рецепта:</FormLabel>
          <Input
          border={'1px solid black'}
            id="recipeName"
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="ingredients">Ингридиенты (через запятую):</FormLabel>
          <Textarea
           border={'1px solid black'}
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <FormHelperText>
            Например (e.g., Огурец, мука, яйца).
          </FormHelperText>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="instructions">Инструкция :</FormLabel>
          <Textarea
           border={'1px solid black'}
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="recipeImage">Картинка рецепта:</FormLabel>
          <Input
          
            type="file"
            id="recipeImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </FormControl>
        <Button bg={'#4671D5'} onClick={saveRecipe} colorScheme="blue" type="submit">
          Сохранить рецепт
        </Button>
      </form>

      <Heading fontFamily={'cursive'} as="h2" size="md" mt={8}>
        Рецепты
      </Heading>
      <Stack spacing={4} mt={4}>
        {recipes.map((recipe, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" p={4}>
            <Heading fontSize={'25px'} as="h3" size="md">
              {recipe.name}
            </Heading>
            {recipe.image && (
              <Image w={'200px'} src={recipe.image} alt={recipe.name} borderRadius="md" mt={2} />
            )}
            <Divider my={2} />
            <Text fontSize={'20px'}><strong >Ингридиенты:</strong> {recipe.ingredients.join(', ')}</Text>
            <Text fontSize={'20px'}><strong>Инструкция:</strong> {recipe.instructions}</Text>
          </Box>
        ))}
      </Stack>
    </Container>
    </Main>
   
  );
};

export default About;
