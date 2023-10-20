import React from 'react';
import { API_URL } from './utils/contants';
import Authenticated from './components/Authenticated';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Test from './pages/Test';

function App() {
  return (
     <BrowserRouter basename='/'>
      <div className="App w-screen h-screen flex justify-center items-center text-white">
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/posts' Component={Authenticated(Test)} />
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
