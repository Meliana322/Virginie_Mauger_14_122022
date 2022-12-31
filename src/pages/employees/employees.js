import React from 'react'
import Header from '../../components/header/header'
import { Link } from 'react-router-dom'
import style from './employees.module.css'
import Table from '../../components/table/table'

export default function Employees({ employeeList }) {
  return (
    <>
      <Header />
      <div id="employee-div" className={style.container}>
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <Table className={style.table} employeeList={employeeList} />
        <div className={style.link}>
          <Link className={style.link_home} to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  )
}
