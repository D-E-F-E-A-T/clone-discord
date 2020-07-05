import styled from "styled-components";
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CD;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 52px);

    background-color: var(--primary);
`;
export const Messages = styled.div`
    padding: 20px 0;

    display: flex;
    flex-direction: column;
    height: calc(100vh - 46px - 52px );

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    height: 46px;
    background:  var(--secondary);
    display: flex;
    align-items: center;   
 `;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 0px 10px 0px 37px;
    border-radius: 7px;
    border-color: var(--gray);
    background-color: var(--chat-input);
    position: relative;
    
    color: white;

    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: absolute;
        transition: 180ms ease-in-out;
    }
`;

export const InputIcon = styled(AlternateEmail)`
    width: 24px;
    height: 24px;
    margin-left: 9px;
    color: var(--gray);
    background-color: var(--chat-input);
    
`;