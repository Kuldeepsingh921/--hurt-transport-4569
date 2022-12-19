import { useParams,Link } from "react-router-dom";
import {useState,useEffect} from "react"
import {Box,Text,Flex,Heading,Stack,Divider,Button,Tooltip,UnorderedList,ListItem,Grid,GridItem} from "@chakra-ui/react"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {FiBarChart} from "react-icons/fi"
import {AiOutlineStar} from "react-icons/ai"
import Footer from "../../Footer";
function ProductDetails(){
    const {id}=useParams()
    //console.log(id)
    const [item,setItem]=useState([])
    const getData=async()=>{
        let res=await fetch(`http://localhost:3004/newrelease/${id}`)
        let data=await res.json()
        return data;
      }
      const handleData=async()=>{
        let data=await getData()
        setItem(data)
      }
      
        useEffect(()=>{
            handleData()
        },[])
        const {image,title,category,color,price,tag}=item
    return (
        <>
        
        <Flex  width="80%" margin="auto" gap="100px" marginTop='40px'>
        <Grid  templateColumns={{
          base:"repeat(1,1fr)",
          sm:"repeat(1,1fr)",
          md:"repeat(2,1fr)",
          lg:"repeat(2,1fr)",
          xl:"repeat(2,1fr)"}}>
        <GridItem width="80%" height="auto"><img src={image} alt="" /></GridItem>
        <GridItem  width="90%" height="auto">
            <Heading color={'gray.500'} fontSize={'40px'}>{title}</Heading>
            <Flex gap="15px" marginTop="10px">
            <Text fontSize="17px">Color:{color}</Text>
            <Text fontSize="17px">Category:{category}</Text>
            <Text fontSize="17px">Tag:{tag}</Text>
            </Flex>
            <Divider border='2px' marginTop="10px"  />
            <Text marginTop="10px" fontSize="20px">Available Options</Text>
            <Text  marginTop="10px">Select Size</Text>
            <Flex gap='10px'  marginTop="10px">
            <Box borderRadius="50%" backgroundColor="gray.200" width="5%" textAlign='center' cursor='pointer' >6</Box>
            <Box borderRadius="50%" backgroundColor="gray.200" width="5%" textAlign='center' cursor='pointer' >8</Box>
            <Box borderRadius="50%" backgroundColor="gray.200" width="5%" textAlign='center' cursor='pointer' >9</Box>
            </Flex>
            <Divider border='2px' marginTop="10px" />
            <Flex>
            <Heading fontWeight='400' fontSize='25px' marginTop="10px">{`MRP:₹${price}`}</Heading>
            <Text marginLeft='15px' marginTop="12px">*Inclusive of all taxes.</Text>
            </Flex>
            <Stack direction='row' spacing={4} marginTop='15px'>
            <Link to={`/productdetails/${id}/cart`}><Button colorScheme='blackAlpha' color='white' backgroundColor='black' height='50px' width='250px' borderRadius='20px' variant='solid'>
                Add to Bag
            </Button></Link>
            <Button color='black' height='50px' width='250px' borderRadius='20px' variant='outline'>
                Add to Favourite
            </Button>
            </Stack>
            <Divider border='2px' marginTop="20px"  />
            <Stack spacing={6}>
            <Flex gap='10px'>
            <Tooltip label='Add to Wish List' placement='top-start'>
            <Button width='15%' marginTop='40px' borderRadius='50%'><MdOutlineFavoriteBorder fontSize='30px' /></Button>
            </Tooltip>

            <Tooltip label='Compare this Product' placement='top'>
            <Button width='15%' marginTop='40px' borderRadius='50%'><FiBarChart fontSize='30px' /></Button>
            </Tooltip>
            </Flex>
        </Stack>
        <Flex marginTop='20px'>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <Text marginLeft='20px' fontSize='20px' marginTop='-7px'>100 reviews/Write your review</Text>
        </Flex>
        <Divider border='2px' marginTop="20px" />
        </GridItem>
        </Grid>
        </Flex>
        <Divider border='2px' marginTop="20px" />  
        <Box width='80%' margin='auto'>
            <Text fontSize='20px' fontWeight='500'>DESCRIPTION</Text>
            <Divider border='2px' width='10%' />
            <Text marginTop='20px' color='gray'>Kevin Durant thrives on big games. When the stakes are high, he'll play every minute if it means getting a crucial victory.
                 The KD15 is ready to go the distance. Lighter than his previous signature shoe, it helps you stay bouncy and comfortable at crunch time.
                  The ride is as smooth as KD's pull-up jumper and the cushioning is as plush as his right-to-left crossover in traffic, so that you can feel contained when your team needs you the most.
                 This EP version uses an extra-durable sole that's ideal for outdoor courts.</Text>
                 <Text fontSize='20px' fontWeight='500' marginTop='20px'>Product Features</Text>
                 <UnorderedList>
                <ListItem color='gray'>Closure: Lace-Up</ListItem>
                <ListItem color='gray'>Type: Sneaker</ListItem>
                <ListItem color='gray'>Upper Material: PU</ListItem>
                <ListItem color='gray'>Sole Material: TPR</ListItem>
                </UnorderedList>
                <Text fontSize='20px' fontWeight='500' marginTop='20px'>Country Of Origin:-</Text>
                <Text color='gray' fontSize='18px'>Vietnam</Text>
                <Text fontSize='20px' fontWeight='500' marginTop='20px'>Manufacturer/Packer/Importer Details:-</Text>
                <Text color='gray'>Importer:-Smith's INTERNATIONAL LTD.,14/6, CIVIL LINES, Hanoi-708001</Text>
        </Box>
           <Box marginTop='50px'>
           <Footer />
           </Box>
        </>
    )
}
export default ProductDetails;