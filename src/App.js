import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import Supplies from './pages/Supplies';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="testing" element={<Testing />}></Route>
          <Route path="supplies" element={<Supplies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;