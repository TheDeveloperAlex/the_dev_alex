import { useState } from 'react'
import Footer from './footer';
import NavBar from "./navBar";

export default function Layout({ children }) {

  const [theme, setTheme] = useState('light');

  const className = theme === 'light' ? 'theme-light' : 'theme-dark';


  return (
    <div className={className} >
      <div className="root container" >
        <NavBar theme={theme} setTheme={setTheme}  />
        {children}
        <Footer theme={theme} />
      </div>
    </div>
  )
}