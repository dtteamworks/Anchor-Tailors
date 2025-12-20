import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
    {/* <div className="min-h-screen"></div> */}
    </>
  )
}

export default page