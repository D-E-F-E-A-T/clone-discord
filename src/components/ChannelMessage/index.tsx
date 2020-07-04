import React from   'react';
import { Container, Avatar, Message, Header, Content, Mention } from './styles';
import me from '../../assets/me.jpg';
import daniel from '../../assets/daniel.jpg';
import filipez from '../../assets/filipez.jpg';
import junio from '../../assets/pp.jpg';
import sasa from '../../assets/sasa.jpg';

export { Mention } from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMentionMe?: boolean;
    hasMention?: boolean;
    isBot?: boolean;
    isMari?: boolean;
    isDaniel?: boolean;
    isFilipez?: boolean;
    isJunio?: boolean;
    isSasa?: boolean;
}

export const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMentionMe,
    hasMention,
    isBot,
    isMari,
    isDaniel,
    isFilipez,
    isJunio,
    isSasa
}) => {
    return (
        <Container className={hasMentionMe ? 'mentionMe' : ''}>
            <Avatar 
                className={isBot ? 'bot' : ''}>
                {isMari && <img src={me} alt="Mari" />}
                {isDaniel && <img src={daniel} alt="Daniel" />}
                {isFilipez && <img src={filipez} alt="Filipe" />}
                {isJunio && <img src={junio} alt="Juniro" />}
                {isSasa && <img src={sasa} alt="Sabrina" />}
            </ Avatar>
            <Message>
                <Header>
                <strong>{author}</strong>
                {isBot && <span>Bot</span>}
                <time>{date}</time>
                </Header>
                <Content> {content} </Content>
            </Message>
        </ Container>
    );
};

export default ChannelMessage;