import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import Logo from './Cow.jpg'


function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  
    
    
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar1'>
    <Link to='#'>
    <FaIcons.FaBars onClick={showSidebar} className='bars'/>
    </Link>
    <div>
        
        <span className='title'><img src={Logo} alt='cow' className='cow-logo'/><h1 className='head1'>Animall</h1></span>

    </div>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose className='close' />
                </Link>

            </li>
            {SidebarData.map((item, index) => {
              
                return (
                    <li key={index} className={item.className}>
                        <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        </Link>
                    </li>
                )
            
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar