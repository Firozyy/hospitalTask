import React from 'react'
import { Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Header from './Compenents/Header';
import Section from './pages/sections/Section';
import Employees from './pages/employees/Employees';
import DepartmentList from './pages/Department/DepartmentList';
import DepartHeadlist from './pages/DepartHead/DepartHeadlist';
import Login from './pages/Auth/Login';
import EmployeDetails from './pages/employees/EmployeDetails';
import DepartHeadDetails from './pages/DepartHead/DepartHeadDetails';
import DepartmentDetails from './pages/Department/DepartmentDetails';
const App = () => {
  return (
    <Router>
      <Header/>
    <Routes>
      
      <Route path='/' element={<Section/>}/>
      <Route path='/employees' element={<Employees/>}/>
      <Route path='/employees/:id' element={<EmployeDetails/>}/>

      <Route path='/departmentheads' element={<DepartHeadlist/>}/>
      <Route path='/departmentheads/:id' element={<DepartHeadDetails/>}/>
      <Route path='/department' element={<DepartmentList/>}/>
      <Route path='/department/:id' element={<DepartmentDetails/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </Router>
  )
}

export default App