
//use reference from react router site...


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github, { githubLoaderInfo } from './component/GitHub/Github.jsx'

//apde createBrowserRouter aa method ma array pass karvano hoi pachi aema object banavine, "path" and "element" apvana hoi.and apde haji children tarike haji array of object banaviye and same as aeme pan apde path and element apta resu..

// tok ma apdi pase router ma pela aek root path che "/" and aeno element che Layout file and Layout file ni khasiyat ae che k aema apde Outlet no use karyo che so aema header adn footer same rese amd je vache outlet mukyu aema badho change avse..so layout ae apdu root element kai sakiye then apdi pase ave che children . ama apde have nesting karsu km k have header and footer ni vache nav bar na badha element shoe karavsu soo..apde children ma pacho array of object banavsu and drek object path and element api desu so have jem jem new element banavsu aene apde children vada ma nesting(add) karta resu.km k badhu handling ae router thi j thay che so apde badho path and element apde router ma j api devanu..

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"", //aa path khali che km k upar no je main path che "/" aena mate aa element run thase..
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])



//SECOND METHOD FOR CREATING ROUTES.....
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>} loader={githubLoaderInfo} /> {/* loader ae special ave jena use thi apde api call pela j kari sakiye so data fetching pela start thy jai and badho data cache ma rakhe so ama apde github par click kariye aeni pela apde hover kariye tyare api call thy jai so optimization thy jai.apde loader ma api pn call karavi sakiye and method pan pass kari sakiye */}
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* apde react router no use kariye chhiye so apde app ne render nai kariye apde direct routerProvider ne j call karsu and e aek argument le che "router" so apde router banavvu padse */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
