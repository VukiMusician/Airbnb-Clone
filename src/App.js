import React from 'react';

//Import Components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import { Routes , Route} from 'react-router-dom';
//Import styles
import "./styles/app.scss"


function App() {
  return (

    //BEM Convention ! learn this!
    <div className="app">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<SearchPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
