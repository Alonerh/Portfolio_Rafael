import styled from "styled-components";

export const Content = styled.div`
    width: 70rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Title = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 3rem;
`;
export const ProjectsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;

    @media (max-width: 760px) {
        grid-template-columns: repeat(1, 1fr);  
    }
`;
export const ProjectBlock = styled.a`
    width: 35rem;
    height: 21rem;
    padding: 2rem;
    background-color: #f4f4f4;
    border: 2px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: 0;
    text-decoration: none;

    &:hover{
        background-color: #ccc;

        img {
            transition: all ease .2s;
            width: 32rem;
        }
        span {
            font-weight: bold;
            color: rgb(14,200,0);
        }
    }

    @media (max-width: 1100px) {
        width: 22rem;
        height: 18rem;
        padding: 1rem;

        &:hover{
            background-color: #ccc;

            img {
                transition: all ease .2s;
                width: 20rem;
            }
            span {
                font-weight: bold;
                color: rgb(14,219,0);
            }
        }
        
    }
`;
export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const ProjectLink = styled.div`

`;
export const ProjectImage = styled.img`
    width: 29rem;   
    border-radius: 10px;

    @media (max-width: 1100px) {
        width: 19rem;
    }
`;
export const ProjectText = styled.span`
    margin-top: 0.5rem;
    color: #000;
    
    font-size: 19px;
    text-align: center;

`;