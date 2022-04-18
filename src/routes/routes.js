import { lazy } from 'react';

const routes = [
  {
    path: '/dashboard', 
    component: lazy(() => import('../components/DashBoard')),
    exact: true
  },
  {
    path: '/dashboard/usermanagement',
    component: lazy(() => import('../components/Users/UserManagement')),
    exact: true
  },
  {
    path: '/dashboard/usermanagement/userlist',
    component: lazy(() => import('../components/Users/UserList')),
    exact: true
  },
  {
    path: '/dashboard/gallery',
    component: lazy(() => import('../components/Gallery/GalleryView')),
    exact: true
  },
  {
    path: '/dashboard/todo',
    component: lazy(() => import('../components/Users/Todos')),
    exact: true
  },
];
export default routes;