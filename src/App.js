import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Flower = lazy(() => import('./Flower'));

function App() {
  return (
    <Router>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

      <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Flower" element={<Flower />} />

      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
