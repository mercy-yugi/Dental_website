import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Signup from './signup';
import Login from './login';
import BackgroundVideo from './home';
import Navbar from './components/navbar';
import About from './components/about';



function App() {
  return (
    <div>
      
  <Router>
  <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Navbar/>}/>
        <Route path="/home" element={<About/>}/>




      
  </Routes>  

 </Router>
 <BackgroundVideo/>
       
    </div>
  );
}

export default App;
