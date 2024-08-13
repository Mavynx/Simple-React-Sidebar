import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Signup from './pages/Signup'
import Categories from './pages/Categories'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

 


function App() {


  return (
    <>
      <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      </Router>


      </div>
    </>
  )
}

export default App
