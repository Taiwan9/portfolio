import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element = {<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='project' element={<Project/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
