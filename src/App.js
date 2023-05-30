import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Auth from './components/authorization/Auth';
import SearchPage from './components/main/search-page/search/SearchPage';
import Results from './components/main/results-page/results/Results';

let test = true;

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/authorization' element={<Auth />} />
        <Route path='/search' element={<SearchPage/>} />

        {test ? <Route path="/search/results" element={<Results />} /> : null}
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
