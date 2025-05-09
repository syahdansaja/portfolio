import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from "./pages/Home";
import AboutMe from './pages/AboutMe';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutme' element={<AboutMe />} />
    </Routes>
  </BrowserRouter>,
)
