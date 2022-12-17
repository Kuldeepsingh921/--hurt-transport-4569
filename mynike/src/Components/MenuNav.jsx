import {Link} from "react-router-dom"
import { Box, Heading,Flex,Text, Divider} from "@chakra-ui/react";
import HoverMenu from "./DropDown"
function MenuNav(){
    return(
       <Flex>
        <HoverMenu  text="Men"
        item1={
            <Flex gap="20px" color="#111">
                <Box>
                    <Heading fontSize="17px" marginBottom="15px">New & Featured</Heading>
                    <Link to="/newrelease"><Text >New Releases</Text></Link>
                    <Text>SNKRS Launch Calender</Text>
                    <Text>Member Access</Text>
                    <Text>Air Force 1</Text>
                    <Text>Basic Essentials</Text>
                    <Text>Football Club Kits</Text>
                    <Text>Sustainable Materials</Text>
                    <Text>Top Picks Under ₹ 7,500.00</Text>
                    <Text>Sale</Text>
                    
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Shoes</Heading>
                    <Text>Newest Sneakers</Text>
                    <Text>All Shoes</Text>
                    <Text>Running</Text>
                    <Text>Football</Text>
                    <Text>Basketball</Text>
                    <Text>Lifestyle</Text>
                    <Text>Jordan</Text>
                    <Text>Gym and Training</Text>
                    <Text>Skateboarding</Text>
                    <Text>Tennis</Text>
                    <Text>Sandles and Slides</Text>
                    <Text>Customise with Nike By You</Text>
                    <Text>All Sale Shoes</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Clothing</Heading>
                    <Text>All Clothing</Text>
                    <Text>Tops & T-Shirts</Text>
                    <Text>Jerseys & Kits</Text>
                    <Text>Hoddies & Sweatshirts</Text>
                    <Text>Jackets & Gilets</Text>
                    <Text>Pants & Leggings</Text>
                    <Text>Tracksuits</Text>
                    <Text>Compression and Base Layer</Text>
                    <Text>Caps</Text>
                    <Text>Shocks</Text>
                    <Text>Shorts</Text>
                    <Text>Bags and Backpacks</Text>
                    <Text>Accessories and Equiments</Text>
                    <Text>All Sale Clothing</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Shop By Sport</Heading>
                    <Text>Running</Text>
                    <Text>Football</Text>
                    <Text>Basketball</Text>
                    <Text>Gym & Training</Text>
                    <Text>Yoga</Text>
                    <Text>Skateboarding</Text>
                    <Text>Tennis</Text>
                    <Text>Golf</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Shop By Brand</Heading>
                    <Text>Nike Sportswear</Text>
                    <Text>Nike By You</Text>
                    <Text>NikeLab</Text>
                    <Text>Jordan</Text>
                    <Text>ACG</Text>
                    <Text>NBA</Text>
                    <Text>Nike SB</Text>
                    
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Icons</Heading>
                    <Text>Air Force 1</Text>
                    <Text>Pegasus</Text>
                    <Text>Air Jordan 1</Text>
                    <Text>Blazer</Text>
                    <Text>Air Max</Text>
                    
                    </Box>
            </Flex>
        }
        />
        <HoverMenu text="Women"
        item1={
            <Flex gap="20px" color="#111" >
                 <Box >
                    <Heading fontSize="17px" marginBottom="15px">New & Featured</Heading>
                    <Text >New Releases</Text>
                    <Text>SNKRS Launch Calender</Text>
                    <Text>Member Access</Text>
                    <Text>Air Force 1</Text>
                    <Text>Performance Essentials</Text>
                    <Text>Sustainable Materials</Text>
                    <Text>Bra and Legging Duos</Text>
                    <Text>Top Picks Under ₹ 7,500.00</Text>
                    <Text>Sale</Text>
                    
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Shoes</Heading>
                    <Text>Newest Sneakers</Text>
                    <Text>All Shoes</Text>
                    <Text>Running</Text>
                    <Text>Football</Text>
                    <Text>Basketball</Text>
                    <Text>Lifestyle</Text>
                    <Text>Jordan</Text>
                    <Text>Gym and Training</Text>
                    <Text>Skateboarding</Text>
                    <Text>Tennis</Text>
                    <Text>Sandles and Slides</Text>
                    <Text>Customise with Nike By You</Text>
                    <Text>All Sale Shoes</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Clothing</Heading>
                    <Text>All Clothing</Text>
                    <Text>Tops & T-Shirts</Text>
                    <Text>Sports Bra</Text>
                    <Text>Jerseys & Kits</Text>
                    <Text>Hoddies & Sweatshirts</Text>
                    <Text>Jackets & Gilets</Text>
                    <Text>Pants & Leggings</Text>
                    <Text>Tracksuits</Text>
                    <Text>Compression and Base Layer</Text>
                    <Text>Caps</Text>
                    <Text>Shocks</Text>
                    <Text>Shorts</Text>
                    <Text>Skirts and Dresses</Text>
                    <Text>Bags and Backpacks</Text>
                    <Text>Plus Size</Text>
                    <Text>Accessories and Equiments</Text>
                    <Text>All Sale Clothing</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Shop By Sport</Heading>
                    <Text>Running</Text>
                    <Text>Football</Text>
                    <Text>Basketball</Text>
                    <Text>Gym & Training</Text>
                    <Text>Yoga</Text>
                    <Text>Skateboarding</Text>
                    <Text>Tennis</Text>
                    <Text>Golf</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Shop By Brand</Heading>
                    <Text>Nike Sportswear</Text>
                    <Text>Nike By You</Text>
                    <Text>NikeLab</Text>
                    <Text>Jordan</Text>
                    <Text>ACG</Text>
                    <Text>NBA</Text>
                    <Text>Nike SB</Text>
                    
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Icons</Heading>
                    <Text>Air Force 1</Text>
                    <Text>Pegasus</Text>
                    <Text>Air Jordan 1</Text>
                    <Text>Blazer</Text>
                    <Text>Air Max</Text>
                    
                    </Box>
            </Flex>
        }
        />
        <HoverMenu text="Kids"
        item1={
            <Flex gap="20px" color="#111" >
                <Box >
                    <Heading fontSize="17px" marginBottom="15px">New & Featured</Heading>
                    <Text >New Releases</Text>
                    <Text>Member Access</Text>
                    <Text>Air Force 1</Text>
                    <Text>Bags and Backpacks</Text>
                    <Text>Jordan</Text>
                    <Text>Sale</Text>
                    </Box>
                    <Box >
                    <Heading fontSize="17px" marginBottom="15px">Boys Shoes</Heading>
                    <Text >Older Kids(3-6.5)</Text>
                    <Text>Younger Kids(10-2.5)</Text>
                    <Text>Air Force 1</Text>
                    <Text>Baby and Toddler(1.5-9.5)</Text>
                    <Text>Running</Text>
                    <Text>Football</Text>
                    <Text>Basketball</Text>
                    <Text>Lifestyle</Text>
                    <Text>Jordan</Text>
                    <Text>Sandles and Slides</Text>
                    <Text>All Shoes</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Girls Shoes</Heading>
                    <Text >Older Kids(3-6.5)</Text>
                    <Text>Younger Kids(10-2.5)</Text>
                    <Text>Air Force 1</Text>
                    <Text>Baby and Toddler(1.5-9.5)</Text>
                    <Text>Running</Text>
                    <Text>Football</Text>
                    <Text>Basketball</Text>
                    <Text>Lifestyle</Text>
                    <Text>Sandles and Slides</Text>
                    <Text>All Shoes</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Accessories and Equiments</Heading>
                    <Text >Balls</Text>
                    <Text>Bags and Backpacks</Text>
                    <Text>Socks</Text>
                    <Text>Hats and Headwear</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Shop By Sport </Heading>
                    <Text>Running</Text>
                    <Text>Football</Text>
                    <Text>Basketball</Text>
                    <Text>Gym & Training</Text>
                    <Text>Tennis</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Boys' Clothing</Heading>
                    <Text>Tops & T-Shirts</Text>
                    <Text>Hoddies & Sweatshirts</Text>
                    <Text>Pants & Leggings</Text>
                    <Text>Shorts</Text>
                    <Text>All Boys' Clothing</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Girls' Clothing</Heading>
                    <Text>Tops & T-Shirts</Text>
                    <Text>Sports Bra</Text>
                    <Text>Hoddies & Sweatshirts</Text>
                    <Text>Pants & Leggings</Text>
                    <Text>Shorts</Text>
                    <Text>All Boys' Clothing</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu text="Customise"
        item1={
            <Flex gap="20px" color="#111" >
                <Box >
                <Heading fontSize="17px" marginBottom="15px">Featured</Heading>
                    <Text>Nike By You New Releases</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Nike By You</Heading>
                    <Text>Men</Text>
                    <Text>Women</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">By Sport</Heading>
                    <Text>Lifestyle</Text>
                    <Text>Running</Text>
                    <Text>Football</Text>
                    <Text>Basketball</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Icons</Heading>
                    <Text>Air Max</Text>
                    <Text>Air Force 1</Text>
                    <Text>free</Text>
                    <Text>Flyknit</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu text="Sale"
        item1={
            <Flex gap="20px" color="#111" >
                <Box >
                <Heading fontSize="17px" marginBottom="15px">Featured</Heading>
                    <Text>Shop All Sale</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Men's Sale</Heading>
                    <Text>Shoes</Text>
                    <Text>Clothing</Text>
                    <Text>Accessories and Equiment</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Women's Sale</Heading>
                    <Text>Shoes</Text>
                    <Text>Clothing</Text>
                    <Text>Accessories and Equiment</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Kid's Sale</Heading>
                    <Text>Shoes</Text>
                    <Text>Clothing</Text>
                    <Text>Accessories and Equiment</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu text="Gifts"
        item1={
            <Flex gap="20px" color="#111" >
                <Box >
                <Heading fontSize="17px" marginBottom="15px">Gifts For All</Heading>
                    <Text >Shop All Gifts</Text>
                    <Text>Guide Gift</Text>
                    <Text>For The Runner</Text>
                    <Text>For The Nike Lover</Text>
                    <Text>For The Lil & Big Kids</Text>
                    <Text>For The Sneakers</Text>
                    <Text>For The Moms and Moms-To-Be</Text>
                    <Text>For The Whole Family</Text>
                    <Text>For The Lovers</Text>
                    <Text>For The Pastel Lover</Text>
                    <Text>For The Gym Enthusiast</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Top Gifts For Him</Heading>
                    <Text >Shop All Gifts</Text>
                    <Text>Shoes</Text>
                    <Text>Clothing</Text>
                    <Text>Accessories and Equiment</Text>
                    <Text>On Sale</Text>
                    
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Top Gifts For Her</Heading>
                    <Text >Shop All Gifts</Text>
                    <Text>Shoes</Text>
                    <Text>Clothing</Text>
                    <Text>Accessories and Equiment</Text>
                    <Text>On Sale</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Top Gifts For Kid's</Heading>
                    <Text >Shop All Gifts</Text>
                    <Text>Shoes</Text>
                    <Text>Clothing</Text>
                    <Text>Accessories and Equiment</Text>
                    <Text>On Sale</Text>
                    </Box>
                    <Box>
                    <Heading fontSize="17px" marginBottom="15px">Gifts By Price</Heading>
                    <Text >Gifts ₹ 3000.00 and Under</Text>
                    <Text>Gifts ₹ 3000.00 - ₹ 6000.00</Text>
                    <Text>Gifts ₹ 6000.00 - ₹ 9000.00</Text>
                    <Text>Gifts above ₹ 9000.00</Text>
                    </Box>
            </Flex>
        }
        />
       
       
       </Flex>
    )
}
export default MenuNav;