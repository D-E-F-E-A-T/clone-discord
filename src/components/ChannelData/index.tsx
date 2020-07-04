import React from   'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage from '../ChannelMessage';
import { Mention } from '../ChannelMessage/styles';

export const ChannelData: React.FC = () => {
    return (
<Container>
    <Messages>
        <ChannelMessage
        author= "Mari Mattos"
        date="02/07/2020"
        content="Hoje é meu dia, rapaziada!"
        isMari
        />
        <ChannelMessage
        author= "Daniel Luis"
        date="02/07/2020"
        content={ <>Koe,
        <Mention> Mari Mattos</Mention>, parabéns!
        </>}
        hasMentionMe
        isDaniel
        />
        <ChannelMessage
        author= "Filipez"
        date="02/07/2020"
        content="Parabéns, Mari!"
        isFilipez/>
        <ChannelMessage
        author= "Wellington Junior"
        date="02/07/2020"
        content={ <>
        <Mention>Mari Mattos</Mention>, bora codar pra comemorar, te envio um lanche
        </>}
        hasMentionMe
        isJunio
        />
        <ChannelMessage
        author= "Filipez"
        date="02/07/2020"
        content="Quê isso, quero lanche também"
        isFilipez/>
        <ChannelMessage
        author= "Mari Mattos"
        date="02/07/2020"
        content="Juniô vai bancá geral!!"
        isMari/>
        <ChannelMessage
        author= "Mari Mattos"
        date="02/07/2020"
        content="!p parabéns pra você xuxa"
        isMari/>
        <ChannelMessage
        author= "Player"
        date="02/07/2020"
        content={ <>Now playing
        <Mention> Looping Parabéns - Xuxa YOUTUBE VIDEO</Mention>
        </>}
        isBot
        hasMention
        />
        <ChannelMessage
        author= "Daniel Luis"
        date="02/07/2020"
        content="Qual foi, Mari, looping não tem como"
        isDaniel
        />
        <ChannelMessage
        author= "Mari Mattos"
        date="02/07/2020"
        content= "Tá, tá mas... Cadê meu bolo de aniversário?"
        isMari/>
        <ChannelMessage
        author= "Sasa HELEN"
        date="02/07/2020"
        content="Parabéns Mariii! Cola aqui no canal, bora fazer alguma coisa"
        isSasa/>
        <ChannelMessage
        author= "Mari Mattos"
        date="02/07/2020"
        content={ <>
        <Mention>Sasa HELEN</Mention> claroo, bora de filimin!
        </>}
        hasMention
        isMari
        />
    </Messages>
    <InputWrapper>
    <Input type="text" placeholder="Digite sua mensagem">
    </Input>
    <InputIcon />
    </InputWrapper>
</Container>
    );
};

export default ChannelData;