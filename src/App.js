import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <>
      <div className="App-container md:flex flex-col md:flex-row md:min-h-screen w-full">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
            <Route path='/materi/:materiId' element={<Detail />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
