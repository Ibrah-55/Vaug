import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './links/About.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  </React.StrictMode>,
)
