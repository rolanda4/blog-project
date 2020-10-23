import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headbar from './headbar';
import Home from './home';
import BlogCard from './blog-card';
import Footer from './footer';

function App() {
  return (
    <>
    <Headbar /> 
    <Home />
    <BlogCard />
    <Footer />
    </>
  );
}

export default App;
