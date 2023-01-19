import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Images from './Screens/Images';
import Calendar from './Screens/Calendar';
import './App.css'


const App = () => {
  const [selectedImage, setSelectedImage] = useState<{}>({})
  const [calendarImages, setCalendarImages] = useState<object[]>([])
  const [finalCalendar, setFinalCalendar] = useState<object[]>([])

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Images" element={<Images selectedImage={selectedImage} setSelectedImage={setSelectedImage} setCalendarImages={setCalendarImages} calendarImages={calendarImages} setFinalCalendar={setFinalCalendar}/>}/>
        <Route path="/Calendar" element={<Calendar calendarImages={calendarImages} finalCalendar={finalCalendar} setFinalCalendar={setFinalCalendar}/>}/>
      </Routes>
    </main>
  );
}

export default App;
