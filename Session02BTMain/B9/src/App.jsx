import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import ListProduct from './body/ListProduct'
import CountListProduct from './components/CountListProduct'

export default function App() {
  return (
    <>
      <Header/>
      <CountListProduct/>
      <Footer/>
    </>
  )
}
