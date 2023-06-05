import styled from "styled-components";

export const Container = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,219,0,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    font-family: 'Poppins', sans serif;
`;
export const Main = styled.div`

    background: transparent;
    max-width: 114rem;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Section = styled.div`
    width: 100%;
    height: fit-content;
    margin: 3rem 0;
    color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
`;
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
export const Text = styled.p`
    flex: 1;
    width: 100%;
    font-size: 1.3rem;
    padding: 0 4rem;
    height: 35rem;
    text-align: center;
    color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ArrowContainer = styled.a`
    background-color: rgb(14,200,0);
    width: fit-content;
    height: auto;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f4f4f4;
    margin-right: 1rem;
    margin-bottom: 1rem;
    opacity: 1;
    position: fixed;
    bottom: 0;
    right: 0;
    cursor: pointer;
`;
export const ToUp = styled.img`
    width: 3rem;
`;

