import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feedback from './Feedback'
import Form from '../Form'

const FormRoutes = () => {
  return (
    <div>
        <div>
            <Routes>
                <Route path='/' element={<Feedback />}/>
                <Route path='/userForm' element={<Form />}/>
            </Routes>
        </div>
    </div>
  )
}

export default FormRoutes
