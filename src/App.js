import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import HeaderNav from './Pages/Home/HeaderNav/HeaderNav';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <HeaderNav />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
