import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';
import {BrowserRouter,Routes,Route} from "react-router-dom";

//import {BrowserRouter,Route,Switch} from "react-router";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='container'>
     <h3 className='m-4 d-flex justify-content-center text-info'>WEB API REACT APP</h3>
     </div>
     
    <Navigation/>
  
    <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/department' element={<Department />} />
          <Route path='/employee' element={<Employee />} />       
    </Routes>
    </BrowserRouter>  
     </>
  );
}

export default App;
