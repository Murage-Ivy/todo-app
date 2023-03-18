import React from 'react'
import Main from './Main'
import menuItems from './helper/Helper'
import { NavLink } from 'react-router-dom'
import './Styles/Sidebar.css'

function Sidebar({ children }) {

    const menuList = menuItems.map((item, index) => {
        return <NavLink to={item.url} key={index}>
            <div className='icon'>{item.icon}</div>
            <div className='title'>{item.title}</div>
        </NavLink>
    })
    return (
        <div className='sidebar'>
            <div className='top-part'>
                <h2>Simply<span>Plan</span></h2>

                <img src='https://www.flaticon.com/svg/static/icons/svg/25/25694.svg' alt='logo' />


                <div className='bottom-part'>
                    <div className='logo'>
                    </div>
                    <div className='menu'>
                        {menuList}
                    </div>
                </div>
            </div>
            <Main children={children} />
        </div>
    )
}

export default Sidebar