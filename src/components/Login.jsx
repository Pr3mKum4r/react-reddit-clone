import { Button, Divider, Image, InputGroup, Input } from "@chakra-ui/react";
import "./Login.css";
import googleLogo from '/assets/googleLogo.png';
import appleLogo from '/assets/appleLogo.png';


const Login = () => {
  return (
    <div className="login-container">
      <h1>Log In</h1>
      <p>
        By continuing, you are setting up a Reddit account and agree to our <a href='https://www.redditinc.com/policies/user-agreement' target="_blank">User
        Agreement</a> and <a href='https://www.reddit.com/policies/privacy-policy' target="_blank"> Privacy Policy</a>.
      </p>
      <Button
        bg={"white"}
        color="gray.600"
        display={"flex"}
        align={"center"}
        width={"100%"}
        borderRadius={"20px"}
        border={"1px solid grey"}
        mb={"10px"}
        mt={"30px"}
        pl={"0px"}
        _hover={{ bgColor: "gray.50" }}
      >
        <Image
          src={googleLogo}
          height={"20px"}
          ml={"2px"}
          mr={"20px"}
        ></Image>
        Continue with Google{" "}
      </Button>
      <Button
        bg={"white"}
        color="gray.600"
        display={"flex"}
        align={"center"}
        width={"100%"}
        borderRadius={"20px"}
        border={"1px solid grey"}
        mb={"30px"}
        pl={"0px"}
        _hover={{ bgColor: "gray.50" }}
      >
        <Image
          src={appleLogo}
          height={"20px"}
          ml={"0px"}
          mr={"25px"}
        ></Image>
        Continue with Apple{" "}
      </Button>
      <Divider></Divider>

      <InputGroup mb={'15px'} mt={'30px'}>
        <Input
          type="text"
          placeholder="Username"
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
            bg: "white",
          }}
          _hover={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
            bg: "white",
          }}
          height={"40px"}
          bg={"gray.50"}
          borderRadius={"20px"}
        />
      </InputGroup>
      <InputGroup mb={'20px'}>
      <Input
          type="password"
          placeholder="Password"
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
            bg: "white",
          }}
          _hover={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
            bg: "white",
          }}
          height={"40px"}
          bg={"gray.50"}
          borderRadius={"20px"}
        />
        </InputGroup>
        <p>Forgot your username or password?</p>
        <Button
            marginTop={'20px'}
            marginRight={"5px"}
            borderRadius={"60px"}
            fontSize={"10pt"}
            width={"100%"}
            p={"0px"}
            height={"40px"}
            fontWeight={700}
            color={"white"}
            bg={"orangered"}
            _hover={{ opacity: 0.9 }}
            onClick={()=>{setIsLogin(true)}}
          >
            Log In
          </Button>
    </div>
  );
};

export default Login;
