import React, { useEffect, useRef, useState } from "react";
// reactstrap components
import { Navbar, Nav, Container } from "reactstrap";

import styles from './indexNavbar.module.css'
import Logo from "./Logo";
import NavButton from "./NavButton";
import Hamburger from "components/Hamburger/Hamburger";
import useShowHeader from "hook/useShowHeader"


function IndexNavbar() {

  const [showHeader, headerForceHide] = useShowHeader();
  const hamburgerRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (hamburgerRef.current == null) {
      hamburgerRef.current = "hamburger-check"
    }
    console.log("🚀 ~ file headerLayout.jsx:25 ~ HeaderLayout ~ active:", active)
  }, [hamburgerRef]);
  function toggleHamburger(e) {
    console.log("Clicked, new value = " + e.target.checked);
    setActive(e.target.checked)
  }

  function unCheck() {
    const hamburgerCheck = document.querySelector(`#${hamburgerRef.current}`);
    setActive(false)
    hamburgerCheck.checked = false;
  }

  const indexButtonList = ['home', 'lottery', 'sports', 'poker', 'matka', 'casino']
  return (
    <>
      <Navbar id="navbar" className={`fixed-top ${styles.navbar} ${showHeader ? styles.show : styles.hide}`}>
        <Container className={styles.container}>
          <Logo />
          <Nav className={`${styles['nav-btn-wrapper']} ${active ? styles['active'] : ''}`}>
            {indexButtonList.map((item, index) => {
              return <NavButton
                closeMenu={unCheck}
                key={index}
                category={item} />
            })}
          </Nav>
          <Hamburger
            id={hamburgerRef.current}
            toggleHamburger={toggleHamburger}
            unCheck={unCheck}
          />
        </Container>
      </Navbar>
    </>
  );


}

export default IndexNavbar;



