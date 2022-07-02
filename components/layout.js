import { useState } from 'react'
import NavBar from "./navBar";

export default function Layout({ children }) {

  const [theme, setTheme] = useState('light');

  const className = theme === 'light' ? 'theme-light' : 'theme-dark';


  return (
    <div className={className} >
      <div className="root container" >
        <NavBar theme={theme} setTheme={setTheme}  />
        {children}
      </div>
    </div>
  )
}