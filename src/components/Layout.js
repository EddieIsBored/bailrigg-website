import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className = "layout">
            <Navbar />
            <div className ="content">
                { children }
                {/* Content for Page*/}
            </div>
        <footer>
            <p>Copyright 2021 Edward Nokes</p>
        </footer>
        </div>
    )
}

export default Layout