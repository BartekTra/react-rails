import {useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from ".././constants"

function PostEditForm() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [,setLoading ] = useState(null);
  const [, setError] = useState(null);
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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation {
            updatePost(id: ${id}, title: "${post.title}", body: "${post.body}") {
              id
              title
              body
            }
          }
        `,
      }),
    });
    const json = await response.json();
    navigate(`/posts/${id}`);
  };

if(!post) return null

  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-title">Title</label>
          <br />
          <input 
            type="text"
            id="post-title"
            name="post-title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
            />
        </div>
        <div>
          <label htmlFor="post-body">Body</label>
          <br />
          <textarea
            id="post-body"
            name="post-body"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
        </form>
      </div>
  )
}

export default PostEditForm