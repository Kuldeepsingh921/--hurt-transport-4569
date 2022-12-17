import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image,Stack,Text,Flex,Box} from '@chakra-ui/react'
import Footer from './Footer';

function LandingPage(){
    
    return(

        <>
        
        <Box style={{
            height:"60px",
            backgroundColor:"white",
            display:"flex",
            justifyContent:"space-around"
        }}>
             <Box>
             <h1>Save Upto 40%</h1>
             <p>Shop All Our New Markdowns</p>
             </Box>
             <Box>
             <h1>Hello Nike App</h1>
             <p>download the app to access everything nike.Get Your Great</p>
            </Box> 
            
        </Box>
        <Box style={{height:"900px",width:"95%",margin:"auto",textAlign:"center"}}>
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1306,c_limit/e375c7be-cd4f-4419-a9df-2ff464ec9552/nike-just-do-it.jpg" alt="" />
                
            <Box style={{lineHeight:"40px",marginTop:"40px",fontWeight:"bold"}}>
            <p>Join Forces Pack</p>
            <h1 style={{fontSize:"70px"}}>40 YEARS OF FORCE</h1>
            </Box>
               <Box style={{marginTop:"40px"}}>
               <button
                style={{
                    
                height:'48px',
                width:"250px",
                border:'2px',
                backgroundColor:'#111',
                color:"white",
                padding: "6px 20px",
                borderRadius:"30px",
                fontSize:"20px"
                }}
                >
                Shop Air Force 1
                </button>
                <button
                style={{
                height:'48px',
                width:"180px",
                border:'2px',
                backgroundColor:'#111',
                color:"white",
                padding: "6px 20px",
                borderRadius:"30px",
                marginLeft:"20px",
                fontSize:"20px"
                }}
                >
                Learn More
                </button>
               </Box>
        </Box>
        <Box style={{width:"95%",margin:"auto",marginTop:"150px"}}>
            <h1 style={{fontSize:"25px",marginBottom:"20px"}}>Trending</h1>
            <Box>
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/f1e1e3bf-c839-4bc0-8db9-eaffd5c849b1/nike-just-do-it.png" alt="" />
            </Box>
            <Box style={{marginTop:"-350px",marginLeft:"40px",color:"white"}}>
                <p style={{fontSize:"20px",marginLeft:"5px"}}>Nike FC</p>
                <h1 style={{fontSize:"70px",fontWeight:"bold",width:"45%",lineHeight:"60px",fontFamily: "Helvetica NeueHelvetica,Arial,sans-serif"}}>INSPIRED BY THE BRILLIANT GAME</h1>
                <p style={{fontSize:"15px",marginLeft:"5px",marginTop:"10px",width:"35%"}}>Express your love of football off the pitch with the latest National Team Collections</p>
                <button  style={{
                height:'48px',
                width:"100px",
                border:'2px',
                backgroundColor:'white',
                color:"black",
                padding: "6px 20px",
                borderRadius:"30px",
                marginLeft:"5px",
                marginTop:"20px"}}>Gear Up</button>
            </Box>
        </Box>
        <Box style={{marginTop:"150px"}}>
        <h1 style={{fontSize:"25px",marginBottom:"20px",marginLeft:"40px"}}>Gear Up</h1>
        <Box style={{
            display:"flex",
            width:"95%",
            margin:"auto",
            marginTop:"10px",
            gap:"10px",
        }}>
            <Box>
                <img
                    src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/1e1d4876-fbea-44b1-aecd-7a377a4eac8c/nike-just-do-it.png'
                    alt='Dan Abramov'
                />
                <Box style={{marginTop:"-150px",marginLeft:"40px",lineHeight:"55px"}}>
                <p style={{color:"white",fontSize:"20px"}}>Nike Air Zoom Pegasus 39:Trust Yours Instincts</p>
                <Button style={{width:"100px",borderRadius:"20px"}} _hover={{backgroundColor:"gray.400"}}>Shop</Button>
                </Box>
            </Box>
            <Box>
                <img  src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/2344ef16-81f1-451b-a920-94ff3e343098/nike-just-do-it.png' alt='Dan Abramov' />
                <Box style={{marginTop:"-150px",marginLeft:"40px",lineHeight:"55px"}}>
                <p style={{color:"white",fontSize:"20px"}}>Find Your Running Gear</p>
                <Button style={{width:"100px",borderRadius:"20px"}} _hover={{backgroundColor:"gray.400"}}>Shop</Button>
                </Box>
             </Box>            
        </Box>
        </Box>
        <Box style={{marginTop:"100px"}}>
            <h1  style={{fontSize:"25px",marginBottom:"20px",marginLeft:"40px"}}>Just In</h1>
            <Box style={{width:"95%",margin:"auto",}}>
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/1ab06458-11a0-46b6-aeee-e5b17aac4d4a/nike-just-do-it.jpg" alt="" />
                <Box style={{marginTop:"-700px",marginLeft:"50px"}}>
                    <p>'Coconut Milk'</p>
                    <h1 style={{fontSize:"70px",width:"35%",lineHeight:"60px",fontWeight:"bold",fontFamily:"font-family: Helvetica Neue,Helvetica,Arial,sans-serif",color:"#111"}}>AIR JORDAN 1 ELEVATE LOW</h1>
                    <Button width="100px"borderRadius="20px" backgroundColor="#111" color="white" marginTop="25px" _hover={{backgroundColor:"gray"}}>Shop</Button>
                </Box>
            </Box>
        </Box>
        <Box  style={{marginTop:"560px",}}>
            <h1  style={{fontSize:"25px",marginBottom:"20px",marginLeft:"40px"}}>Don't Miss</h1>
            <Box style={{width:"95%",margin:"auto"}}>
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/711bee91-53d3-47b6-b0f4-bb7fd7978b8a/nike-just-do-it.jpg" alt="" />
            </Box>
            <Box style={{textAlign:"center",marginTop:"30px"}}>
                <p style={{marginBottom:"-17px",color:"#111"}}>The Best Gifts Move You</p>
                <h1 style={{fontSize:"60px",fontWeight:"bold"}}>UNWRAP POSSIBILITIES</h1>
                <p style={{color:"#111"}}>This holiday, give more than a gift.Give the joy of possibility.Inspire a special someone to chase that runner's high.To dance like nobody's dancing.</p>
                <p style={{color:"#111"}}>To feel stronger.To be better.</p>
                <p style={{color:"#111",marginTop:"20px"}}>Not sure what to gift? Keep scrolling for some tips.</p>
                <Button 
                marginTop="20px"
                borderRadius="20px"
                backgroundColor={"#111"}
                color="white"
                width={"150px"}
                _hover={{backgroundColor:"gray"}}
                >Explore Gifts</Button>
            </Box>
        </Box>
        <Box>
            <h1 style={{marginLeft:"40px",fontSize:"25px"}}>More Nike</h1>
            <Box style={{
                display:"flex",
                width:"95%",
                margin:"auto",
                gap:"10px",
            }}>
                <Box>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/cb91797a-6054-4201-8bee-c08700c83e47/nike-just-do-it.png" alt="" />
                    <Box style={{marginTop:"-80px",marginLeft:"70px"}}><Button borderRadius={"20px"} _hover={{backgroundColor:"gray.300"}}>Men's</Button></Box>
                </Box>
                
                <Box>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/b47f5049-1b86-4642-b50c-310ce59b5940/nike-just-do-it.png" alt="" />
                    <Box style={{marginTop:"-80px",marginLeft:"70px"}}><Button borderRadius={"20px"} _hover={{backgroundColor:"gray.300"}}>Women's</Button></Box>
                </Box>
                
                <Box>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/44c84aa3-702f-49fd-80e0-a74258b9b0b6/nike-just-do-it.png" alt="" />
                    <Box style={{marginTop:"-80px",marginLeft:"70px"}}><Button borderRadius={"20px"} _hover={{backgroundColor:"gray.300"}} >Kid's</Button></Box>
                </Box>
                
            </Box>
        </Box>
        <Box style={{display:"flex",gap:"5px",marginTop:"200px",height:"350px",width:"60%",margin:'auto'}}>
              <Box style={{width:"30%",lineHeight:"35px", }}>
                <h1 style={{color:"#111",fontSize:"20px"}}>Icons</h1>
                <Box style={{color:"gray"}} >
                <Text _hover={{color:"#111",cursor:"pointer"}}>Air Force 1</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Huarache</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Air Max 90</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Air Max 95</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Air Max 97</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Air Max 270</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Air Max 720</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>All Air Max</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>VaporMax</Text>
                </Box>
                </Box>
              <Box style={{width:"30%",lineHeight:"35px",}}>
              <h1 style={{color:"#111",fontSize:"20px"}}>Shoes</h1>
                <Box style={{color:"gray"}} >
                <Text _hover={{color:"#111",cursor:"pointer"}}>All Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Custom Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Running Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Jordan Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Football Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Basketball Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Gym & Training Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Lifestyle Shoes</Text>
                </Box>
              </Box>
              <Box style={{width:"30%",lineHeight:"35px",}}>
              <h1 style={{color:"#111",fontSize:"20px"}}>Clothing</h1>
                <Box style={{color:"gray"}} >
                <Text _hover={{color:"#111",cursor:"pointer"}}>All Clothing</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Modest Wear</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Hoddies and Pullovers</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Shirts and Tops</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Jackets </Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Compression and Nike Pro</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Trousers & Leggings</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}> Shorts</Text>
                </Box>
              </Box>
              <Box style={{width:"30%",lineHeight:"35px",}}>
              <h1 style={{color:"#111",fontSize:"20px"}}>Kid's</h1>
                <Box style={{color:"gray"}} >
                <Text _hover={{color:"#111",cursor:"pointer"}}>Infant & Toddler Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Kids' Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Kids' Jordan Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Kids' Basketball Shoes</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Kids' Clothing </Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Kids' Backpacks</Text>
                <Text _hover={{color:"#111",cursor:"pointer"}}>Kids' Socks</Text>
                </Box>
              </Box>
        </Box>
        <Footer marginTop="50px" />
        </>
    )
}
export default LandingPage;