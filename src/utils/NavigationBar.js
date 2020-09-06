import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  const history = createBrowserHistory();

  function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact,
    });

    return (
      <li className={match ? "nav-item active" : "nav-item "}>
        <Nav.Link className='nav-link' href={to}>
          {label}
        </Nav.Link>
      </li>
    );
  }

  function logout() {
    localStorage.removeItem("user");
    history.push("/");
  }

  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>RRR</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <MenuLink activeOnlyWhenExact={true} to='/' label='HOME' />
            <MenuLink activeOnlyWhenExact={true} to='/about' label='ABOUT' />
            <MenuLink
              activeOnlyWhenExact={true}
              to='/contact'
              label='CONTACT'
            />
          </Nav>
          <span className='navbar-text'>
            <button onClick={logout}>Log Out</button>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
