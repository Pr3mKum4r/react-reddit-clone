import { Divider, Stack, Text } from "@chakra-ui/react";
import "./AboutChannel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCakeCandles, faCircle } from "@fortawesome/free-solid-svg-icons";

const AboutChannel = () => {
  return (
    <div className="about-channel-container">
      <div className="about-header">
        <Text fontWeight={'500'}>About Community</Text>
        <FontAwesomeIcon icon={faEllipsis} cursor={"pointer"} />
      </div>
      <div className="about-content">
        <div className="description">
            <Text>The official subreddit for latest tech news. Join to get the latest updates of the tech world.</Text>
        </div>
        <div className="origin-date">
            <FontAwesomeIcon icon={faCakeCandles} />
            <Text color={'gray'} marginLeft={'15px'}>Created May 1, 2023</Text>
        </div>
        <Divider/>
        <div className="member-count">
            <div className="total-members">
                <Text fontWeight={700}>450</Text>
                <Text>Members</Text>
            </div>
            <div className="online-members">
                <div className="online">
                    <FontAwesomeIcon icon={faCircle} style={{color: "#0fdf0c", height: '7px', width: '7px'}} />
                    <Text fontWeight={700} ml={'5px'}>90</Text>
                </div>
                <Text>Online</Text>
            </div>
        </div>  
      </div>
      
    </div>
  );
};

export default AboutChannel;
