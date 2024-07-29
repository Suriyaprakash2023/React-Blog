import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import CreatePost from './screens/CreatePost/CreatePost.jsx';
import Footer from './components/Footer/Footer.jsx'
import Home from './screens/Home/Home.jsx';
import Post from './components/Post/Post.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/post' element={<Post/>} />
          <Route path='/post/:id' element={<PostDetails/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
