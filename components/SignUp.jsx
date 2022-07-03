import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Box,
  Button,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  ScrollView,
} from "native-base";
import axios from "axios";
import React, { useState } from "react";
const SignUp = ({ navigation }) => {
  let [service, setService] = React.useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("farmer");
  const baseUrl = "https://kisanseva.herokuapp.com/";

  const submitForm = () => {
    axios
      .post(`${baseUrl}createuser`, {
        name: name,
        username: username,
        password: password,
        type: type,
      })
      .then(function (response) {
        if (response.data.user) navigation.navigate("Login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Center w="100%">
      <ScrollView />
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input value={name} onChangeText={(text) => setName(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value={username}
              type="email"
              onChangeText={(text) => setUsername(text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              type="password"
            />
          </FormControl>
          <Box maxW="300">
            <Select
              selectedValue={type || ""}
              minWidth="100%"
              accessibilityLabel="Sign In As"
              placeholder="Sign In As"
              _selectedItem={{
                bg: "teal.300",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(type) => setType(type)}
            >
              <Select.Item label="Seller" value="provider" />
              <Select.Item label="Farmer" value="farmer" />
              <Select.Item label="Labourer" value="labour" />
            </Select>
          </Box>
          <Button mt="2" colorScheme="indigo" onPress={submitForm}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Already a user?
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("Login", { name: "Jane" })}
            >
              Login here
            </Link>
          </HStack>
        </VStack>
      </Box>

      <ScrollView />
    </Center>
  );
};

export default SignUp;
