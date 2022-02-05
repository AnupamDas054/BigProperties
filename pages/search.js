import { useState } from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {Flex,Box, Icon, Text} from '@chakra-ui/react'
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../component/SearchFilters";
import Property from "../component/Property";
import {URL, fetchApi} from '../utils/fetchApi'
import download from '../assets/img/download.png'
const Search = ({properties})=>{

    const [seachFilter, setSearchFilter] =useState(false);
    const router = useRouter();
    
    return(
        <Box>
            <Flex
            cursor="pointer"
            bg="blue.600"
            borderBottom="1px"
            p="2"
            color='white'
            fontWeight="bold"
            fontSize="lg"
            justifyContent="center"
            alignItems="center"
            onClick={()=>setSearchFilter(!seachFilter)}
            >
            <Text>Search By Filters</Text>
            <Icon paddingLeft="2" w="7" as={BsFilter} color='white'/>
            </Flex>

            {seachFilter && <SearchFilters/>}
            
            <Text fontSize="2xl" fontWeight="bold" padding="2">
                properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap"> 
              {properties.map((property)=><Property property={property} key={property.id}/>)}
            </Flex>
             {properties.length===0 &&(
                <Flex justifyContent="center" alignItems="center">
                    <Image src={download} width="200" height="200" p="5" m="5"/>

                </Flex>
            )} 
        </Box>
    )
}

export default Search;




export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-sale';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
      props: {
        properties: data?.hits,
      },
    };
  }
  