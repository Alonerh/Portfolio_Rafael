import styled from "styled-components";

export const Content = styled.div`   
    width: 70rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1100px) {
        width: 60rem;
    }
`;
export const Title = styled.div`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 3rem;
`;
export const ContainerBlocks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-content: center;
    align-items: center;
    color: #f4f4f4;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 760px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Block = styled.div`
    width: 20rem;
    background: rgb(2,0,36);
    background: linear-gradient(17deg, rgba(2,0,36,1) 0%, rgba(0,71,5,1) 100%);
    height: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.3rem solid #f4f4f4;
    padding: 1rem;

    &:hover {
        background: #f4f4f4;
        color: #000;

        span {
            color: #000;
        }
    }

    @media (max-width: 1100px) {
        height: 14rem;
    }
`;
export const BlockCategory = styled.span`
    margin-bottom: 1rem;
    font-weight: bold;
    color: #f4f4f4;
`;
export const BlockName = styled.p`
    text-align: center;
    font-size: 23px;
`;
export const BlockLocation = styled.p`
    margin-top: 0.5rem;
`;
export const BlockTime = styled.p`
    margin-top: 1rem;
`;