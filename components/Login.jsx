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
} from "native-base";
import axios from "axios";
import { useState } from "react";
const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = "https://kisanseva.herokuapp.com/";

  const usernameInputhandler = (text) => {
    setUsername(text);
  };
  const passwordInputhandler = (text) => {
    setPassword(text);
  };
  const submitForm = () => {
    axios
      .post(`${baseUrl}login`, {
        username: username,
        password: password,
      })
      .then(function (response) {
        if (response.data.user) {
          // localStorage.setItem("user", response.data.user.username);
          navigation.navigate("Home", { user: response.data.user });
        } else if (response.data.message) {
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    //
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
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              onChangeText={(text) => usernameInputhandler(text)}
              value={username}
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(text) => passwordInputhandler(text)}
              value={password}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={submitForm}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
