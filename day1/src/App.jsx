
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

function App() {

  return (
    <>
      <Router>
        <Routes><Route path="/" element={<Home />} /></Routes>
      </Router>
      <div>

      </div>
    </>
  )
}

export default App
