import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Auth from './components/authorization/Auth';
import SearchPage from './components/main/search-page/search/SearchPage';
import Results from './components/main/results-page/results/Results';
import { useDispatch, useSelector } from "react-redux";
import { addToken, removeExpireDate, removeToken } from './store/actions';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function App() {

  const tokenFromLs = localStorage.getItem('token')
  const tokenFromStore = useSelector(state => state.token)

  const dispatch = useDispatch()
  dispatch(addToken(tokenFromLs))

  useEffect(() => {
    const expireDate = localStorage.getItem('expire')
    if (expireDate) {
      const expireDateFormated = dayjs(expireDate).format('YYYY-MM-DD');
      const today = dayjs().format('YYYY-MM-DD');

      if (today === expireDateFormated) {
        localStorage.removeItem('expire')
        localStorage.removeItem('token')
        dispatch(removeExpireDate())
        dispatch(removeToken())
      }
    }
    
  },[])

  const ProtectedRoute = ({ token, children }) => {
    if (!token) {
      return <Navigate to="/service-scan-app" replace />;
    }

    return children;
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/service-scan-app" element={<Main />} />
        <Route path="/authorization" element={<Auth />} />
        <Route path="/search" element={<ProtectedRoute token={tokenFromLs || tokenFromStore}><SearchPage /></ProtectedRoute>} />
        <Route path="/search/results" element={<ProtectedRoute token={tokenFromLs || tokenFromStore}><Results /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
