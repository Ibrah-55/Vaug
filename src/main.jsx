import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './links/About.jsx';
import Careers from './links/Careers.jsx';
import Contacts from'./links/Contacts.jsx';
import Terms from './links/Terms.jsx';
import Blog from './links/Blog.jsx';
import Service from './links/Service.jsx';
import NotFound from './links/NotFound.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Router >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Service />} />

        <Route path="*" element={<NotFound/>} />


      </Routes>
    </Router>
    </>
  </React.StrictMode>,
)
