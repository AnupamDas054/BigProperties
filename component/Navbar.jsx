import { Menu, MenuButton, MenuList, MenuItem,Flex,Box,Spacer, IconButton,Button, Text, border,Stack} from '@chakra-ui/react';
import {FcMenu, FcAbout, FcHome, FcKey} from 'react-icons/fc';
import {BsSearch } from 'react-icons/bs';
import {FiKey} from 'react-icons/fi'
import Image from 'next/image';
import Link from 'next/link';

const NavBar =()=>(
    <Flex p={2} borderColor="gray.100" BorderBottom="1px" justifyContent={{sm:"flex-end", md:"space-between"}}>
        <Box fontSize="3xl" color="blue.500" fontWeight="bold" paddingLeft="2">
              <Link href='/' paddingLeft={2}>BigProperties </Link>
        </Box> 
        <Spacer/>
        
        <Stack direction='row' spacing={4} alignItems={{lg:"center"}}  display={{ base: "none", md: "block" ,lg:"block" }}>
            {/* <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined"/>
                <MenuList>
                    <Link href='/' passhref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passhref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passhref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passhref>
                        <MenuItem icon={<FcKey/>}>Rent Property</MenuItem>
                    </Link>

                </MenuList>
            </Menu> */}

                    <Link href='/' passhref>
                     <Button colorScheme='blue' variant="outline">Home</Button>
                    </Link>
                    <Link href='/search' passhref>
                        <Button colorScheme='blue' variant="outline">Search</Button>
                    </Link>
                    <Link href='/search?purpose=for-sale' passhref>
                        <Button colorScheme='blue' variant="outline">Buy Property</Button>
                    </Link>
                    <Link href='/search?purpose=for-rent' passhref>
                        <Button colorScheme='blue' variant="outline">Rent Property</Button>
                    </Link>


        </Stack>
        <Box  display={{ base: "block", md: "none", lg:"none"}} >
          <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined"/>
                <MenuList>
                    <Link href='/' passhref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passhref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passhref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passhref>
                        <MenuItem icon={<FcKey/>}>Rent Property</MenuItem>
                    </Link>

                </MenuList>
            </Menu>
        </Box>

    </Flex>
)

export default NavBar;