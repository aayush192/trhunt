import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Provider from './context/contextprovider.jsx'
import Layout from './layout/layout.jsx'
import {  createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './index.css'
import GameTypeSelector from './components/gameTypeSelector.jsx'
import SearchClue from './components/searchClue.jsx'
import ClueDisplay from './components/clueDisplay.jsx'

const router=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
   <Route path='' element={<GameTypeSelector/>}/>
   <Route path='searchClue' element={<SearchClue/>}/>
   <Route path='clueDisplay' element={<ClueDisplay/>}/>
  </Route>
)
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
