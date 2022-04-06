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
    title: 'User Management',
    path: '/dashboard/usermanagement',
    icon: <ManageAccountsIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:[
      {
        title: 'User list',
        path: '/dashboard/usermanagement/userlist',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'User Menu',
        path: '/dashboard/usermanagement/usermenu',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Todos',
    path: '/dashboard/todos',
    icon: <AssignmentIcon/>,
  },
  {
    title: 'Gallery',
    path: '/dashboard/gallery',
    icon: <AssignmentIcon/>,
  },
];