import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes';
import SideBarDraw from '../components/SideBar/SidebarDraw'
const ProtectedRoutes = () => (
  <SideBarDraw>
     <Suspense
       fallback={<p>Loading.....</p>}
     >
      <Routes>
        <Route path="/"  element={<Navigate to="/login" />} />
          {routes.map(({ component: Component, path, exact }) => (
            <Route
                path={`/${path}`}
                key={path}
                exact={exact}
                element={<Component />}
                />
                ))}
      </Routes>
    </Suspense>  
  </SideBarDraw>
);
export default ProtectedRoutes;