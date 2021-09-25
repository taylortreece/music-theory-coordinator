import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import '../css/NavBar.css'

const NavBar = () => {
    return (
      <Container>
        <Navbar className='nav' expand="xsm" variant="light" bg="light">
          <NavLink 
           className="navlink"
           to='/theory-information'
            >Learn Theory
         </NavLink>
         <NavLink 
           id="song-workshop-link"
           className="navlink" 
           to='/'
           >Song Workshop
         </NavLink>
          <NavLink 
           className="navlink"
           to='/other-resources'
           >Other Resources
          </NavLink>
        </Navbar>
      </Container>
    )
}

export default NavBar;