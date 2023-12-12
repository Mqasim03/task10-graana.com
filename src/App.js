// App.js
import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';



function App() {
  return (
    // <ChakraProvider>
    <>      <Navbar />
      <Sidebar />
      </>

    // </ChakraProvider>
  );
}

export default App;
