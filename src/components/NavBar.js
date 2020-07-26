import React, { useState } from "react"
import styled from "styled-components"
import "styled-components/macro"
import logo from "../assets/shopee-karir.svg"
import SunAndMoon from "./buttonIcons/SunAndMoon"
import Menu from "./buttonIcons/Menu"

export default () => {
  const links = [
    { name: "tentang", slug: "about" },
    { name: "kenapa shopee" },
    { name: "lowongan kerja" },
    { name: "mahasiswa" },
    { name: "tech" },
    { name: "acara" },
  ]

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
        <SunAndMoon isDark={false} />
        <Menu toggled={opened} onClick={() => setOpened(!opened)}>open</Menu>
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
  display: flex;
  justify-content: space-around;
  position: relative;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1);
  height: 8vh;
  background: ${({ theme }) => theme.colors.surface};
  align-items: center;
`
const Logo = styled.div`
  color: ${(props) => props.theme.colors.primary};
  width: 135px;
  @media screen and (min-width: 640px) {
    width: calc(135px * 1.25);
  }
`

const Link = styled.a`
  text-transform: capitalize;
  display: block;
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
  @media screen and (min-width: 768px) {
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
  position: absolute;
  top: 8vh;
  height: 92vh;
  right: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  /* TODO Research proper box shadow */
  -webkit-box-shadow: -8px 0px 8px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -8px 0px 8px 0px rgba(0, 0, 0, 0.1);
  box-shadow: -8px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  transform: ${({ status }) => (status ? "translateX(0)" : "translateX(120%)")};
  transition: transform ease-in-out 0.3s;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const MenuLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 24px 48px;
  text-transform: capitalize;
`
const ButtonContainer = styled.div`
  display: flex;
`