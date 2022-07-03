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
  Image,
  VStack,
  Modal,
  FormControl,
  Input,
} from "native-base";
import axios from "axios";
function HireLabour({ route, navigation }) {
  const [duartion, setduartion] = useState("");
  const [counts, setcounts] = useState(0);
  const [wages, setwages] = useState(0);

  const submitPost = () => {
    const url = "https://kisanseva.herokuapp.com/";

    axios
      .post(`${url}labourpost`, {
        username: route.params.user,
        duartion: duartion,
        requirement: counts,
        wages: wages,
      })
      .then(function (response) {
        if (response.data.status === "labour added") {
          navigation.navigate("Home");
        } else {
          console.log(response.data.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
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
            Hire Labourers
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Duration</FormControl.Label>
              <Input
                value={duartion}
                onChangeText={(text) => setduartion(text)}
                placeholder="example: 5 months"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                Number of labourers required
              </FormControl.Label>
              <Input
                value={counts}
                onChangeText={(text) => setcounts(text)}
                placeholder="example: 20"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Daily Wage</FormControl.Label>
              <Input
                value={wages}
                onChangeText={(text) => setwages(text)}
                placeholder="example: Rs 600"
              />
            </FormControl>
            <Button mt="2" onPress={submitPost} colorScheme="indigo">
              Post Job
            </Button>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
export default HireLabour;
