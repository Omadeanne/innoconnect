import { Routes, Route } from 'react-router-dom';
import Home from './pages/landing-page/Home';
import Login from './pages/landing-page/Login';
import Signup from './pages/landing-page/Signup';
import NotFound from './pages/NotFound/NotFound';
import Community from './pages/community/Community';


function App() {
  return (
    <Routes>
      {/* <Route
        path='/'
        element={<Home />}
      /> */}
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Signup />}
      />
      <Route
        path='/community'
        element={<Community />}
      />
      <Route path='/' element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
