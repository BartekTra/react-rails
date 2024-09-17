import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../constants";

function PostDetails() {

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `{
                post(id: ${id}) {
                  body
                  title
          }
          }
                  `
              
            
          }),
        });
        const json = await response.json();
        setPost(json.data.post);
      } catch (error) {
        console.error("Could not load post:", error);
      }
    }
    fetchCurrentPost();
  }, [id]);

  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body} </p>
      <Link to="/">Back</Link>
    </div>
  )

}

export default PostDetails;