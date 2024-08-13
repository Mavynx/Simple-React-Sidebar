import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as Fa6Icons from 'react-icons/fa6'

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        className:'nav-text',
    },
    {
        title:'About',
        path:'/about',
        icon:<IoIcons.IoIosPaper />,
        className:'nav-text',
    },
    {
        title:'Contact',
        path:'/contact',
        icon:<FaIcons.FaPhone />,
        className:'nav-text',
    },
    {
        title:'Categories',
        icon:<FaIcons.FaClipboardList />,
        className:'nav-text',
        iconClosed:<FaIcons.FaArrowDown />,
        iconOpened:<FaIcons.FaArrowUp />,
        subMenu: [
            {
                title:'Cows',
                path:'/categories/cows',
                icon:<Fa6Icons.FaCow />,
                className:'submenu',
            },
            {
                title:'Pigs',
                path:'/categories/pigs',
                icon:<Fa6Icons.FaCow />,
                className:'submenu',
            },
            {
                title:'Chicken',
                path:'/categories/Chicken',
                icon:<Fa6Icons.FaCow />,
                className:'submenu',
            },
            {
                title:'Dogs',
                path:'/categories/dogs',
                icon:<Fa6Icons.FaCow />,
                className:'submenu',
            },
        ]
    },
    {
        title:'Signup',
        path:'/signup',
        icon:<FaIcons.FaUser />,
        className:'nav-text',
    },

]