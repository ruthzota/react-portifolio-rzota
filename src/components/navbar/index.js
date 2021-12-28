import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/skills' activeStyle>
                        Skills
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact Me
                    </NavLink>

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Let's Connect</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar