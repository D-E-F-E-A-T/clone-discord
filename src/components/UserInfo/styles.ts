import styled from "styled-components";
import me from '../../assets/me.jpg';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-image: url(${me});
    background-size: cover;
`;

export const UserData = styled.div`
        margin-left: 10px;
        >strong {
        font-size: 13px;
        color: white;
        display: block;
    }

    >span {
        color: var(--gray);
        font-size:13px;
    }
`;

export const Icons = styled.div`

display: flex;
align-items: right;

>svg:not(:first-child) {
    margin-left: 7px;
}
`;

export const MicIcon = styled(Mic)`
height: 20px;
width: 20px;

color: var(--gray);
cursor: pointer;

transition: .2s;

 &:hover {
     color: white;
 }
`;

export const HeadphoneIcon = styled(Headset)`
height: 20px;
width: 20px;

color: var(--gray);
cursor: pointer;

transition: .2s;

 &:hover {
     color: white;
 }
`;

export const SettingsIcon = styled(Settings)`
height: 20px;
width: 20px;

color: var(--gray);
cursor: pointer;

transition: .2s;

 &:hover {
     color: white;
 }
`;