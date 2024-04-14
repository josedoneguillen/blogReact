import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompShowBlogs = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  // get blogs method
  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlog(res.data);
  };

  // Delete blog method
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`);
    getBlogs();
  };

  return (
    <div>
      <Link to="/create" className="btn btn-success">
        Add new post
      </Link>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <th>{blog.id}</th>
              <td>{blog.title}</td>
              <td>{blog.content}</td>
              <td>
                <Link to={`/edit/${blog.id}`} className="btn btn-success me-3">
                  Edit
                </Link>
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompShowBlogs;
