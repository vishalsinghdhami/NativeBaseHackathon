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
  } from "native-base";
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import ConfirmModal from "../helper/Modal";
  
  
  const url = "https://kisanseva.herokuapp.com";
  const Labour = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      getitems();
    }, []);
    async function getitems() {
      let data = await axios.get(`${url}/alljobs`);
      setProducts(await data.data.data);
    }
    return (
      <ScrollView maxW="100%" h="80">
        <Center
          _web={{
            flexDirection: "row",
            m: 5,
            flexWrap: "wrap",
          }}
        >
          {products &&
            products.map((p, i) => (
              <ProductCard
                getitems={getitems}
                key={i}
                contact={p.contactnumber}
                manufacture={p.manufacturedate}
                price={p.price}
                productname={p.productname.toUpperCase()}
                createdAt={Math.round(Math.random() * 10) + " hrs ago"}
                _id={p._id}
              />
            ))}
        </Center>
      </ScrollView>
    );
  };
  
  function ProductCard(props) {
    const [modalVisible, setModalVisible] = useState(false);
  
    return (
      <>
        <ConfirmModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          message={"Request Sent Successfully!"}
        />
        <Box alignItems="center">
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            mt={5}
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
              mr: 5,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: images[props.productname.toLowerCase()],
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="violet.500"
                _dark={{
                  bg: "violet.400",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                {`₹${props.price}/day`}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {props.productname}
                </Heading>
              </Stack>
              <Text fontWeight="400">
                manufactured: {props.manufacture}years ago
              </Text>
              <Text fontWeight="400">contact number: {props.contact}</Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack
                  alignItems="center"
                  width={"100%"}
                  justifyContent="space-between"
                >
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    fontWeight="400"
                  >
                    {props.createdAt}
                  </Text>
                  <Button
                    onPress={() => {
                      console.log(props._id);
                      axios.post(`${url}/updateproduct`, {
                        _id: props._id.toString(),
                      });
                      props.getitems();
                      setModalVisible(!modalVisible);
                    }}
                  >
                    Rent Now
                  </Button>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>
      </>
    );
  }
  
  export default Labour;
  