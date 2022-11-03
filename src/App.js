import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Cuisines from './components/Cuisines/Cuisines';
import Diet from './components/Diet/Diet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CuisinesResults from './components/Cuisines/CuisinesResults';
import SearchResults from './components/SearchResults/SearchResults';
import Recipe from './components/Recipe/Recipe';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/search/:search' element={<SearchResults />}/>
          </Route>
          <Route path='/cuisines' element={<Cuisines />}>
            <Route path='/cuisines/:cuisine' element={<CuisinesResults />} />
          </Route>
          <Route path='/on-diet' element={<Diet />} />
          <Route path='/recipe/:name' element={<Recipe />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
