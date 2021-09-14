import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
    return (
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
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