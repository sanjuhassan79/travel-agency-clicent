
import './App.css';
import Register from './components/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Dashbords from './components/Dashbords/Dashbords/Dashbords';
import MakeAdmin from './components/Dashbords/MakeAdmin/MakeAdmin';
import Experience from './components/Dashbords/Experience/Experience';
import AllItem from './components/Dashbords/AllItem/AllItem';
import Update from './components/Dashbords/update/Update';
import AgencyDetail from './components/coms/serves/AgencyDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminRoute from './components/PrivateRoute/AdminRoute';
function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AgencyDetail/:Productid" element={<AgencyDetail />} />
        <Route path="/Update/:id" element={<PrivateRoute><Update /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashbords /></PrivateRoute>}>


        <Route path="/dashboard" element={<PrivateRoute><Experience /></PrivateRoute>} />


            <Route path="allItem" element={<AdminRoute ><AllItem /></AdminRoute>} />
            
            <Route path="make-admin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            
            
          </Route>
      </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
