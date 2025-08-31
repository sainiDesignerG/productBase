import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;
