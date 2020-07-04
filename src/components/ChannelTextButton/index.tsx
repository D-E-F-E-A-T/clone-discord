import React from   'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;
    isHome?: boolean;
}

export const ChannelTextButton: React.FC<Props> = ({
    channelName,
    selected,
    isHome   
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
        <div>
            <HashtagIcon />
            <span>{channelName}</span>
        </div>
        <div>
            <InviteIcon />
            <SettingsIcon />   
        </div>
        </ Container>
    );
};

export default ChannelTextButton;