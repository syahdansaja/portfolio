import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from "./pages/Home";
import AboutMe from './pages/AboutMe';
import Certificate from './pages/Certificate';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutme' element={<AboutMe />} />
      <Route path='/projects' element={<Project />} />
      <Route path='/certificates' element={<Certificate />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
