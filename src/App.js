import React, { Suspense, useState, useEffect } from 'react';
import PostDetails from './Components/Post Details/PostDetails';
import Posts from './Components/Posts/Posts';



function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {selectedPost ? (
          <PostDetails post={selectedPost} onBack={handleBack} />
        ) : (
          <Posts posts={posts} onSelectPost={handleSelectPost} />
        )}
      </Suspense>
    </div>
  );
}

export default App;