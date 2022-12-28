import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../Context";
import FormBlog from "../components/FormBlog";

import Post from "../components/Post";
import mewimage from "../images/profile-user.png";
const Blog = () => {
  //state
  const [blogInfo, setBlogInfo] = useState({
    username: "",
    date: new Date().getTime(),
    content: "",
    likes: 0,
    image: `https://api.multiavatar.com/GouderHicham.svg`,
  });
  const { posts, setPosts } = useContext(AppContext);
  const [post, setPost] = useState({
    username: "",
    date: new Date().getTime(),
    content: "", // update content
    likes: 0,
    image: `https://api.multiavatar.com/GouderHicham.svg`,
  });
  //event handler
  function addBlog(e) {
    e.preventDefault();
    setPosts((old) => [...old, blogInfo]);
    setBlogInfo({
      username: "",
      date: new Date().getTime(),
      content: "",
      likes: 0,
      image: `https://api.multiavatar.com/GouderHicham.svg`,
    });
  }
  function addPost() {
    setPosts((old) => [...old, post]);
  }
  return (
    <>
      <div style={{ padding: "2em" }}>
        <center>
          <FormBlog
            onSubmit={addBlog}
            value1={blogInfo.username}
            value2={blogInfo.content}
            onchange1={(e) => {
              setBlogInfo((old) => ({ ...old, username: e.target.value }));
            }}
            onchange2={(e) => {
              setBlogInfo((old) => ({ ...old, content: e.target.value }));
            }}
          />
        </center>
      </div>
      {posts.map((post, i) => {
        return (
          <Post
            key={i}
            username={post.username}
            date={post.date}
            content={post.content}
            likes={post.likes}
            image={navigator.onLine ? post.image : mewimage}
          />
        );
      })}
      {/*<button onClick={addPost}>add one </button>*/}
    </>
  );
};
export default Blog;
//TODO: remove adding ip address to firebase and send messages directly !
