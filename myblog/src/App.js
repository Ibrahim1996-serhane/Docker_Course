import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Make an Axios GET request
    axios.get('http://92.204.249.139:4000')
      .then(response => {
        // Use response.data to access the JSON data
        setBlogs(response.data);
      })
      .catch(error => {
        // Handle any errors here
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Docker 1.7</h1>
        {blogs && blogs.map(blog => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
