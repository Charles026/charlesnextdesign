import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

// pages/_app.js
// import { ChakraProvider } from '@chakra-ui/react'
// import customTheme from './theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <ChakraProvider theme={customTheme}> */}
        <Component {...pageProps} />
      {/* </ChakraProvider> */}
    </ThemeProvider>
  )
}

export default MyApp
