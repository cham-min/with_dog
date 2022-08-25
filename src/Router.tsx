import SignIn from 'pages/Login/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Login/Signup/Signup';
import MainRouter from './pages/MainRouter/MainRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<MainRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;