import React, { useState } from "react";
import {
  Text,
  HStack,
  Stack,
  Center,
  Heading,
  Box,
  Button,
  AspectRatio,
  ScrollView,
  VStack,
  FormControl,
  Input,
} from "native-base";
function ProviderHomePage() {
  // "username": "admin@gmail.com",
  // "productname":"plougher",
  // "price": 800,
  // "createdat": "Sun Jul 03 2022 07:35:44 GMT+0530 (India Standard Time)",
  // "contactnumber": "7982515457",
  // "manufacturedate": 4
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Rent Equipments
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Duration</FormControl.Label>
            <Input placeholder="example: 5 months" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Number of labourers required</FormControl.Label>
            <Input type="num" placeholder="example: 20" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Daily Wage</FormControl.Label>
            <Input type="num" placeholder="example: Rs 600" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Post job
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default ProviderHomePage;
