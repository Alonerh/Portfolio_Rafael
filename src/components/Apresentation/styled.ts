import styled from "styled-components";

export const Content = styled.div`
    width: 70rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 760px) {
        justify-content: flex-start;
    }
`;
export const LeftSide = styled.div`
    width: 100%;
    height: auto;
    font-family: 'Poppins', sans-serif;
    margin-left: 5rem;

    @media (max-width: 1100px) {
        width: 10rem;
    }
    @media (max-width: 660px) {
        margin-left: 1.2rem;
    }

`;
export const SmallText = styled.div`
    font-size: 2rem;

    @media (max-width: 1100px) {
        font-size: 1rem;
    }
`;


export const BigText = styled.div`
    font-size: 4rem;
    font-weight: bold;
    color: rgb(14,219,0);

    @media (max-width: 1100px) {
        font-size: 3rem;
    }
`;


export const Skills = styled.div`
    font-size: 2rem;

    @media (max-width: 1100px) {
        font-size: 1rem;
    }
`;
export const SocialMediaContainer = styled.div`
    display: flex;
    margin-top: 4rem;
`;
export const SocialMedia = styled.a`
    background-color: rgb(14,200,0);
    width: fit-content;
    height: 3rem;
    padding: 1rem 1rem;
    margin-right: 1rem;
    border-radius: 5%;
    color: #fdfdfd;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #fdfdfd;
        color: rgb(14,200,0);
    }
    @media (max-width: 660px) {
        font-size: 1rem;
    }
`;

export const RightSide = styled.div`
    flex: 2;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1100px) {
        margin-left: 15rem;
    }
    @media (max-width: 760px) {
        display: none;
    }
`;
export const ImageContaner = styled.div`
    width: 500px;
    height: auto;
    display: flex;

    @media (max-width: 1100px) {
        width: 400px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;