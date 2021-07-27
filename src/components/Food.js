import { useState } from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import Food from './FoodApi';
// import Navbar from './NvBar';
import FoodCart from './FoodCart';
const Foods = () => {
  const [FoodData, setFoodData] = useState(Food);
  const HandleChange = (eve) => {
    const UpdatedData = Food.filter((currElem) => {
      return currElem.category === eve;
    });
    setFoodData(UpdatedData);

    // console.log(FoodData);
  };

  return (
    <>
      <Heading textAlign="center">The Glory Hotel</Heading>
      <Flex flexDirection="row" justifyContent="center" pt="10" ml="6">
        <Button onClick={() => HandleChange('Breakfast')}>Breakfast</Button>
        {/* <Button>Evening</Button> */}
        <Button onClick={() => HandleChange('lunch')}>Lunch</Button>
        <Button onClick={() => HandleChange('dinner')}>Dinner</Button>
        <Button onClick={() => HandleChange('snack')}>Evening Snack</Button>

        {/* <Button>All</Button> */}
      </Flex>
      <FoodCart FoodData={FoodData} />
    </>
  );
};
export default Foods;
