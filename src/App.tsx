import {BrowserRouter as Router,Routes, Route} from 'react-router'
import './App.css'
import HomePage from './pages/home'

function App() {


  return (
    <Router>
      <Routes>
        <Route path ='/' element={<HomePage />}/>
        <Route path ='*' element={<h1> Page not found </h1>}/>
      </Routes>
    </Router>
  )
}

export default App
