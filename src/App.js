import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Employees from './pages/employees/employees'

function getEmployees() {
  const employees = JSON.parse(localStorage.getItem('employeeList')) || []
  return employees
}

function App() {
  const [employeeList, setEmployeeList] = useState(getEmployees)
  useEffect(() => {
    if (employeeList.length > 0) {
      localStorage.setItem('employeeList', JSON.stringify(employeeList))
    }
  }, [employeeList])

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setEmployeeList={setEmployeeList} />}
        />
        <Route
          exact
          path="/employees"
          element={<Employees employeeList={employeeList} />}
        />
      </Routes>
    </Router>
  )
}

export default App
