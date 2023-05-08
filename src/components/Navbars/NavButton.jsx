import React from 'react'
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";
import { css } from '@emotion/css'

export default function NavButton({ category }) {

    const CategoryShowName = category.charAt(0).toUpperCase() + category.slice(1);

    const style = css`
            box-sizing: border-box;
            text-decoration: none;
            font-size: 23px;
            color: var(--theme-text);

            &.active,
            &:hover {
                text-decoration: none;
                color: var(--theme-gold);
            }
        `
    return (
        <NavItem>
            <NavLink
                to={`${category === 'home' ? '' : `/c/${category}`}`}
                className={style}
            >
                {CategoryShowName}
            </NavLink>
        </NavItem >
    )
}
