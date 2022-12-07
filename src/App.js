import './App.css';
import Navbar from './components/nav_bar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Find_Student from './pages/query/find_students';
import Find_Coach from './pages/query/find_coaches';
import Find_Workout from './pages/query/workouts.js';
import Sport_Info from './pages/query/sport_info.js';
import Insert_Coach from './pages/updates/insert_coach.js';
import Remove_Coach from './pages/updates/remove_coach.js';
import Update_Coach from './pages/updates/update_coach.js';
import Insert_Student from './pages/updates/insert_student.js';
import Remove_Student from './pages/updates/remove_student.js';
import Update_Student from './pages/updates/update_student.js';

function App() {

  return (
    
    <div className="get_information">
      <Router>
      <Navbar />
      <Routes>
          <Route path='/find_students' element={<Find_Student/>} />
          <Route path='/find_coaches' element={<Find_Coach/>} />
          <Route path='/sport_workout' element={<Find_Workout/>} />
          <Route path='/sport_info' element={<Sport_Info/>} />
          <Route path='/insert_coach' element={<Insert_Coach/>} />
          <Route path='/remove_coach' element={<Remove_Coach/>} />
          <Route path='/update_coach' element={<Update_Coach/>} />
          <Route path='/insert_student' element={<Insert_Student/>} />
          <Route path='/remove_student' element={<Remove_Student/>} />
          <Route path='/update_student' element={<Update_Student/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
