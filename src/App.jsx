import React from 'react'
import ProductPage from './Component/ProductPage'
import GratitudeSection from './Component/GratitudeSection'
import ImageSlider from './Component/ImageSlider'
import MenualSection from './Component/MenualSection'
import ProductSection from './Component/ProductSection'
import TestimonialCarousel from './Component/testimonials'
import FaqSection from './Component/FaqSection'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
const App = () => {
  return (
    <div className="">
      <Navbar/>
      <ProductPage />
      <GratitudeSection />
      <ImageSlider/>
      <MenualSection/>
      <ProductSection/>
      <TestimonialCarousel/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

export default App