import React from 'react'
import { View,Text,Box, Image, Heading, VStack, Input, Button, Pressable } from 'native-base'
import Colors from '../color'
import { MaterialIcons,AntDesign } from '@expo/vector-icons';




function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode='cover'
        size="lg"
        w="full"
        source={require("../../assets/images/OIP.jpg")}
        />
      <Box
          w="full"
          h="full"
          position="absolute"
          top="0"
          px="6"
          justifyContent="center"
        >
          <Heading color="white">LOGIN</Heading>
          <VStack space={5} pt="6">
            {/*Email */}
            <Input
              InputLeftElement={<MaterialIcons name="email" size={24} color={Colors.main} />

              }
                variant="underlined"
                placeholder="username@gmail.com"
                w="70%"
                pl={2}
                color={Colors.main}
                borderBottomColor={Colors.underline}
                />
                {/*PASSWORD */}
                <Input
              InputLeftElement={<AntDesign name="eye" size={24} color={Colors.main} />

              }
                variant="underlined"
                placeholder="*********"
                w="70%"
                type='password'
                pl={2}
                color={Colors.main}
                borderBottomColor={Colors.underline}
                />
          </VStack>
          <Button 
          _pressed={{
            bg: Colors.main,
          }}
          my={30} 
          w="40%" 
          rounded={50} 
          bg={Colors.main}
          >
            LOGIN
          </Button>
          <Pressable mt={3}>
            <Text color={Colors.deepestGray}>SIGN UP</Text>
          </Pressable>
          
      </Box>
    </Box>
  );
}

export default LoginScreen