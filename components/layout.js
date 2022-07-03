import { useState, useEffect } from 'react';

import Footer from './footer';
import NavBar from './navBar/navBar';

export default function Layout({ children }) {

  const [theme, setTheme] = useState('dark');

  const className = theme === 'light' ? 'theme-light' : 'theme-dark';

  useEffect(function () {
    const theme = localStorage.getItem('theme');
    if (theme !== undefined) {
      setTheme(theme);
    }
},[]);


  return (
    <div className={className} >
      <div className="root" >
        <div className='container' >
          <NavBar theme={theme} setTheme={setTheme}  />
          {children}
          <Footer theme={theme} />
        </div>
      </div>
    </div>
  )
}