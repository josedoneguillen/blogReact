import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompCreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // Save post method
  const savePost = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title: title, content: content });
    navigate("/");
  };

  return (
    <div>
      <h1>Create blog post</h1>
      <form onSubmit={savePost}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompCreateBlog;
