import React from 'react'
import { Link } from 'react-router-dom'
import "../../src/App.css"
function Navbar() {
  return (
    <>
    <header>
     <nav>
          <div>
               <img src="https://preview.colorlib.com/theme/robotics/img/logo.png.webp" alt="robotimage" />
          </div>
          <div>
               <ul>
                    <Link to='/'>
                         <li>HOME</li>
                    </Link>
                    <Link to='/add'>
                         <li>ADD</li>
                    </Link>
                    <Link>
                         <li>ABOUT US</li>
                    </Link>
                    <Link>
                         <li>SERVICES</li>
                    </Link>
                    <Link>
                         <li>PRODUCTS</li>
                    </Link>
                    <Link>
                         <li>BLOG</li>
                    </Link>
                    <Link>
                         <li>CONTACTS</li>
                    </Link>
                    <Link>
                         <li>DROPDOWN</li>
                    </Link>
               </ul>
          </div>
     </nav>
    </header>
    </>
  )
}

export default Navbar
