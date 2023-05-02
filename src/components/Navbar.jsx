import { Button, Center, Divider, Image, Text } from "@chakra-ui/react";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import { ChatIcon, ChevronDownIcon, QuestionOutlineIcon, InfoOutlineIcon, CalendarIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBullhorn, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "./LoginModal";
import { useState } from "react";
import GetAppModal from "./GetAppModal";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import redditLogo from '../../public/assets/redditLogo.png';
import redditLogoText from '../../public/assets/redditLogoText';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isGetApp, setGetApp] = useState(false);
  return (
    <Center width={"100%"} display={"block"}>
      <div className="navbar">
        <div className="logo-container">
          <Image src={redditLogo} height={"30px"} />
          <Image
            src={redditLogoText}
            height={"20px"}
            marginLeft={"10px"}
            marginRight={"10px"}
            display={{ base: "none", md: "unset" }}
          />
        </div>
        <SearchBar />
        <div className="btn-container">
          <Button
            marginRight={"30px"}
            borderRadius={"60px"}
            fontSize={"10pt"}
            fontWeight={700}
            width={"100px"}
            p={"0px"}
            height={"35px"}
            display={{ base: "none", md: "flex" }}
            onClick={() => {
              setGetApp(true);
            }}
          >
            <ChatIcon mr={"7px"}></ChatIcon>
            Get App
          </Button>
          <GetAppModal
            isGetApp={isGetApp}
            onClose={() => {
              setGetApp(false);
            }}
          />
          <Button
            marginRight={"5px"}
            borderRadius={"60px"}
            fontSize={"10pt"}
            width={"100px"}
            p={"0px"}
            height={"35px"}
            fontWeight={700}
            color={"white"}
            bg={"orangered"}
            _hover={{ opacity: 0.9 }}
            display={{ base: "none", md: "flex" }}
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Log In
          </Button>
          <LoginModal
            isLogin={isLogin}
            onClose={() => {
              setIsLogin(false);
            }}
          />
          {/* <Button
            bg={"white"}
            m={"2px"}
            border={"1px white solid"}
            _hover={{ borderColor: "grey" }}
          >
            <FontAwesomeIcon icon={faUser} />
            <ChevronDownIcon m={"5px"}></ChevronDownIcon>
          </Button> */}
          <Menu>
            <MenuButton bg={"white"}
            m={"2px"}
            border={"1px white solid"}
            _hover={{ borderColor: "grey" }} _focus={{bg: 'white'}} as={Button} rightIcon={<ChevronDownIcon />}>
              <FontAwesomeIcon icon={faUser} />
            </MenuButton>
            <MenuList>
              <MenuItem><QuestionOutlineIcon/><Text ml={'5px'}>Help Center</Text></MenuItem>
              <MenuItem><InfoOutlineIcon/><Text ml={'5px'}>More</Text></MenuItem>
              <MenuItem><CalendarIcon/><Text ml={'5px'}>Terms & Policies</Text></MenuItem>
              <MenuItem><FontAwesomeIcon icon={faBullhorn} /><Text ml={'5px'}>Advertise on Reddit</Text></MenuItem>
              <Divider/>
              <MenuItem onClick={() => {
              setIsLogin(true);
            }}><FontAwesomeIcon icon={faArrowRightToBracket} /><Text ml={'5px'}>Log In/Sign Up</Text></MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Center>
  );
};

export default Navbar;
