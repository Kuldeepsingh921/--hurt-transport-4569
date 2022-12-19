import { ReactNode } from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import {Link} from "react-router-dom"



export default function Navbar1() {
//   color: #111;
//   background-color: #fff;
// }
  return (
    <>
      <Box bg={useColorModeValue('#f6f6f6')} px={4} height="35px" color= "#111" fontSize={"12px"} cursor="pointer">
        <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
          <Box><img width={"20px"} height="100%" src="https://www.goodnewsnetwork.org/wp-content/uploads/2009/05/nike-logo-jordan.png" alt="nike_logo" /></Box>

          <Flex alignItems={'center'} >
            <Stack direction={'row'} spacing={4}>
             <Text _hover={{color:"gray"}}>Find a Store</Text>
             <Text>|</Text>
             <Text _hover={{color:"gray"}}>Help</Text>
             <Text>|</Text>
             <Link to={`/signup`}><Text _hover={{color:"gray"}}>Join Us</Text></Link>
             <Text>|</Text>
             <Link to={`/signin`}><Text _hover={{color:"gray"}}>Sign In</Text></Link>
             
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}