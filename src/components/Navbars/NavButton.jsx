import React from 'react'
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";
import { css } from '@emotion/css'

export default function NavButton({ category, closeMenu }) {

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
            @media screen and (max-width: 400px) {

                position: relative;
                color: var(--theme-color);

                &.active,
                &:hover {
                    text-decoration: none;
                    color: var(--theme-color);
                }
                &.active{
                    font-size: 2.5rem;
                    font-family: Lobster-Regular;
                    letter-spacing: 0.2rem;
                }

                &::after{
                    content: "";
                    position: absolute;
                    display: block;
                    background-image: url(/src/assets/img/mobile/index/jewelry.png);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 10vw;
                    height: 3vw;
                    bottom: -1.6rem;
                    left: 50%;
                    transform: translateX(-50%);                
                }
        `
    return (
        <NavItem>
            <NavLink
                onClick={closeMenu}
                to={`${category === 'home' ? '' : `/c/${category}`}`}
                className={style}
            >
                {CategoryShowName}
            </NavLink>
        </NavItem >
    )
}
