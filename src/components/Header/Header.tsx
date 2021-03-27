import React, {useEffect} from 'react';
import {
  Nav,
  Navbar,
  NavItem,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { DarkModeToggler, Filters } from "..";

export const Header: React.FC = () => {
  const { location } = useHistory();

  return (
      <Navbar className="c-header" light expand="md">
        <Link to={ROUTES.HOME} className="navbar-brand">Rick & Morty</Link>
        { location.pathname === ROUTES.HOME && (<Filters/>)}
        <Nav className="ml-auto" navbar>
          <DarkModeToggler/>
          <NavItem>
            <Link to={ROUTES.NEW_CHARACTER} className="nav-link">New character</Link>
          </NavItem>
        </Nav>
      </Navbar>
  )
}

