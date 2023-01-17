import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Images from './Images';
import Calendar from './Calendar';
import './App.css'

const App = () => {
  const [selectedImage, setSelectedImage] = useState<{}>({})
  const [calendarImages, setCalendarImages] = useState<object[]>([])

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Images" element={<Images selectedImage={selectedImage} setSelectedImage={setSelectedImage} setCalendarImages={setCalendarImages} calendarImages={calendarImages}/>}/>
        <Route path="/Calendar" element={<Calendar calendarImages={calendarImages}/>}/>
      </Routes>
    </main>
  );
}

export default App;
