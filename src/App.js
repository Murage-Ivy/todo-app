import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Sidebar from './Components/Sidebar';
import SignupForm from './Components/SignupForm';
import RouteList from './Routes';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/*" element={<Sidebar>
          <RouteList />
        </Sidebar>} />
      </Routes>

    </>





  );
}

export default App;
