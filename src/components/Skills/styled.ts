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

export const ContentSkills = styled.div`
    max-width: 70rem;
    display: flex;  
    justify-content: center;
    align-items: center;

    @media (max-width: 1100px) {
        max-width: 60rem;
        padding: 2rem;
        flex-direction: column;
        margin-right: 0;
    }
`;

export const SkillsBlock = styled.div`
    width: 40rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 10px;
    margin-right: 2rem;

    @media (max-width: 1100px) {
        width: 25rem;
    }
    @media (max-width: 660px) {
        margin-right: 0;
        grid-template-columns: repeat(2, 1fr);
    }

`;

export const SkillContainer = styled.div`
    background-color: #f4f4f4;
    padding: 0.5rem;
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #ddd;
        img {     
            width: 7rem;
            height: 8rem;        
            transition: all ease .2s;
        }
    }
`;

export const Skill = styled.img` 
    width: 6rem;
    height: 7rem;
    margin: 1rem;  
`;
export const Observations = styled.div`
    width: 30rem;
    text-align: center;

    @media (max-width: 660px) {
        width: 20rem;
    }
`;
export const SkillName = styled.div`
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 20px;
`;
export const SkillDescription = styled.div`
    width: 100%;

    
`;
