import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="card">
      {posts.map((post) => (
        <div className="product-item" key={post.id}>
          <img src={post.thumbnail} alt={post.title} className="img" />
          <div className="product-info">
            <h4>{post.title}</h4>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
