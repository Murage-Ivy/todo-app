import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Sidebar from './Components/Sidebar';
import RouteList from './Routes';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/*" element={<Sidebar>
          <RouteList />
        </Sidebar>} />
      </Routes>

    </>





  );
}

export default App;
