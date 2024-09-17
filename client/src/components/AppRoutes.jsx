import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import NewPostForm from "./NewPostForm";  
import PostEditForm from "./PostEditForm";

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element = {<PostsList />} />
      <Route path="posts/:id" element = {<PostDetails />} />
      <Route path="/new" element = {<NewPostForm />} />
      <Route path="/posts/:id/edit" element = {<PostEditForm />} />
    </Routes>
  )
}

export default AppRoutes