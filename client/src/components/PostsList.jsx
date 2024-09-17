import React, { useState, useEffect } from 'react';
import { API_URL } from "./../constants";
import { Link } from "react-router-dom";
function PostsList() {
  const [posts, setPosts] = useState([]);

  // Fetch Posts from API
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query {
                posts {
                  id
                  title
                  body
                }
              }
            `,
          }),
        });

        if (response.ok) {
          const json = await response.json();
          setPosts(json.data.posts);  // Corrected line
        } else {
          console.log("HTTP-Error: " + response.status);
          throw new Error(`HTTP error: ${response.status}`);
        }
      } catch (error) {
        console.error("Could not load posts:", error);  // Corrected error handling
      }
    }

    loadPosts();
  }, []);  // Added empty dependency array

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2> 
            <Link to={`/posts/${post.id}`} className="post-title"> 
            {post.title} 
            </Link> 
          </h2>
          <p> {post.body} </p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
