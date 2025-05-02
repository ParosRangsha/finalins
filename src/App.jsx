import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import Post from './Pages/Post'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Report from './Pages/Report'

let multipage = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/report' element={<Report/>}/>
    </Route>
  </>
))
function App() {

 
  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
