import React from   'react';
import { Container, Role, Separator, User, Avatar } from './styles';
import me from '../../assets/me.jpg';
import daniel from '../../assets/daniel.jpg';
import filipez from '../../assets/filipez.jpg';
import junio from '../../assets/pp.jpg';
import sasa from '../../assets/sasa.jpg';
import becca from '../../assets/becca.jpg';
import jonathas from '../../assets/jonathas.jpg';

export interface Props {
    nickname: string;
    isBot ?: boolean;
    isMari?: boolean;
    isDaniel?: boolean;
    isFilipez?: boolean;
    isJunio?: boolean;
    isSasa?: boolean;
    isBecca?: boolean;
    isJonathas?: boolean;
    isOnline?: boolean;
    isOcupado?: boolean;
    isAusente?: boolean;
};

const UserRow: React.FC<Props> = ({nickname, isBot, isMari, isDaniel, isFilipez, isJunio, isSasa, isBecca, isJonathas, isOnline, isOcupado, isAusente}) => {
    return (
        <User>
                <Avatar className={isBot ? 'bot' : ''}>
                {isMari && <img src={me} alt="Mari" />}
                {isDaniel && <img src={daniel} alt="Daniel" />}
                {isFilipez && <img src={filipez} alt="Filipe" />}
                {isJunio && <img src={junio} alt="Juniro" />}
                {isSasa && <img src={sasa} alt="Sabrina" />}
                {isBecca && <img src={becca} alt="Rebecca" />}
                {isJonathas && <img src={jonathas} alt="Jonathas" />}
                </Avatar>
            <strong>{nickname}</strong>
            {isBot && <span id="bot">Bot</span>}
            {isOnline && <span id="disponivel"></span>}
            {isOcupado && <span id="ocupado"></span>}
            {isAusente && <span id="ausente"></span>}
        </User>
    );
}

export const UserList: React.FC = () => {
    return (
        <Container>
        <Role>Disponível <Separator /> 4</Role>
        <UserRow nickname="Mari Mattos" isMari isOnline></UserRow>
        <UserRow nickname="Daniel Luiz" isDaniel isAusente></UserRow>
        <UserRow nickname="Wellington Junior" isJunio isOcupado></UserRow>
        <UserRow nickname="Jonathas Marques" isJonathas isAusente></UserRow>
        <Role>Offline <Separator /> 18</Role>
        <UserRow nickname="Sasa HELEN" isSasa></UserRow>
        <UserRow nickname="Filipez" isFilipez></UserRow>
        <UserRow nickname="Rebeca Fragoso" isBecca></UserRow>
        <UserRow nickname="Player" isBot></UserRow>
        <UserRow nickname="Thiago Pinto"></UserRow>
        <UserRow nickname="Segundinha"></UserRow>
        <UserRow nickname="Eve"></UserRow>
        <UserRow nickname="Joana"></UserRow>
        <UserRow nickname="Berguinha"></UserRow>
        <UserRow nickname="Joey"></UserRow>
        <UserRow nickname="Suzy"></UserRow>
        <UserRow nickname="Ana"></UserRow>
        <UserRow nickname="Kaka"></UserRow>
        <UserRow nickname="Drago"></UserRow>
        <UserRow nickname="Pablo"></UserRow>
        </ Container>
    );
};

export default UserList;