import {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Images from './Screens/Images';
import Calendar from './Screens/Calendar';
import './App.css'

const App = () => {
  const [selectedImage, setSelectedImage] = useState<{}>({})
  const [calendarImages, setCalendarImages] = useState<object[]>([])
  const [finalCalendar, setFinalCalendar] = useState<object[]>([])
  const [error, setError] = useState<boolean>(false)

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Images" element={<Images selectedImage={selectedImage} setSelectedImage={setSelectedImage} setCalendarImages={setCalendarImages} calendarImages={calendarImages} setFinalCalendar={setFinalCalendar} error={error} setError={setError}/>}/>
        <Route path="/Calendar" element={<Calendar calendarImages={calendarImages} setCalendarImages={setCalendarImages} finalCalendar={finalCalendar} setFinalCalendar={setFinalCalendar}/>}/>
      </Routes>
    </main>
  );
}

export default App;
