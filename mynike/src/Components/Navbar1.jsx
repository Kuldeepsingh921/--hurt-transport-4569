import { ReactNode } from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Input
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {MdOutlineFavoriteBorder} from "react-icons/md"
import MenuNav from './MenuNav';
export default function Navbar1() {
  
  return (
    <>
      <Box bg={useColorModeValue('#fff')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><img width={"65px"} src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" alt="nike_logo" /></Box>

          
            <Stack direction={'row'} spacing={2} color={"#111"} cursor={"pointer"} fontFamily="Helvetica Neue Helvetica,Arial,sans-serif">
            <MenuNav />
            </Stack>
          
            <Stack></Stack>
            <Flex gap="20px">
              <Flex><Input  borderRadius="20px" placeholder='Search' bg="gray.100" _hover={{backgroundColor:"gray.200"}}/></Flex>
              <Flex fontSize="25px" marginTop="5px"><MdOutlineFavoriteBorder /></Flex>
              <Flex fontSize="25px" marginTop="5px"><AiOutlineShoppingCart /></Flex>
            </Flex>
          </Flex>
      </Box>
    </>
  );
}