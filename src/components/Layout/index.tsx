import React from   'react';
import ServerName from '../ServerName';
import ServerList from '../ServerList';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';
import { Grid } from './styles';

const Layout: React.FC = () => {
    return (
        <Grid>
        <ServerList />
        <ServerName />
        <ChannelInfo />
        <ChannelList />
        <UserInfo />
        <ChannelData />
        <UserList />
        </ Grid>
    );
};

export default Layout;