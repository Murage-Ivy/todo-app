import React from 'react'
import menuItems from './helper/Helper'
import { NavLink } from 'react-router-dom'
import './Styles/Sidebar.css'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Sidebar({ children }) {

    const menuList = menuItems.map((item, index) => {
        return <NavLink to={item.url} key={index} className='nav-link'>
            <div className='icon'>{item.icon}</div>
            <div className='title'>{item.title}</div>
        </NavLink>
    })
    return (
        <div className='sidebar'>
            <div className='top-part'>
                <h2>Simply<span>Plan</span></h2>

                <div className='user'>
                    <img src='https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg' alt='user' />
                    <div className='user-info'>
                        <h4>John Doe</h4>
                        <p>
                            <span className='dot'></span>
                            Online
                        </p>
                    </div>
                </div>



                <div className='menu'>
                    {menuList}
                </div>


                <div className='logout'>
                    <FontAwesomeIcon icon={faSignOutAlt} className='icon' />
                    <div className='title'>Logout</div>
                </div>

            </div>

            <div>
                <p>Welcome</p>
                <Outlet />
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Sidebar