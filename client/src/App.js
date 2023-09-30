import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Search from './Pages/Search';
function App() {
  return (
    <>
  

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Search/>} />
    </Routes>
    </>


  );
}

export default App;
