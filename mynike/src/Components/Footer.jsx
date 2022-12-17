import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
 { children: ReactNode }
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#111')}
      color={useColorModeValue('white')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>FIND A STORE</ListHeader>
            <ListHeader>BECOME A MEMBER</ListHeader>
            <ListHeader>SIGN UP FOR EMAIL</ListHeader>
            <ListHeader>SEND US FEEDBACK</ListHeader>
            <ListHeader>STUDENT DISCOUNTS</ListHeader>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>GET HELP</ListHeader>
            <Link href={'#'}>Order Status</Link>
            <Link href={'#'}>Delivery</Link>
            <Link href={'#'}>Returns</Link>
            <Link href={'#'}>Payment Options</Link>
            <Link href={'#'}>Contact Us On Nike.com Inquiries</Link>
            <Link href={'#'}>Contact Us On All Other Inquiries</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>ABOUT NIKE</ListHeader>
            <Link href={'#'}>News</Link>
            <Link href={'#'}> Careers</Link>
            <Link href={'#'}>Investors</Link>
            <Link href={'#'}>Sustainbility</Link>
          </Stack>

          
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('white')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Nike,Inc. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}