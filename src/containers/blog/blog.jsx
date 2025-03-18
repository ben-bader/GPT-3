import {
 
  blog02,
  blog03,
  blog04,
  blog05,
} from "./import";
import "./blog.css";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
   
          <div className="blog">
            <img src={blog02} alt="blog" />
            <div className="gpt3__blog-container-content">
            <div className="grbA-content">
          <p>06/11/2024</p>
          <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
          <p>Read Full Article</p>
        </div>
            </div>
          </div>
          <div className="blog">
            <img src={blog03} alt="blog" />
            <div className="gpt3__blog-container-content">
            <div className="grbA-content">
          <p>06/11/2024</p>
          <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
          <p>Read Full Article</p>
        </div>
            </div>
          </div>
          <div className="blog">
            <img src={blog04} alt="blog" />
            <div className="gpt3__blog-container-content">
            <div className="grbA-content">
          <p>06/11/2024</p>
          <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
          <p>Read Full Article</p>
        </div>
            </div>
          </div>
          <div className="blog">
            <img src={blog05} alt="blog" />
            <div className="gpt3__blog-container-content">
            <div className="grbA-content">
          <p>06/11/2024</p>
          <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
          <p>Read Full Article</p>
        </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Blog;
