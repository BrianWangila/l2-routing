import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';
import User from '../user/User'
import { Doubler } from '../user/User';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

// types or Routers
    // HashRouter
    // MemoryRouter
    // BrowserRouter

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>
    <User/>
   </div>
  );
}

function MainApp(){

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const links = numbers.map((number) => (<Link to={`/doubler/${number}`}>ITEM: {number}</Link>))

  return(
    <Router>
      {/* All routes go here */}
      <div className="topNavBar">
        {/* Links can go anywhere */}
        <Link className="active" to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/user/faith">User Faith</Link>
        <Link to="/doubler/1">DOUBLE</Link>
        {links}

      </div>

      <Routes>
        {/* individual route go here */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/doubler/:num" element={<Doubler />} />
      </Routes>
    </Router>
  )
}

export default App;
export {MainApp}