import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Link
  } from '@chakra-ui/react';
  
  
  export default function ProductCard({title,price,tag,image,category,color,id}) {
    return (
      
      <Center py={12}>
        
        <Box 
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'300px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={300}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'start'}>
            <Heading color={'gray.500'} fontSize={'xl'} >
              {title}
            </Heading>
            <Text fontSize={'md'} fontFamily={'body'} fontWeight={500}>
             {category}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'} >
              {color}
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={400} fontSize={'xl'}>
                {`MRP: ₹ ${price}`}
              </Text>
             
            </Stack>
          </Stack>
        </Box>
       
      </Center>
     
    );
    
  }