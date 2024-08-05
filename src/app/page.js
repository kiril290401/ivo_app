import Image from "next/image";
import Navbar from "./Navbar";
import Header from "./Header";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";
import Head from "next/head";



export default function Home() {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
     <Navbar/>
     <Header/>  
     <Services/>
     <Contact/>
     <Footer/> 
    </>

  );
}
