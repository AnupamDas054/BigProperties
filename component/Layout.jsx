import Head from "next/head";
import {Box} from '@chakra-ui/react'
import NavBar from "./Navbar";
import Footer from './Footer'

const Layout =({children})=>(
        <>
           <Head>Big Properties</Head>
           <Box maxWidth={{md:"100%", base:"100%",lg:"84%"}}  m="0px auto">
              <header>
                  <NavBar/>
              </header>
              <main>
                {children}
              </main>
              <footer>
                  <Footer/>
              </footer>

            </Box>
        
        </>  
       
    )

export default Layout;
