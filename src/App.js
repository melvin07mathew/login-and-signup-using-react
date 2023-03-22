import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route Component={Login} path='/'/>
        <Route Component={Signup} path='/signup'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
