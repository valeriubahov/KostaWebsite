import React from 'react'
import { User32, Email32, Education32, Document32, Home32 } from '@carbon/icons-react'
import { Link } from 'react-scroll';
import { Container, Spacer, NavWrapper, NavButton, NavLink, NavResume } from './styles'

const items = [
  { name: 'Home', path: 'home', icon: Home32 },
  { name: 'About Us', path: 'about', icon: User32 },
  { name: 'Contacts', path: 'work', icon: Email32 },
];
const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        {items.map(i => (
       <NavLink
       element={Link}
       to={i.path}
       key={i.name}
       spy={true}
       smooth={true}
       duration={500}
     >
       <NavButton
            hasIconOnly
            renderIcon={i.icon}
            iconDescription={i.name}
            tooltipPosition="bottom"
          />
     </NavLink>
        ))}

     
      </NavWrapper>
    </Container>
  )
}

export default MobileNav