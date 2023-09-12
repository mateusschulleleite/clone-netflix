import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Browser from './components/pages/Browser';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browser" element={<Browser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
