import React from 'react';
import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />
            <Separator />
            <ServerButton isTechDojo/>
            <ServerButton hasNotifications />
            <ServerButton mentions={5} hasNotifications/>
            <ServerButton />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    );
};

export default ServerList;