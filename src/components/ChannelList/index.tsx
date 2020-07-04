import React from   'react';
import ChannelTextButton from '../ChannelTextButton';
import ChannelVoiceButton from '../ChannelVoiceButton';
import { Container, Category, Separator, AddCategoryIcon } from './styles';

export const ChannelList: React.FC = () => {
    return (
        <Container>
        <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon />
        </Category>
        <ChannelTextButton channelName="chat-livre"/>
        <ChannelTextButton channelName="minecraft"/>
        <ChannelTextButton channelName="bot"/>
        <ChannelTextButton channelName="trabalho"/>
        <ChannelTextButton channelName="lol"/>
        <ChannelTextButton channelName="filmin"/>
        <ChannelTextButton channelName="fofocas"/>
        <Separator />
        <Category>
            <span>Canais de voz</span>
            <AddCategoryIcon />
        </Category>
        <ChannelVoiceButton channelName="de bobeira"/>
        <ChannelVoiceButton channelName="filmin"/>
        <ChannelVoiceButton channelName="minecraft"/>
        <ChannelVoiceButton channelName="Tech_Dojo"/>
        </ Container>
    );
};

export default ChannelList;