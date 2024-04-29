import React from 'react';

const PostDetails = ({ post, onBack }) => {
  return (
    <div>
      
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={onBack}>back</button>
    </div>
  );
};

export default PostDetails;