import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import BookingPage from './pages/BookingPage'


function App() {
 

  return (
    <div>

   <Routes>
   
    <Route path='/' element={<BookingPage></BookingPage>}></Route>
   
   </Routes>
    </div>
     
  )
}

export default App
