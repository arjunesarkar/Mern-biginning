import React from 'react';
import Navber from './Components/navbar/Navber';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Excercise from './Components/Excercise/Excercise';
import CreateExcercise from './Components/Excercise/CreateExcercise';
import User from './Components/User/User';
import CreateUser from './Components/User/CreateUser';

function App() {
  return (
    <Router>
      <Navber />
      <br />
      <Routes>
        <Route path="/excercise" element={<Excercise />} />
        <Route path="/createexcercise" element={<CreateExcercise />} />
        <Route path="/user" element={<User />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
