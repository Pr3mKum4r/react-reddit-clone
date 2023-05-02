import "./Post.css";
import { Button, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ChatIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faBookmark,
  faFire,
  faSun,
  faRankingStar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import upArrow from '../../public/assets/up-arrow.png';
import downArrow from '../../public/assets/down-arrow.png';


const Post = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="posts">
      <div className="post-options">
        <Button
          bgColor={"grey.10"}
          height={"30px"}
          borderRadius={"20px"}
          marginRight={"10px"}
        >
          <FontAwesomeIcon
            icon={faFire}
            style={{ color: "#008cff" }}
            height={"40px"}
          />
          <Text color={"blue.400"} fontWeight={700} ml={"10px"}>
            Hot
          </Text>
        </Button>
        <Button
          bgColor={"grey.10"}
          height={"30px"}
          borderRadius={"20px"}
          marginRight={"10px"}
        >
          <FontAwesomeIcon icon={faSun} style={{ color: "#949494" }} />
          <Text color={"gray"} fontWeight={700} ml={"10px"}>
            New
          </Text>
        </Button>
        <Button
          bgColor={"grey.10"}
          height={"30px"}
          borderRadius={"20px"}
          marginRight={"10px"}
        >
          <FontAwesomeIcon icon={faRankingStar} style={{ color: "#949494" }} />
          <Text color={"gray"} fontWeight={700} ml={"10px"}>
            Top
          </Text>
        </Button>
        <Button
          bgColor={"grey.10"}
          height={"30px"}
          borderRadius={"20px"}
          marginRight={"10px"}
        >
          <FontAwesomeIcon icon={faChartLine} style={{ color: "#949494" }} />
          <Text color={"gray"} fontWeight={700} ml={"10px"}>
            Rising
          </Text>
        </Button>
      </div>
      <div className="post-container">
        <div className="votes">
          <Button
            padding={"0px"}
            bgColor={"inherit"}
            _hover={{ bgColor: "inherit", opacity: 0.8 }}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <Image src={upArrow} />
          </Button>
          <p className="count">{count}</p>
          <Button
            padding={"0px"}
            bgColor={"inherit"}
            _hover={{ bgColor: "inherit", opacity: 0.8 }}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <Image src={downArrow} />
          </Button>
        </div>
        <div className="post-content-container">
          <Stack spacing={1} p="10px">
            <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
              <Text fontWeight={"600"}>r/premkumar</Text>
              <Text color={"grey"}>. Posted by u/pr3mkum4r 6 hours ago</Text>
            </Stack>
            <Stack direction="row" spacing={0.6} align={"center"}>
              <Text fontSize={"12pt"} fontWeight={650} mr={"5px"}>
                How to clone reddit using react
              </Text>
              <Button
                color="white"
                borderRadius="10px"
                bgColor={"blue.500"}
                width={"80px"}
                height={"20px"}
                fontSize={"9pt"}
                align="center"
                ml={"2px"}
                _hover={{ bgColor: "blue.500", opacity: 0.8 }}
              >
                Discussion
              </Button>
            </Stack>
            <Text fontSize={"10pt"}>
              To create a Reddit clone using React, you will need to start by
              setting up the basic project structure and installing the
              necessary dependencies. Next, you can design the user interface
              and create the components needed for the various features of the
              site, such as posts, comments, and user profiles. To handle the
              data, you can use a back-end server or a mock API. Finally, you
              can integrate the components with the data layer and add any
              necessary logic to make the site functional. With a little bit of
              patience and persistence, you can have your own Reddit clone up
              and running in no time!
            </Text>
            <div className="interaction-container">
              <div className="comment-container">
                <ChatIcon></ChatIcon>
                <Text ml={"5px"} fontSize={"9pt"}>
                  4
                </Text>
                <Text ml={"5px"} fontSize={"9pt"}>
                  Comments
                </Text>
              </div>
              <div className="share-container">
                <FontAwesomeIcon icon={faUpRightFromSquare} />
                <Text ml={"5px"} fontSize={"9pt"}>
                  Share
                </Text>
              </div>
              <div className="save-container">
                <FontAwesomeIcon icon={faBookmark} />
                <Text ml={"5px"} fontSize={"9pt"}>
                  Save
                </Text>
              </div>
            </div>
          </Stack>
        </div>
      </div>

      <div className="post-container">
        <div className="votes">
          <Button
            padding={"0px"}
            bgColor={"inherit"}
            _hover={{ bgColor: "inherit", opacity: 0.8 }}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <Image src={upArrow} />
          </Button>
          <p className="count">{count}</p>
          <Button
            padding={"0px"}
            bgColor={"inherit"}
            _hover={{ bgColor: "inherit", opacity: 0.8 }}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <Image src={downArrow} />
          </Button>
        </div>
        <div className="post-content-container">
          <Stack spacing={1} p="10px">
            <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
              <Text fontWeight={"600"}>r/premkumar</Text>
              <Text color={"grey"}>. Posted by u/Hybr1dPr3m 9 hours ago</Text>
            </Stack>
            <Stack direction="row" spacing={0.6} align={"center"}>
              <Text fontSize={"12pt"} fontWeight={650} mr={"5px"}>
                Microsoft Acquires Nuance Communications for $19.7 Billion
              </Text>
              <Button
                color="white"
                borderRadius="10px"
                bgColor={"blue.500"}
                width={"80px"}
                height={"20px"}
                fontSize={"9pt"}
                align="center"
                ml={"2px"}
                _hover={{ bgColor: "blue.500", opacity: 0.8 }}
              >
                Discussion
              </Button>
            </Stack>
            <Image src='/assets/microsoftBuy.png'/>
            <Text fontSize={"10pt"}>
              Microsoft has announced its acquisition of Nuance Communications,
              a leading provider of speech recognition and artificial
              intelligence solutions, for $19.7 billion. The deal is expected to
              strengthen Microsoft's position in the healthcare industry, as
              Nuance is a major player in providing AI-powered solutions for
              clinical documentation and decision-making.
            </Text>
            <Text fontSize={"10pt"}>
              The acquisition is also expected to enhance Microsoft's cloud
              offerings, as Nuance's technology can be integrated into products
              such as Microsoft Teams and Dynamics 365. This move is part of
              Microsoft's ongoing efforts to expand its presence in the
              healthcare industry and leverage the power of AI to improve
              patient outcomes.
            </Text>
            <div className="interaction-container">
              <div className="comment-container">
                <ChatIcon></ChatIcon>
                <Text ml={"5px"} fontSize={"9pt"}>
                  19
                </Text>
                <Text ml={"5px"} fontSize={"9pt"}>
                  Comments
                </Text>
              </div>
              <div className="share-container">
                <FontAwesomeIcon icon={faUpRightFromSquare} />
                <Text ml={"5px"} fontSize={"9pt"}>
                  Share
                </Text>
              </div>
              <div className="save-container">
                <FontAwesomeIcon icon={faBookmark} />
                <Text ml={"5px"} fontSize={"9pt"}>
                  Save
                </Text>
              </div>
            </div>
          </Stack>
        </div>
      </div>

      <div className="post-container">
        <div className="votes">
          <Button
            padding={"0px"}
            bgColor={"inherit"}
            _hover={{ bgColor: "inherit", opacity: 0.8 }}
            onClick={() => {
              setCount2(count2 + 1);
            }}
          >
            <Image src={upArrow} />
          </Button>
          <p className="count">{count2}</p>
          <Button
            padding={"0px"}
            bgColor={"inherit"}
            _hover={{ bgColor: "inherit", opacity: 0.8 }}
            onClick={() => {
              setCount2(count2 - 1);
            }}
          >
            <Image src={downArrow} />
          </Button>
        </div>
        <div className="post-content-container">
          <Stack spacing={1} p="10px">
            <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
              <Text fontWeight={"600"}>r/premkumar</Text>
              <Text color={"grey"}>
                . Posted by u/hybridgamer410 13 hours ago
              </Text>
            </Stack>
            <Stack direction="row" spacing={0.6} align={"center"}>
              <Text fontSize={"12pt"} fontWeight={650} mr={"5px"}>
                Why Next.js is the Future of Web Development
              </Text>
              <Button
                color="white"
                borderRadius="10px"
                bgColor={"blue.500"}
                width={"80px"}
                height={"20px"}
                fontSize={"9pt"}
                align="center"
                ml={"2px"}
                _hover={{ bgColor: "blue.500", opacity: 0.8 }}
              >
                Discussion
              </Button>
            </Stack>
            <Text fontSize={"10pt"}>
              Next.js is a powerful and versatile framework for building web
              applications. It is built on top of React and provides many
              additional features that make it an ideal choice for modern web
              development. One of the key benefits of Next.js is its server-side
              rendering capabilities, which enable faster page load times and
              improved search engine optimization.
            </Text>
            <Text fontSize={"10pt"}>
              Another advantage of Next.js is its support for static site
              generation. This means that you can pre-render your pages at build
              time and serve them as static files, which can significantly
              improve performance and reduce server load. Additionally, Next.js
              has excellent support for CSS modules and other modern front-end
              technologies, making it easy to build beautiful and responsive
              user interfaces.
            </Text>
            <div className="interaction-container">
              <div className="comment-container">
                <ChatIcon></ChatIcon>
                <Text ml={"5px"} fontSize={"9pt"}>
                  13
                </Text>
                <Text ml={"5px"} fontSize={"9pt"}>
                  Comments
                </Text>
              </div>
              <div className="share-container">
                <FontAwesomeIcon icon={faUpRightFromSquare} />
                <Text ml={"5px"} fontSize={"9pt"}>
                  Share
                </Text>
              </div>
              <div className="save-container">
                <FontAwesomeIcon icon={faBookmark} />
                <Text ml={"5px"} fontSize={"9pt"}>
                  Save
                </Text>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Post;
