import { Button, Image, Text } from "@chakra-ui/react";
import "./Header.css";
import channelLogo from '../../public/assets/channelLogo.jpeg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="banner"></div>
      <div className="details-container">
        <div className="channel-details">
          <Image
            src={channelLogo}
            height={"75px"}
            width={"75px"}
            borderRadius={"40px"}
            position={"relative"}
            top={-4}
            border='5px solid white'
          />
          <Text position={'absolute'} fontSize={'10pt'} fontWeight={500} left={'80px'} top={'189px'} cursor={'pointer'} display={{base: 'none', md: 'unset'}}>Posts</Text>
          <div className="horizontal-line"></div>
          <div className="channel-id">
            <div className="channel-name-handle">
              <Text fontWeight={700} fontSize={'20pt'}>Prem Kumar Tech News</Text>
              <Text fontWeight={500} fontSize={'10pt'} color={'grey'}>r/premkumartechie</Text>
            </div>
            <Button
                color="white"
                borderRadius="20px"
                bgColor={"blue.500"}
                width={"80px"}
                height={"30px"}
                fontSize={"11pt"}
                align="center"
                ml={"10px"}
                _hover={{bgColor: 'blue.500', opacity: 0.8}}
              >
                Join
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
