import {
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <InputGroup borderRadius={'30px'}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.100"  mb={2}/>}
        />
        <Input type="text" placeholder="Search Reddit" _focus={{outline: 'none', border: '1px solid', borderColor: 'blue.500', bg: 'white'}} _hover={{outline: 'none', border: '1px solid', borderColor: 'blue.500', bg: 'white'}} height={'35px'} bg={'gray.50'} borderRadius={'20px'}/>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
