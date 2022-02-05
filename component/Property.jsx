import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import house from '../assets/img/house.png'

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  // const otherUrl ='https://www.google.com/search?q=house+image&rlz=1C1BNSD_enBD981BD981&tbm=isch&source=iu&ictx=1&vet=1&fir=PCj5VWGURIThbM%252Cw_edFuvJNI2ApM%252C_%253B0SAWoxXnTR-eeM%252CbKDeuT6CmsQXXM%252C_%253BthMlS0RPQ8aV0M%252CY7a05My4O6chTM%252C_%253BOH_4HT0k9esJrM%252CpOKaSh3YkKiy2M%252C_%253BLOAHUOPeDQPEbM%252Cg9WlojmsydTXDM%252C_%253BlE0dBdOmDMhXJM%252CcGGSkmVy9GNy4M%252C_%253BsbMt-fG2dtUaKM%252CbCigr3d4njUkyM%252C_%253BnkztvE2FO-0EmM%252C3Cjyk46L03lySM%252C_%253BUvApIPjufC3-EM%252CbKDeuT6CmsQXXM%252C_%253BcxSui2xRRpj2VM%252Cg9WlojmsydTXDM%252C_%253BYXXIYZNUX61k7M%252CM8y_Ud5ksk7htM%252C_%253BcnEyoWvRBi8sLM%252Cw_edFuvJNI2ApM%252C_%253B8gSi_cWcyjxeWM%252Cw_edFuvJNI2ApM%252C_&usg=AI4_-kRup06Crpr2pBwCw_tJFw0b8neMUA&sa=X&ved=2ahUKEwj__8C97931AhWeUGwGHaQYBDIQ9QF6BAggEAE#imgrc=thMlS0RPQ8aV0M';
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      <Link href={`/property/${externalID}`} passHref>
      
    
      <Flex
        flexWrap='wrap'
        flexDirection="column"
        p={{base:'',md:'4',lg:'1'}}
       m={{base:'4',md:'5',lg:'3'}}
        
        paddingTop="0"
        justifyContent="center"     
        curson="pointer"
        border="1px solid gray"
        borderRadius="4"
      >
        <Box>
            <Image
              src={coverPhoto ? coverPhoto.url : house }
              alt="image"
              m="auto"
              p="5"
              width='390'
              height={280}
              objectFit="cover"
            />
          
        </Box>

        <Box>
          <Flex
            paddingTop="3"
            justifyContent="space-between"
            alignItems="center"
          >
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
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            width="240px"
            color="black.300"
            fontSize="20"
          >
            {rooms}
            <FaBed size="25" />| {baths}
            <FaBath size="25" /> |{millify(area)} sqft <BsGridFill size="25" />
          </Flex>
          <Text fontSize="lg">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
      </Link>
    </Flex>
  );
};

export default Property;
