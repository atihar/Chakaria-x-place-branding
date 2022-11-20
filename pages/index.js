import React from 'react'
import Eat from '../components/eats'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Map from '../components/map'
import Stay from '../components/stay'
import Head from 'next/head'

function Home() {
  return (
    <>
    <Head>
        <title>Chakaria - Greatest Upazila of Cox&apos;s Bazar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description"
        content="Chakaria superb place with natural landscapes located 60km ahead of cox&apos;s-bazar. The hills of bandarban-alikadam and the Bay of Bengal has surrounded this area of 643.46 km2. Once there was a mangrove forest named Chakaria Sunderban here. But now it is no more. But yet this place has a lot of offerings to do and its turning 
        into a popular tourist destination."/>
        <meta name="keywords" content="chakaria, cox&apos;s bazar, chittagong division, chakaria shop, chiringa, alikodom, sonadiya, place to visit in Bangladesh, place to visit in cox&apos;s bazar, চকরিয়া, chiringa, chakaria news, chakaria tourist spot, chakaria hotel" />
      </Head>
    <Hero/>
    <Stay/>
    <Eat/>
    <Map/>
    <Footer/>
    </>
  )
}

export default Home