import React from 'react'
import Eat from '../components/eats'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Map from '../components/map'
import Stay from '../components/stay'

function Home() {
  return (
    <>
    <Hero/>
    <Stay/>
    <Eat/>
    <Map/>
    <Footer/>
    </>
  )
}

export default Home