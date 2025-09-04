import React from 'react'
import ThemeContext from '../../Contexts/ThemeContext'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

export default function Navbar() {
  return (
    <div  className='w-[90%] rounded-lg mt-3 m-auto navbar shadow-sm'>
      <div className="navbar-start">
        <button className='btn btn-ghost'>Logo</button>
      </div>
    <div className="navbar-end">
      <ToggleTheme/>
    </div>
    </div>
  )
}
