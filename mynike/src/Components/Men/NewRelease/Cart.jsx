import {Flex,Grid,GridItem,Text,Heading,Box,Divider,Select,Button} from "@chakra-ui/react"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {RiDeleteBinLine} from "react-icons/ri"
import {AiFillQuestionCircle} from "react-icons/ai" 
import Footer from "../../Footer"
function Cart(){
    return (
        <>
            <Grid templateColumns={{
          base:"repeat(1,1fr)",
          sm:"repeat(1,1fr)",
          md:"repeat(2,1fr)",
          lg:"repeat(2,1fr)",
          xl:"repeat(2,1fr)"}}
             display={'flex'} justifyContent='space-around' gap={'20px'} width='75%' margin='auto' marginTop='50px'>
            <GridItem width='100%' height='auto'  boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
           <Flex>
           <Box> <img src="https://secure-images.nike.com/is/image/DotCom/AT0057_200?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg" alt="" /></Box>
           <Box marginLeft='20px' lineHeight={'25px'}>
            <Flex gap={'250px'}>
            <Text fontSize={'17px'} fontWeight='500'>Jordan Courtside 23 WE</Text>
            <Text fontSize={'17px'} fontWeight='500'>MRP: ₹ 11 295.00</Text>
            </Flex>
            <Text color='gray'>Men's Shoes</Text>
            <Text color='gray'>Desert/Gum Light Brown/Baroque Brown</Text>
            <Flex>
                <Text marginTop='10px'>Size:</Text>
                <Select width='60px' marginLeft='10px' marginTop='5px'>
                <option value='option1'>6</option>
                <option value='option2'>6.5</option>
                <option value='option3'>7</option>
                <option value='option3'>7.5</option>
                <option value='option3'>8</option>
                <option value='option3'>8.5</option>
                <option value='option3'>9</option>
                <option value='option3'>9.5</option>
                <option value='option3'>10</option>
                <option value='option3'>10.5</option>
                <option value='option3'>11</option>
                </Select>
                <Text marginTop='10px' marginLeft='10px'>Quantity:</Text>
                <Button marginLeft='10px' marginTop='5px'>-</Button>
                <Button marginTop='5px'>1</Button>
                <Button marginTop='5px'>+</Button>
            </Flex>
                <Flex gap='20px' fontSize='25px' marginTop='20px'>
                <MdOutlineFavoriteBorder />
                 <RiDeleteBinLine />
                </Flex>
                <Divider />
           </Box>
           </Flex>
              </GridItem>

              <GridItem width='50%' height='400px' boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px">
                <Text marginLeft='5px' fontSize={'25px'} fontWeight='500'>Summary</Text>
                <Box>
                    <Flex marginLeft='5px' marginTop={'50px'} fontSize={'17px'}>
                    <Text  marginRight='5px'>Subtotal </Text>
                    <AiFillQuestionCircle />
                    <Text marginLeft={'165px'}> ₹ 11 295.00</Text>
                    </Flex>
                   <Flex marginLeft='5px' gap={'30px'}  fontSize={'17px'}>
                   <Text marginTop={'20px'}>Estimated Delivery & Handling</Text>
                    <Text marginTop={'20px'}>₹ 1 250.00</Text>
                   </Flex>
                   <Divider marginTop={'20px'} />
                   <Flex marginLeft='5px' gap={'220px'}  fontSize={'17px'}  marginTop={'20px'}>
                   <Text>Total</Text>
                   <Text>₹ 12 545.00</Text>
                   </Flex>
                   <Divider marginTop={'20px'} />
                   <Button colorScheme='blackAlpha' color='white' backgroundColor='black' height='50px' width='100%' borderRadius='20px' variant='solid' marginTop={'20px'}>
                    Checkout
                    </Button>
                    
                </Box>
              </GridItem>
              
            </Grid>
            <Box width={'75%'} margin='auto'><Text fontSize={'25px'} marginTop='100px'>Favourites </Text>
            <Text>Want to view your favourites? <span style={{textDecoration:"underline",cursor:"pointer"}}>Join us</span> or <span style={{textDecoration:"underline",cursor:"pointer"}}>Sign in</span></Text>
            </Box>
            <Box marginTop='50px' >
            <Footer/>
            </Box>
        </>
    )
}
export default Cart