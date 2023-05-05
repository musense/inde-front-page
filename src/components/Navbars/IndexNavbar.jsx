import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink as nLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import styles from './indexNavbar.module.css'



function IndexNavbar() {

  const navigate = useNavigate();
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={`fixed-top ${styles.navbar}`} expand="lg">
        <Container className={styles.container}>
          <div onClick={() => navigate('/')} className={styles['navbar-logo']}></div>
          <Nav navbar className={styles['nav-btn-wrapper']}>
            <NavItem>
              <NavLink to="/"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/c/lottery"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                Lottery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/c/sports"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                Sports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/c/poker"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                Poker
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/c/matka"
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                Matka
              </NavLink>
            </NavItem>
          </Nav>
          {/* </Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
