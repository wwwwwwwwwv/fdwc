import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Textarea,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
  Image,
  Stack,
  Divider,
} from '@chakra-ui/react';

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
        title: 'Пожалуйста, заполните все поля!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setRecipeImage(e.target.files[0]);
    }
  };

  return (
    <Container fontFamily={'cursive'} maxW="container.xl" padding={10}>
      <Heading fontFamily={'cursive'} as="h1" size="2xl" mb={4} textAlign="center">
        Добавьте свой рецепт!
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
            id="recipeName"
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="ingredients">Ингредиенты (через запятую):</FormLabel>
          <Textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <FormHelperText>
            Введите ингредиенты, разделяя их запятой (например, мука, сахар,
            яйца).
          </FormHelperText>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="instructions">Инструкции:</FormLabel>
          <Textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="recipeImage">Изображение рецепта:</FormLabel>
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
        Список рецептов
      </Heading>
      <Stack spacing={4} mt={4}>
        {recipes.map((recipe, index) => (
          <Box key={index}>
            <Heading as="h3" size="md">
              {recipe.name}
            </Heading>
            {recipe.image && (
              <Image src={URL.createObjectURL(recipe.image)} alt={recipe.name} borderRadius="md" />
            )}
            <Divider />
            <Box>
              <Text>Ингредиенты: {recipe.ingredients.join(', ')}</Text>
              <Text>Инструкции: {recipe.instructions}</Text>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default About;