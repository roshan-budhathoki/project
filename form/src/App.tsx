import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Signin from './components/signIn';
import Signup from './components/signUp';

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />}/>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    );
};

export default App;