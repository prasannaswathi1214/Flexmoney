import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Amount from './Components/Amount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/payamount' element = {<Amount/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
