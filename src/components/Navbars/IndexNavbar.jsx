import React from "react";
// reactstrap components
import { Navbar, Nav, Container } from "reactstrap";

import styles from './indexNavbar.module.css'
import Logo from "./Logo";
import NavButton from "./NavButton";


function IndexNavbar() {

  const indexButtonList = ['home', 'lottery', 'sports', 'poker', 'matka', 'casino']
  return (
    <>
      <Navbar className={`fixed-top ${styles.navbar}`} expand="lg">
        <Container className={styles.container}>
          <Logo />
          <Nav navbar className={styles['nav-btn-wrapper']}>
            {indexButtonList.map((item, index) => {
              return <NavButton key={index} category={item} />
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );


}

export default IndexNavbar;



