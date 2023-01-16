import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Images from './Images';
import Calendar from './Calendar';
import './App.css'

const App = () => {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Images" element={<Images/>}/>
        <Route path="/Calendar" element={<Calendar/>}/>
      </Routes>
    </main>
  );
}

export default App;
