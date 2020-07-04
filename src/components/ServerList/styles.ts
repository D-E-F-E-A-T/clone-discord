import styled from "styled-components";

export const Container = styled.div`
    grid-area: SL;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 11px 0;
    max-height: 100vh;
    overflow-y: scroll;

    background-color: var(--tertiary);

    ::-webkit-scrollbar {
    width: 6px;
    }
    ::-webkit-scrollbar-thumb {
    background-color: var(--quaternary);
    border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
    background-color: var(--tertiary);
    }
`;
export const Separator = styled.div `
    width: 32px;
    border-bottom: 2px solid var(--quaternary);

    margin-bottom: 8px;
`;