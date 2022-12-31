import React from 'react'
import style from './button.module.css'

export default function Button() {
  return (
    <>
      <button type="submit" className={style.button}>
        Save
      </button>
    </>
  )
}
