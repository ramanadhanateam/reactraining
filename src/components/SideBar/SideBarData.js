import React from 'react';
import * as RiIcons from 'react-icons/ri';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BallotIcon from '@mui/icons-material/Ballot';

export const SideBarData = [
  {
    title: 'DashBoard',
    path: '/dashboard',
    icon: <HomeIcon />,
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
        icon: <SummarizeIcon />,
      },
      {
        title: 'User Menu',
        path: '/dashboard/usermanagement/usermenu',
        icon: <BallotIcon />,
      },
    ]
  },
  {
    title: 'Todos',
    path: '/dashboard/todo',
    icon: <AssignmentIcon/>,
  },
  {
    title: 'Gallery',
    path: '/dashboard/gallery',
    icon: <AssignmentIcon/>,
  },
];