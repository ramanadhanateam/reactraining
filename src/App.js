import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Signup from'./components/Signup';
import Theme from'./Theme';
import './App.css'; 

const LoginPage = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Signup'));
function App() {
  const isAuthenticated =localStorage.getItem('user')
  return (
    <>
    <ThemeProvider theme={Theme}>
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
        <Route path="/"  element={<PrivateOutlet />}>
          <Route path="*" element={<ProtectedRoutes />} />          
        </Route>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<Signup />}/>
        </Routes>
      </Suspense>
    </Router>
    </ThemeProvider>
    </>
  );
}
export default App;
function PrivateOutlet() {
  const auth = localStorage.getItem('user')
  return auth ? <Outlet /> : <Navigate to="/login" />;
}