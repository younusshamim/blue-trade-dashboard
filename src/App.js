import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Routes from './routes/Routes'
import { RouterProvider } from 'react-router-dom';
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={Routes} />
    </ChakraProvider>
  );
}

export default App;
