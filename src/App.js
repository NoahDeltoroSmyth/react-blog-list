import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getBlogs } from '../src/services/blogs';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const grabData = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    grabData();
  }, []);
  return (
    <section className="main">
      <Header />
      <Footer />
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  );
}

export default App;
