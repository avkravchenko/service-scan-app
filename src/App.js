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
import { useEffect, useState } from 'react';

function App() {

  const tokenFromLs = localStorage.getItem('token')
  const tokenFromStore = useSelector(state => state.token)

  const dispatch = useDispatch()
  dispatch(addToken(tokenFromLs))


  const ProtectedRoute = ({ token, children }) => {
    if (!token) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authorization" element={<Auth />} />
        <Route path="/search" element={<ProtectedRoute token={tokenFromLs || tokenFromStore}><SearchPage /></ProtectedRoute>} />
        <Route path="/search/results" element={<ProtectedRoute token={tokenFromLs || tokenFromStore}><Results /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
