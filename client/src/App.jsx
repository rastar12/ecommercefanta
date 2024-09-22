import React from 'react'
import NavBar from './components/navBar'
import Hero from './components/Hero'
import Products from './components/products/products'
import Banner from './components/Banner/Banner'
import BannerText from './components/Banner/BannerText'
import Blogs from './components/Blogs/Blogs'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <main className='overflow-x-hidden'>
      <Hero/>
      <Products/>
      <Banner/>
      <BannerText/>
      <Blogs/>
      <FAQ/>
      <Footer/>
      </main>
  )
}
