import styled from "styled-components";
import { PersonAdd, Settings } from 'styled-icons/material';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { VolumeUp } from 'styled-icons/fa-solid';

export const Container = styled.div`
    display: flex;
    align-items: center;
  justify-content: space-between;

    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;
    transition: background-color .2s;

    >div {
        display: flex;
        align-items: center;
    }

    >div span {
        font-size: 15px;
        color: var(--senary);
    }

    &:hover, 
    &.active {
        background-color: var(--quinary);
        
        >div span {
            color: var(--white);
        }

        > div:nth-child(2) svg {
            display: inherit;
        }
    }
    > div:nth-child(2) svg {
            display: none;
        }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;
export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;
export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;
    margin-left: 4px;

    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover {
    color: var(--white);
    }
`;
export const Volume = styled(VolumeUp)`
    width: 24px;
    height: 24px;

    color: var(--symbol);

`;