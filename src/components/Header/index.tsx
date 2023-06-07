import React, { useState } from 'react';

import {
    HeaderContainer,
    Container,
    Navbar,
    Logo,
    Nav,
    Navigator,
    Theme,
    Menu,
    NavMenu,
    CloseButton
} from './styled';

import menu from '../../assets/menu.svg';
import { clickOptions } from '@testing-library/user-event/dist/click';

const Header = ()=>{

    const [hamb, setHamb]=useState(false);

    const handleShowNav = ()=>{
        setHamb(!hamb);
    };

    return (
        <HeaderContainer>
            <Container>
                <Navbar>
                    <Logo>
                        Rafael Alcantara {'</>'}
                    </Logo>
                    <Nav>
                        <Navigator href="#container">INÍCIO</Navigator>
                        <Navigator href="#aboutMe">SOBRE</Navigator>
                        <Navigator href="#projects">PROJETOS</Navigator>
                        <Navigator href="#skills">HABILIDADES</Navigator>
                        <Navigator href="https://api.whatsapp.com/send/?phone=5588988399456&text&type=phone_number&app_absent=0" target='_blank'>CONTATO</Navigator>
                    </Nav>               
                    <NavMenu show={hamb ? '0' : '-400px'}>
                        <CloseButton onClick={handleShowNav}>X</CloseButton>
                        <Navigator href="#container">INÍCIO</Navigator>
                        <Navigator href="#aboutMe">SOBRE</Navigator>
                        <Navigator href="#projects">PROJETOS</Navigator>
                        <Navigator href="#skills">HABILIDADES</Navigator>
                        <Navigator href="#https://api.whatsapp.com/send/?phone=5588988399456&text&type=phone_number&app_absent=0">CONTATO</Navigator>
                    </NavMenu>
                    
                    
                    <Menu src={menu} onClick={handleShowNav}/>
                    
                    {/* <Theme>
                        Trocar tema
                    </Theme> */}
                </Navbar>
            </Container>
        </HeaderContainer>
    )
};

export default Header;