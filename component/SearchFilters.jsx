import { useEffect, useState } from "react";
import { Flex,Icon, Spinner,Text,Select,Box,Input,Button} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";
import { URL, fetchApi } from "../utils/fetchApi";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  const router= useRouter();

  const searchProperties = (filterValues) => {

    const path= router.pathname;
    const {query} =router;
    const value =getFilterValues(filterValues); 
    value.forEach((item)=>{
        if(item.value && filterValues?.[item.name]){
        query[item.name] =item.value;
        }
    })

    router.push({pathname: path, query})
  };
  return (
    <Flex
      bg="gray.100"
      justifyContent="center"
    
      p="1"
      flexWrap="wrap"
      
    >
      {filters.map((filter) => (
        <Box alignItem="center" justifyContent="center" p="4" key={filter.queryName}>
          <Select
            w="fit-content"
            placeholder={filter.placeholder}
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
              {filter?.items?.map((item)=>(
                
                <option value={item.value} key={item.value}>{item.name}</option>
                
              ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
