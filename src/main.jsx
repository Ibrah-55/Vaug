import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './links/About.jsx';
import Careers from './links/Careers.jsx';
import Contacts from'./links/Contacts.jsx';
import Terms from './links/Terms.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
    </Router>
    </>
  </React.StrictMode>,
)
