import React, { useState, useEffect } from "react";
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
  Select,
  CheckIcon,
} from "native-base";
import axios from "axios";
function AddProduct({ navigation, route }) {
  const [productname, setproductname] = useState("");
  const [price, setprice] = useState("");
  const createdat = `${Math.round(Math.random() * 10)} hrs`;
  const [contactnum, setContactnum] = useState("");
  const [manufacturedate, setManufacturedate] = useState("");

  const submitProduct = () => {
    const url = "https://kisanseva.herokuapp.com/";

    axios
      .post(`${url}productpost`, {
        username: route.params.user,
        productname: productname,
        price: price,
        createdat: createdat,
        contactnumber: contactnum,
        manufacturedate: manufacturedate,
      })
      .then(function (response) {
        if (response.data.status === "product added") {
          navigation.navigate("Home", { user: route.params.user });
        } else {
          console.log(response.data.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
          Add Machine
        </Heading>
        <VStack space={3} mt="5">
          <Box maxW="300">
            <Select
              selectedValue={productname || ""}
              minWidth="100%"
              accessibilityLabel="Sign In As"
              placeholder="select equipment"
              _selectedItem={{
                bg: "teal.300",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(productname) => setproductname(productname)}
            >
              <Select.Item label="Rotavator" value="rotavator" />
              <Select.Item label="Cultivator" value="cultivator" />
              <Select.Item label="digger" value="digger" />
              <Select.Item label="plougher" value="plougher" />
              <Select.Item label="tractor" value="tractor" />
              <Select.Item label="seeddrill" value="seeddrill" />
            </Select>
          </Box>
          <FormControl>
            <FormControl.Label>Price (per day)</FormControl.Label>
            <Input value={price} onChangeText={(text) => setprice(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contact Number</FormControl.Label>
            <Input
              value={contactnum}
              onChangeText={(text) => setContactnum(text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Manufacture Date</FormControl.Label>
            <Input
              value={manufacturedate}
              onChangeText={(text) => setManufacturedate(text)}
            />
          </FormControl>
          <Button mt="2" onPress={submitProduct} colorScheme="indigo">
            Add Machine
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default AddProduct;
