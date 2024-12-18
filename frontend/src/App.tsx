import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import './App.css'
import CreatePost from './pages/CreatePost.js';
import EditPost from './pages/EditPost.js';




function App() {

  return (
    <Router>
      <Routes>
        {/* Definindo a rota da Home */}
        <Route path='/' Component={Home}/>
        <Route path='/create-post' Component={CreatePost}/>
        <Route path='/edit-post/:id' Component={EditPost}/>
      </Routes>
    </Router>
  )
}

export default App
