import { useState, useEffect } from "react";
import axios from "axios";

export default function FetchUsers_Posts() {
  
    const [users, setUsers] = useState({});
    const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com`;
    axios.get(`${url}/users`)
        .then((res) => {
            const users = {}
            res.data.map(user => {
                users[user.id] = user
            })
            setUsers(users);
        });
    axios.get(`${url}/posts`)
      .then((res) => setPosts(res.data));
  }, []);
    
    
  return (
        
           <div classname='container'>
                
                  
                        <div classname='user_details'> 
                                {posts.map((post) => (
                                <div key={post.id}>
                                    <p><b>Id: </b>{users[post.userId].id}</p>
                                    <p><b>Name:</b> {users[post.userId].name}</p>
                                    <p><b>Username:</b> {users[post.userId].username}</p>
                                    <p><b>Post title:</b> {post.title}</p>
                                    <p><b>Post body:</b> {post.body}</p>
                                </div>
                              
                        ))}</div>
                
            </div>
        
        );
}