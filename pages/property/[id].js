import {Box, Text, Spacer, Flex, Avatar} from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go'
import millify from 'millify';
import ImageScrollbar from '../../component/ImageScrollbar';

import {URL, fetchApi} from '../../utils/fetchApi';

 const PropertyDetails  = ({PropertyDetails:{price, rentFrequency, rooms,title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos}})=>(
     <Box maxWidth="1000px" margin="auto" p="4">
        {photos && <ImageScrollbar data={photos} /> } 
        <Box w="full" p="6">
        <Flex paddingTop="3" justifyContent="space-between" alignItems="center">

            <Flex justifyContent="center" alignItems="center">
                <Box paddingRight={3} color="green.400">
                    {isVerified && <GoVerified />}
                </Box>

                <Text fontWeight="bold" fontSize="lg">
                    BDT {millify(price)}
                    {rentFrequency && `/${rentFrequency}`}
                </Text>
            </Flex>

            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>

          </Flex>

          <Flex alignItems="center" p="1" justifyContent="space-between" width="240px" color="black.300" fontSize="20">
            {rooms} <FaBed size="25" />| {baths} <FaBath size="25" /> |{millify(area)} sqft <BsGridFill size="25" />
          </Flex>

          <Text fontSize="lg">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
         
        <Box marginTop='2'>
           <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
           <Text lineHeight='2' color='gray.600'>{description}</Text>
        </Box>

    <Flex flexWrap='wrap' textTransform='uppercase' >
      <Flex w='200px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text fontWeight="bold">Type</Text>
        <Text marginLeft="10" color="red.800">{type}</Text>
      </Flex>

      <Flex  w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text fontWeight="bold">Purpose</Text>
        <Text marginLeft="10" color="red.800">{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex  w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
          <Text fontWeight='bold'>Furnishing Status</Text>
          <Text  color="red.600" marginLeft="10">{furnishingStatus}</Text>
        </Flex>
      )}
    </Flex>
    <Box>
        {console.log(amenities)}
      {amenities.length && <Text fontSize='xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
        <Flex flexWrap='wrap'>
          {amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                  {amenity.text}
                </Text>
              ))
          ))}
        </Flex>
    </Box>
  </Box>     
     </Box>
 )

 export default PropertyDetails;

 export async function getServerSideProps({params:{id}}){

    const data = await fetchApi(`${URL}/properties/detail?externalID=${id}`);

    return {
        props: {
            PropertyDetails: data,
        }
    }
 }

