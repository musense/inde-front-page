import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import styles from './indexNavbar.module.css'



function IndexNavbar() {
  // const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const navigate = useNavigate();
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    // const updateNavbarColor = () => {
    //   if (
    //     document.documentElement.scrollTop > 399 ||
    //     document.body.scrollTop > 399
    //   ) {
    //     setNavbarColor("");
    //   } else if (
    //     document.documentElement.scrollTop < 400 ||
    //     document.body.scrollTop < 400
    //   ) {
    //     setNavbarColor("navbar-transparent");
    //   }
    // };
    // window.addEventListener("scroll", updateNavbarColor);
    // return function cleanup() {
    //   window.removeEventListener("scroll", updateNavbarColor);
    // };
  });
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
      <Navbar className={`fixed-top ${navbarColor} ${styles.navbar}`} expand="lg">
        <Container className={styles.container}>
          <div onClick={() => navigate('/')} className={styles['navbar-logo']}></div>
          {/* <div className="navbar-translate">
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              target="_blank"
              id="navbar-brand"
            >
              Now UI Kit React
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div> */}
          {/* <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          > */}
            <Nav navbar className={styles['nav-btn-wrapper']}>
              <NavItem>
                <Button
                  className={`btn-neutral btn-icon btn-round ${styles['nav-btn']} ${styles.twitter}`}
                  // color="info"
                  href="https://twitter.com"
                  id="twitter-tooltip"
                  // size="lg"
                  target="_blank"
                >
                  {/* <i className="fab fa-twitter"></i> */}
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </Button>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <Button
                  className={`btn-neutral btn-icon btn-round ${styles['nav-btn']} ${styles.facebook}`}
                  // color="info"
                  href="https://www.facebook.com"
                  id="facebook-tooltip"
                  // size="lg"
                  target="_blank"
                >
                  {/* <i className="fab fa-facebook-square"></i> */}
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </Button>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <Button
                  className={`btn-neutral btn-icon btn-round ${styles['nav-btn']} ${styles.instagram}`}
                  // color="info"
                  href="https://www.instagram.com"
                  id="instagram-tooltip"
                  // size="lg"
                  target="_blank"
                >
                  {/* <i className="fab fa-instagram"></i> */}
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </Button>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          {/* </Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
