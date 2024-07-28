import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import CreatePost from './screens/CreatePost/CreatePost.jsx';
import Home from './screens/Home/Home.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
