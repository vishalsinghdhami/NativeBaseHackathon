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
import RentEquipment from "./RentEquipment";
function Home({ navigation, route }) {
  return (
    <>
      <HStack m={5} space={2}>
        {route.params.user.type === "provider" && (
          <Button
            onPress={() =>
              navigation.navigate("AddProduct", { user: route.params.user })
            }
          >
            Add Product
          </Button>
        )}
        <Button
          onPress={() =>
            navigation.navigate("HireLabour", { user: route.params.user })
          }
        >
          Hire Labour
        </Button>
      </HStack>
      <RentEquipment />
    </>
  );
}

export default Home;
