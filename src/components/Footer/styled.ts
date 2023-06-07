import styled from "styled-components";

export const FooterMain = styled.div`
    border-top: 2px solid #000;

    
`;
export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;

    
    @media (max-width: 760px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0;
        justify-content: center;
        margin: 1rem 1rem;
    }
    @media (max-width: 660px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const FooterText = styled.div`
    width: 20rem;
    font-weight: bold;
    font-size: 18px;
    font-style: italic;

    @media (max-width: 760px) {
        margin-top: 1rem;
        width: 23rem;
        text-align: center;
        color: #fff;
    }
`;
export const FooterYear = styled.div`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #f4f4f4;
`;
export const FooterMedias = styled.div`
    width: fit-content;
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    border-radius: 10px;
    margin-left: 2rem;

    @media (max-width: 1100px) {
        margin-left: 4rem;
    }
    @media (max-width: 660px) {
        margin: 0;
        margin-bottom: 1rem;
    }
`;
export const FooterMedia = styled.a`
    margin-right: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    

    &:last-child {
        margin-right: 0;
    }
`;
export const FooterImage = styled.img`
    width: 2rem;
    transition: all ease .2s;

    &:hover {
        width: 3rem; 
    }
`;

export const FooterOffering = styled.a`
    margin-top: 0.4rem;
    opacity: .7;
    color: #f4f4f4;
    font-size: 13px;
    outline: 0;
    text-decoration: none;
`;