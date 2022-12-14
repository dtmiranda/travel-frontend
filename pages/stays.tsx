import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PhotoCover from "../components/PhotoCover";

export default function StaysPage(){
  return(
    <>
      <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <section>
        <PhotoCover/>

        </section>
      </main>
          


      <Footer/> 
    
    
    </>
  )
}