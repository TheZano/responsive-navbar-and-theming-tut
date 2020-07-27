import React, { useState, useContext } from "react"
import styled from "styled-components"
import "styled-components/macro"
import logo from "../assets/shopee-karir.svg"
import SunAndMoon from "./buttonIcons/SunAndMoon"
import Menu from "./buttonIcons/Menu"
import { ThemeModeContext } from "../contexts/theme"
import { links } from "../constants"

export default () => {
  const { mode, setMode } = useContext(ThemeModeContext)
  const [opened, setOpened] = useState(false)

  return (
    <Nav>
      <Logo>
        <img src={logo} css={"width: 100%"} />
      </Logo>
      <Links>
        {links.map((link) => (
          <Link href={link.slug || "#"}>{link.name}</Link>
        ))}
      </Links>
      <ButtonContainer>
        <SunAndMoon />
        <Menu toggled={opened} onClick={() => setOpened(!opened)}>
          open
        </Menu>
      </ButtonContainer>
      <MenuLinks status={opened}>
        {links.map((link) => (
          <MenuLink href={link.slug || "#"}>{link.name}</MenuLink>
        ))}
      </MenuLinks>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1);
  height: 6vh;
  background: ${({ theme }) => theme.colors.surface};
  align-items: center;
`
const Logo = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin: auto 24px;
  width: 135px;
  @media screen and (min-width: 640px) {
    width: calc(135px * 1.25);
  }
`

const Link = styled.a`
  text-transform: capitalize;
  display: block;
  white-space: nowrap;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
const Links = styled.div`
  display: none;
  font-family: Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 500;
  align-items: center;
  /* TODO theme the spacing and breakpoints */
  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: space-around;
    width: 65%;
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
  @media screen and (min-width: 1280px) {
    width: 45%;
  }
`
const MenuLinks = styled.div`
  position: fixed;
  z-index: 1;
  top: 6vh;
  height: 100%;
  right: 0;
  width: 70%;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  /* TODO Research proper box shadow */
  -webkit-box-shadow: -8px 0px 8px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -8px 0px 8px 0px rgba(0, 0, 0, 0.1);
  box-shadow: -8px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.surface};
  transform: ${({ status }) => (status ? "translateX(0)" : "translateX(120%)")};
  transition: transform ease-in-out 0.3s;
  @media screen and (min-width: 960px) {
    display: none;
  }
`

const MenuLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 24px 48px;
  text-transform: capitalize;
  display: block;
  position: relative;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: space-around;
`
