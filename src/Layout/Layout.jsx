import React from 'react'
import Home from '../Pages/Home/Home'
import Header from '../Pages/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer/Footer'

export default function Layout() {
  return (
    <div>
<Header></Header>
   <Outlet></Outlet>
   <Footer></Footer>
    </div>
  )
}
