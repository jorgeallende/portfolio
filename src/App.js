import './App.css';
import Index from './pages/Index';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <Index/>
    </Router>
  );
}

export default App;