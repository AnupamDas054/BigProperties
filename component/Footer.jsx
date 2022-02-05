import {Box, Flex, Text} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {BsFacebook,BsLinkedin,BsGoogle,BsInstagram} from 'react-icons/bs';
const Footer =()=>(

    <Flex flexWrap='wrap' flexDirection={{base:"column",md:'column',lg:'row'}}  width={{base:'100%' , md:'100%'}} p="5" mb="4" justifyContent={{base:"center"}} alignItems={{base :"center"}} borderColor="gray.100" bg = "blue.600" borderTop="2px"color="white" borderBottomRadius={14}  >
           <Flex flexWrap='wrap' flexDirection="column" mr={{base:'25',lg:'360'}}>
                <Box >
                    <Text  align={{base:'center'}}fontSize={{base:"20", md:"25" , lg:"25"}} fontWeight={400} fontStyle="bold" mb="4" mt="-5">BigProperties</Text>
                </Box>
                <Flex  flexDirection={{base:'row',md:'row',lg:'row'}} justifyContent={{base:'center'}} alignItems={{base:'center'}}>
                    <IconButton  colorScheme='blue' size={{base:'sm',md:'sm',lg:'sm'}} p="3" mr="2" aria-label='facebook'icon={<BsFacebook/>}/>
                    <IconButton  colorScheme='blue' size={{base:'sm',md:'sm',lg:'sm'}} p="3" mr="2" aria-label='linkedin'icon={<BsLinkedin/>}/>
                    <IconButton  colorScheme='blue' size={{base:'sm',md:'sm',lg:'sm'}} p="3" mr="2" aria-label='google'icon={<BsGoogle/>}/>
                    <IconButton  colorScheme='blue' size={{base:'sm',md:'sm',lg:'sm'}} p="3"  aria-label='instagram'icon={<BsInstagram/>}/>
                  
                </Flex>
           </Flex>
           

           <Flex lineHeight={7} flexDirection={{base:"column",md:'row',lg:'row'}} mt={{base:'6'}} justifyContent={{base:'center'}} alignItems={{base:'center'}}>
                 <Flex flexDirection="column" mr={{lg:"20"}}  mb={{base:'5'}} >
                     <Text fontWeight="bold" fontSize="18">Company</Text>
                     <Text >Why Envelope</Text>
                     <Text >Our Story</Text>
                     <Text >Career</Text>
                     <Text >FAQ</Text>
                 </Flex>

                 <Flex flexDirection="column" mr={{lg:"20"}} mb={{base:'5'}}  >
                     <Box fontWeight="bold">Property</Box>
                     <Text>How it Works </Text>
                     <Text>pricing</Text>
                     <Text>Use Case</Text>
                     <Text>Integration</Text>
                 </Flex>

                 <Flex flexDirection="column" mr={{lg:"20"}}   mb={{base:'5'}}>
                     <Box fontWeight="bold">Resources</Box>
                     <Text>Blog</Text>
                     <Text>Partnership</Text>
                     <Text>CaseStudies</Text>
                     <Text>Help Center</Text>
                 </Flex>

                 <Flex flexDirection="column">
                     <Box fontWeight="bold">Contact</Box>
                     <Text>Login</Text>
                     <Text>Twitter</Text>
                     <Text>Chat with us</Text>
                     <Text>Email us</Text>
                 </Flex>
           </Flex>
    </Flex>
)

export default Footer;