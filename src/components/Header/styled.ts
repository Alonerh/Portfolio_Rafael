import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #000;
    color: #f4f4f4;
    width: 100vw;
    height: 5rem;
    transition: all 0.5s;
    border-bottom: 1px solid rgb(14,219,0);
`;
export const Container = styled.div`  
    max-width: 114rem;
    width: 100vw;
    margin: 0 auto;
`;

export const Navbar = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: inherit;

    @media (max-width: 760px) {
        justify-content: space-between;
    }
`;
export const Logo = styled.nav`
    margin-left: 3rem;
    cursor: pointer;
`;
export const Nav = styled.nav`
    flex: 2;
    height: 100%;
    margin-right: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 760px) {
        display: none;
    }
`;
export const Navigator = styled.a`
    height: fit-content;
    margin-left: 1rem;
    color: #f4f4f4;
    outline: none;
    text-decoration: none;
    line-height: 1.9rem;

    &:hover {   
        border-bottom: 0.3rem solid rgb(14,219,0);
    }
`;
export const Theme = styled.div`
    margin-left: 2rem;
    margin-right: 3rem;
    cursor: pointer;
`;
export const Menu = styled.img`
    display: none;
    width: 30px;
    height: auto;
    background-color: #fff;
    margin-right: 1rem;
    cursor: pointer;

    @media (max-width: 760px) {
        display: block;
    }
`;

type NavMenuProps = {
    show: string
}
export const NavMenu = styled.nav<NavMenuProps>`
    background-color: #333;
    flex: 2;
    height: 100vh;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${props=>props.show};
    padding-top: 1rem;
    transition: all ease .5s;

    @media (min-width: 761px) {
        display: none;
    }
    @media (max-width: 760px) {
        display: flex;
    }
`;
export const CloseButton = styled.span`
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    margin-left: -7rem;
    font-size: 18px;

    &:hover {
        color: rgb(14,219,0);
    } 
`;