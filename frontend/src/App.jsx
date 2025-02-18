import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import AboutUs from "./components/AboutUs";
import ContactUs from './components/ContactUs';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );

}

export default App
