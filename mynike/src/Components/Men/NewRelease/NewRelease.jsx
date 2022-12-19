import { useEffect,useState } from "react";
import {Grid,GridItem,Select,Box,Flex,Text,Divider, Checkbox
} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import ProductCard from "./ProductCard";
import Footer from "../../Footer";

function NewRelease(){
    const [item,setItem]=useState([])
    const [sort,setSort]=useState("")
  const getData=async()=>{
    let res=await fetch(`http://localhost:3004/newrelease?_sort=price&_order=${sort}`)
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
const handleSorting=(e)=>{
  console.log("hii")
  console.log(e.target.value)
  setSort(e.target.value)
 
}
    return (
        <>
        {/* <h1>Men's New Release Page</h1> */}
        <Box display="flex" justifyContent="end" marginRight="70px" marginTop="50px">
        <Select onChange={handleSorting} placeholder='Select option' width="150px">
        <option backgroundColor="gray" value='New Release'>New Release</option>
        <option value='asc'>Low-To-High</option>
        <option value='desc'>High-To-Low</option>
        </Select>
        </Box>
        <Flex width="95%"
          margin="auto" >
        <Box width="300px" marginTop={'30px'}>
          <Divider  border="3px"/>
          <Text fontSize="20px" marginBottom="10px" marginTop="10px">Gender</Text>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Men</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Women</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Unisex</Checkbox>
          <Divider marginTop="20px"  border="3px"/>
          <Text fontSize="20px" marginBottom="10px" marginTop="10px">Shop By Price</Text>
          <Checkbox colorScheme='blackAlpha' border="blackAlpha" lineHeight="10px">Under ₹ 2500.00</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">₹ 2501.00-₹ 7500.00</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">₹ 7501.00-₹ 12999.00</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Over ₹ 13000.00</Checkbox>
          <Divider marginTop="20px"  border="3px"/>
          <Text fontSize="20px" marginBottom="10px" marginTop="10px">Brand</Text>
          <Checkbox colorScheme='blackAlpha' border="blackAlpha" lineHeight="10px">Nike Sportswear</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Jordan</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">NikeLab</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">ACG</Checkbox>
          <Divider marginTop="20px"  border="3px" />
          <Text fontSize="20px" marginBottom="10px" marginTop="10px">Sports</Text>
          <Checkbox colorScheme='blackAlpha' border="blackAlpha" lineHeight="10px">Lifestyle</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Running</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Training & Gym</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Basketball</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Football</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' border="blackAlpha" lineHeight="10px">Golf</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Skateboarding</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Tennis</Checkbox><br/>
          <Divider marginTop="20px" border="3px"/>
          <Text fontSize="20px" marginBottom="10px" marginTop="10px">Collaborators</Text>
          <Checkbox colorScheme='blackAlpha' border="blackAlpha" lineHeight="10px">Stussy</Checkbox><br/>
          <Divider marginTop="20px" border="3px" />
          <Text fontSize="20px" marginBottom="10px" marginTop="10px">Best For</Text>
          <Checkbox colorScheme='blackAlpha' border="blackAlpha" lineHeight="10px">Wet Weather Conditions</Checkbox><br/>
          <Checkbox colorScheme='blackAlpha' lineHeight="10px">Cold Weather</Checkbox><br/>
        </Box>
         <Grid templateColumns={{
          base:"repeat(1,1fr)",
          //sm:"repeat(2,1fr)",
          lg:"repeat(1,1fr)",
          xl:"repeat(3,1fr)"}}
          gap={6}
          marginTop="70px"
          width="95%"
          > 
        {item.map((el)=>
        
        <GridItem key={el.id}>
          <Link to={`/productdetails/${el.id}`}>
         <ProductCard
          id={el.id}
          title={el.title}
          price={el.price}
          tag={el.tag}
          image={el.image}
          category={el.category}
          color={el.color}
          />
         </Link>
         </GridItem>  
        
        )}
         </Grid>
         </Flex>
          <Footer />
        </>
    )
}
export default NewRelease;