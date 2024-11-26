import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'

// outlet ae react-router-dom no bhag che...aene apde jya rakhsu ae bhag ne apde change kari saksu..apde ahiya header then outlet then footer apel che to headr and footer change nai thay bt outlet change thaya karse..
//outlet ne use karva generally aam aek alag file banavine karvanu hoi but apde ane app file ma b kari sakiye..
// so apde aa file use karva mate proper syntax hoi che so e follow karvo pade..apde main file ma kevu pade k hu layout file no use karu chu.simply apde apda router ma layout ne call karsu
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout