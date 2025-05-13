import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Report from './Pages/Report'
import Handover from './PageCompo/Handover'
import Shadehold from './PageCompo/Shadehold'
import Excessfabric from './PageCompo/Excessfabric'
import Handovershow from './PageCompo/Handovershow'
function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/handover' element={<Handover/>}/>
      <Route path='/shadehold' element={<Shadehold/>}/>
      <Route path='/excessfabric' element={<Excessfabric/>}/>
      <Route path='/handovershow' element={<Handovershow/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
