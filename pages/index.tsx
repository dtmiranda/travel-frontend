import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Cover from '../components/Cover'
import Category from '../components/Category'

export default function Home() {
  return (
    <>
      <NavBar />

      <Cover/>
      <Category/>
                
      <Footer />
      
    </>
  )
   
}
