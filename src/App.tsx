import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authenticated from './components/Authenticated';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
     <BrowserRouter basename='/'>
      <div className="App w-screen h-screen flex justify-center items-center text-white bg-zinc-950">
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/' Component={Authenticated(Home)} />
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
