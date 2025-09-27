import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className='row'>
 <aside className='col-md-4  bg-secondary vh-100'  >
    <ul>
        <li>
            <NavLink to="/dashboard">Dashboard home</NavLink >


        </li>
         <li>
            <NavLink to="/dashboard/users">Dashboard users</NavLink >


        </li>
         <li>
            <NavLink to="/dashboard/posts">Dashboard posts</NavLink >

        </li>
    </ul>
    </aside>
    
    <section className='col-md-8'>
    <Outlet/>
    </section>
    </main>
  )
}

export default Layout