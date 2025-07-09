import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Home/Hero'
import Partner from './Component/Home/Partner'
import About from './Component/Home/About'
import Service from './Component/Home/Service'
import WorkFlow from './Component/Home/WorkFlow'
import FAQ from './Component/Home/FAQ'
import BlogSection from './Component/Home/Blogsection'
import Footer from './Component/Footer'
import Contact from './Component/Home/Contact'

const App = () => {
  return (
    <div className='bg-gray-100'>
   <Navbar/>
   <Hero/>
   <Partner/>
   <About/>
   <Service/>
   <WorkFlow/>
   <FAQ/>
   <BlogSection/>
   <Contact/>
   <Footer/>
    </div>
  )
}

export default App