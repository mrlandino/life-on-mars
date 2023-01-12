import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Properties from './Properties';
import Weather from './Weather';

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Weather" element={<Weather/>}/>
        <Route path="/Properties" element={<Properties/>}/>
      </Routes>
    </>
  );
}

export default App;
