import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    Flex,
  } from "@chakra-ui/react"
  import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
  
  export default function HoverMenu({text,item1,item2,item3}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                {text} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} zIndex={5} >   
                <MenuItem>{item1}</MenuItem>
                <MenuItem>{item2}</MenuItem>
                <MenuItem>{item3}</MenuItem>
            </MenuList>
       </Menu>
  )
  }

