import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Language from './Language';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route path="/language" element={<Language />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
