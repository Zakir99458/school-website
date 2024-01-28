import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/about' element={<About></About>} />
          <Route exact path='/contact' element={<Contact></Contact>} />
          <Route exact path='/' element={<Home></Home>} />
          <Route exact path='/courses' element={<Courses></Courses>} />

      
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
