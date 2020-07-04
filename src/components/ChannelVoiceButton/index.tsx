import React from   'react';
import { Container, Volume, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;
    isHome?: boolean;
}

export const ChannelVoiceButton: React.FC<Props> = ({
    channelName,
    selected,
    isHome   
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
        <div>
            <Volume />
            <span>{channelName}</span>
        </div>
        <div>
            <InviteIcon />
            <SettingsIcon />   
        </div>
        </ Container>
    );
};

export default ChannelVoiceButton;