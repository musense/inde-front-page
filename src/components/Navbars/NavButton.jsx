import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import { NavItem } from "reactstrap";
import { css } from '@emotion/css'
import styles from './navButton.module.css'


export default function NavButton({ category, closeMenu }) {

    const CategoryShowName = category.charAt(0).toUpperCase() + category.slice(1);

    const { pathname } = useLocation();

    const selectedCategory = (category) => {
        const path = category.substring(category.lastIndexOf("/") + 1, category.length)
        if (path === '') return 'home'
        else return path
    }

    return (
        <NavItem>
            <NavLink
                onClick={closeMenu}
                to={`${category === 'home' ? '' : `/c/${category}`}`}
                className={`${styles['navButton']} ${selectedCategory(pathname) === category
                        ? styles['active']
                        : ''}`}
            >
                {CategoryShowName}
            </NavLink>
        </NavItem >
    )
}
