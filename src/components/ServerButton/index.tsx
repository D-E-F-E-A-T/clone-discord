import React from 'react';
import { Button } from './styles';
import Logo from '../../assets/Logo.svg';
import techdojo from '../../assets/techdojo.svg';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
    isTechDojo?: boolean;
};

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    isTechDojo
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            isTechDojo={isTechDojo}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="rocketseat" />}
            {isTechDojo && <img src={techdojo} alt="TechDojo" />}
        </Button>
    )
};

export default ServerButton;