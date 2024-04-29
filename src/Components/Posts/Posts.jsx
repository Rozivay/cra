import React from 'react';
import './Posts.css';

const Posts = ({ posts, onSelectPost }) => {
  const getShortValue = (value, id) => {
    if (value.length > 20) {
      return (
        <span>
          {value.substring(0, 20)}...
          <a href="#" className="more-info" onClick={(event) => handleMoreInfoClick(event, id)}> more</a>
        </span>
      );
    }
    return value;
  };

  const handleMoreInfoClick = (event, id) => {
    event.preventDefault();
    console.log(`more: ${id}`);
  };

  return (
    <div>
      
      <li>
        {posts.map((post, index) => (
          <li key={post.id}>
            <div className="post-container">
              <div>
                <h3>{index + 1}. {post.title}</h3>
                <p>{getShortValue(post.body, post.id)}</p>
              </div>
              <button onClick={() => onSelectPost(post)}>details</button>
            </div>
          </li>
        ))}
      </li>
    </div>
  );
};

export default Posts;