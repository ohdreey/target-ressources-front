import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './screens/Home'
import Page1 from './screens/Page1';

import './App.css';



function App() {
  return (
    <div className="body">
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={''} />
          <Route path='/page3' element={''} />
            <Route path='/page3/:id' element={''} />
        </Routes>
    </div>
  );
}

export default App;
