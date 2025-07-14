import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Home/Hero'
import Courch from './Component/Home/Courch'
import CourseSection from './Component/Home/CourseSection '
import TestimonialSection from './Component/Home/TestimonialSection'
import TeamSection from './Component/Home/TeamSection'
import Footer from './Component/Home/Footer'
const App = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <Hero/>
      <Courch/>
      <CourseSection/>
      <TestimonialSection/>
      <TeamSection/>
      <Footer/>
    </div>
  )
}

export default App