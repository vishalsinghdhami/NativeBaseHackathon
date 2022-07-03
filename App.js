import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home/Index";
import HireLabour from "./components/Home/HireLabour";
import Labour from "./components/Home/Labour";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddProduct from "./components/Home/AddProduct";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Sign In" }}
          />
          <Stack.Screen
            name="Home"
            options={{ headerLeft: () => null }}
            component={Home}
          />
          <Stack.Screen name="AddProduct" component={AddProduct} />
          <Stack.Screen name="HireLabour" component={HireLabour} />
          {/* <Stack.Screen name="Labour" component={Labour} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

    // <NativeBaseProvider>
    //   <Center
    //     _dark={{ bg: "blueGray.900" }}
    //     _light={{ bg: "blueGray.50" }}
    //     px={4}
    //     flex={1}
    //   >
    //     <Login />
    //     <ToggleDarkMode />
    //   </Center>
    // </NativeBaseProvider>
  );
}

// Color Switch Component

// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
