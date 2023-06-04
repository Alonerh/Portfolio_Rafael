import { useState } from 'react';

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
                        Logo
                    </Logo>
                    <Nav>
                        <Navigator href="">INÍCIO</Navigator>
                        <Navigator href="">SOBRE</Navigator>
                        <Navigator href="">PROJETOS</Navigator>
                        <Navigator href="">HABILIDADES</Navigator>
                        <Navigator href="">CONTATO</Navigator>
                    </Nav>               
                    <NavMenu show={hamb ? '0' : '-400px'}>
                        <CloseButton onClick={handleShowNav}>X</CloseButton>
                        <Navigator href="">INÍCIO</Navigator>
                        <Navigator href="">SOBRE</Navigator>
                        <Navigator href="">PROJETOS</Navigator>
                        <Navigator href="">HABILIDADES</Navigator>
                        <Navigator href="">CONTATO</Navigator>
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