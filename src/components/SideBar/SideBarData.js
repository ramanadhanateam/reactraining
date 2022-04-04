import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';

export const SideBarData = [
  {
    title: 'DashBoard',
    path: '/',
    icon: <HomeIcon  />,
  },
  {
    title: 'User Manager',
    path: '/User',
    icon: <ManageAccountsIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:[
      {
        title: 'User list',
        path: '/User/UserList',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'User Menu',
        path: '/User/UserMenu',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Todos',
    path: '/Todos',
    icon: <AssignmentIcon/>,
  },
];