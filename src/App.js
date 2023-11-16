// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import About from './Pages/About/About';
import AddTeacher from './Pages/Administration/AddTeacher';
import TeacherProfile from './Pages/Administration/TeacherProfile';
import Teachers from './Pages/Administration/Teachers';
import ContactPage from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Maincontainer from './Pages/MainContainer/Maincontainer';
import Navbar from './Pages/Navbar/Navbar';
import SlideNav from './Pages/Navbar/SlideNav';
import NoticePage from './Pages/NoticePage/NoticePage';
import SideContainer from './Pages/SideContainer/SideContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <SlideNav></SlideNav>

        <div className='back'>
          <div className="container">
            <div className=' main-container'>
              <Routes>
                <Route path="/" element={<Maincontainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/administration/teachers" element={<Teachers />} />
                <Route path="/notice" element={<NoticePage />} />
                <Route path="/teacher/:id" element={<TeacherProfile />} />
                <Route path="/administration/addteacher" element={<AddTeacher></AddTeacher> } />
                <Route path="/contact" element={<ContactPage></ContactPage> } />
              </Routes>
            </div>
            <SideContainer />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
