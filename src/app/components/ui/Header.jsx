'use client'
import React, { useState } from "react";
import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import Image from "next/image";
import logo from '../../../img/logo.svg'

const Header = () => {
    const [autenticado, setAutenticado] = useState(false)
    return (
        <Navbar expand="md" className="container-lg bg-primary nav" sticky="top">
            <Container>
                <NavbarBrand href="/" ><Image src={logo} alt="logo"/></NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-bar">
                    <Nav className="me-auto">
                        <NavLink className="text-light" href="/nosotros">Nosotros</NavLink>
                        {/* <NavLink className="text-light" href="/blog">Blog</NavLink> */}
                        <NavLink className="text-light" href="/contacto">Contacto</NavLink>
                        {autenticado ? 
                        <NavLink className="text-light" href="/logout" onClick={() => setAutenticado(false)}>Cerrar Sesion</NavLink> : 
                        <NavLink className="text-light" href="/login">Iniciar Sesion</NavLink>}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default Header