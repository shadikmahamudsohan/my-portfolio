import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import HeaderNav from './Pages/Home/HeaderNav/HeaderNav';

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
