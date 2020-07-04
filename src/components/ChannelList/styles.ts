import styled from "styled-components";
import { Add } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 0px 10px;
    background-color: var(--secondary);
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 6px;

    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;

export const Separator = styled.div`
    height: 1px;
    width: 200px;

    background-color: white;
    opacity: 0.2;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    margin-left: 8px;
    margin-top: 20px;
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;

    color: var(--symbol);
    cursor: pointer;
    transition: 0.2s;
    
    &:hover {
        color: white;
    }
`;
