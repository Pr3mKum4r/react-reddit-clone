import './App.css';
import { ChakraProvider, Divider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Post from './components/Post';
import Header from './components/Header';
import { extendTheme } from "@chakra-ui/react";
import AboutChannel from './components/AboutChannel';

function App() {

  const myTheme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          bg: 'grey.100',
        }
      })
    },
  })

  return (
    <ChakraProvider theme={myTheme}>
      <Navbar/>
      <Divider/>
      <Header/>
      <div className='post-about-container'>
        <Post/>
        <AboutChannel/>
      </div>
    </ChakraProvider>
  )
}

export default App;
