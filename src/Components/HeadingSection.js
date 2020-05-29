import React from 'react';
import { Nav, NavItem, Navbar, NavbarText, NavLink } from 'reactstrap';
import styled from 'styled-components';


const HeadingSection = () => {
  return(
  <>
    <Navbar color='dark'>
      <Nav>
        <NavItem>
          <NavLink className='color' href='#'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='color' href='#'>Daily</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='color' href='#'>API</NavLink>
        </NavItem>
      </Nav>
      <NavbarText className='nasaFont'>NASA</NavbarText>
    </Navbar>  
  </>
)
}
export default HeadingSection;