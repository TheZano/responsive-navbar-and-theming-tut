import React, { useState } from "react"
import styled from "styled-components"

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
      <Logo>shopew</Logo>
      <Links>
        {links.map((link) => (
          <a href={link.slug || "#"}>{link.name}</a>
        ))}
      </Links>
      <ButtonContainer>
        <button onClick={() => setOpened(!opened)}>open</button>
        <button>toggle dark</button>
      </ButtonContainer>
      <MenuLinks status={opened}>
        <a href="/">lorem ipsum</a>
        <a href="/">lorem</a>
        <a href="/">lorem</a>
        <a href="/">lorem</a>
      </MenuLinks>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: relative;
  height: 8vh;
  background: aliceBlue;
`
const Logo = styled.div``
const Links = styled.div``
const MenuLinks = styled.div`
  position: absolute;
  top: 8vh;
  height: 92vh;
  right: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  background: papayaWhip;
  transform: ${({ status }) => (status ? "translateX(0)" : "translateX(100%)")};
`
const ButtonContainer = styled.div``
