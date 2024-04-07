import React from 'react'
import Navbar from "./Navbar"
import Main from './Main'
import Footer from './Footer'

function Verify() {
  return (
    <section className='flex flex-col justify-center'>
        <Navbar />
        <Main />
        <Footer />
    </section>
  )
}

export default Verify