import React from 'react';
import { NavLink } from 'react-router-dom';

// Uses react router for navigation links
const Nav = () => ( 
          <nav className="main-nav">
            <ul>
              <li><NavLink to='/search/mustang'>Mustang</NavLink></li>
              <li><NavLink to='/search/camaro'>Camaro</NavLink></li>
              <li><NavLink to='/search/ferrari'>Ferrari</NavLink></li>
            </ul>
          </nav>
        );
 
export default Nav;
