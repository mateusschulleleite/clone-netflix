import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Browser from './components/pages/Browser';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
