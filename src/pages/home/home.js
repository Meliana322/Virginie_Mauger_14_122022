import React from 'react'
import Header from '../../components/header/header'
import Form from '../../components/form/form'
import { Link } from 'react-router-dom'
import style from './home.module.css'

export default function Home({ setEmployeeList }) {
  return (
    <>
      <div className="title">
        <Header />
        <div className={style.link}>
          <Link to="/employees">View Current Employees</Link>
        </div>
        <Form setEmployeeList={setEmployeeList} />
      </div>
    </>
  )
}
