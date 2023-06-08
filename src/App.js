import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Auth from './components/authorization/Auth';
import SearchPage from './components/main/search-page/search/SearchPage';
import Results from './components/main/results-page/results/Results';
import { useDispatch, useSelector } from "react-redux";
import { addToken } from './store/actions';
import { useEffect } from 'react';

function PrivateRoute({ isAuthenticated, ...props }) {
  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" replace />;
  }
}

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const tokenFormLs = localStorage.getItem('token')
    if (tokenFormLs) {
      dispatch(addToken(tokenFormLs))
    }
}, [])

  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/authorization' element={<Auth />} />
        <Route
          path="/search"
          element={<SearchPage />}
        />
        <Route path="/search/results" element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
