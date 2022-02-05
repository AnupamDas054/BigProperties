import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import {URL, fetchApi} from '../utils/fetchApi'
import Property from "../component/Property";
const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  imagesURL,
  link,
  buttonText,
}) => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      m="10"
    >
      <Image src={imagesURL} width="500" height="300" alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize="xl" colorScheme="blue" variant="outline">
          <Link href={link}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home({saleProperties,rentProperties}) {

  //console.log(saleProperties,rentProperties);
  return (
    <Box>
      <Banner
        purpose="Rent a Home"
        title1="Rental Homes For"
        title2="Everyone"
        desc1="Explore Apartments , Villas & Homes "
        desc2="and more"
        imagesURL='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        link="/search?purpose-for-rent"
        buttonText="Explore Renting"
        
      />

      <Flex flexWrap="wrap">
        {rentProperties.map((property)=><Property property={property} key={property.id}/>)}
      </Flex>
       <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments and  floors,'
      desc2=' villas and more'
      imagesURL='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      link='/search?purpose=for-sale'
      buttonText='Explore Buying'
    />

<Flex flexWrap="wrap">
        {saleProperties.map((property)=><Property property={property} key={property.id}/>)}
      </Flex>
    </Box>
  );
}


export async function getStaticProps() {
  const saleProperty = await fetchApi(`${URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const rentProperty = await fetchApi(`${URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      saleProperties: saleProperty?.hits,
      rentProperties: rentProperty?.hits,
    },
  };
}