import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Submenu = ({item}) => {
    const [submenu, setSubmenu] = useState(false)

    const showSubmenu = () => setSubmenu(!submenu)
    
  return (
    <div>
        <Link className='sidebar-link' to={item.path} onClick={item.subMenu && 
            showSubmenu}>
        <div>
            {item.icon}
            <span>{item.title}</span>
        </div>
        <div>
            {item.subNav && subnav ? item.iconOpened
            : item.submenu ? item.iconClosed : null}
        </div>
        </Link>
      
    </div>
  )
}

export default Submenu
