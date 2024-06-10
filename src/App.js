import './App.css';
import Homepage from './Component/Homepage';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Credentials from './Credentials';
import UploadDoc from './UploadDoc';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage/>}> </Route>
        <Route path="/credentials" element={<Credentials/>}></Route>
        <Route path="/uploadDoc" element={<UploadDoc/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
