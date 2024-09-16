import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element = {<PostsList />} />
      <Route path="/posts/:id" element = {<PostDetails />} />
      <Route path="/new" element = {<h1> New Post Form </h1>} />
    </Routes>
  )
}

export default AppRoutes