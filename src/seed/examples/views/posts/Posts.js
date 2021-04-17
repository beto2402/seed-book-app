import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import PostDetails from "seed/examples/components/posts/Details";
import PostList from "seed/examples/components/posts/List";
import PostFormSave from "seed/examples/components/posts/FormSave";
import PostFormSet from "seed/examples/components/posts/FormSet";
import { ModalRoute } from "seed/helpers";

const Posts = () =>
  <BrowserRouter basename="/examples/posts">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Posts</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <PostList />

    {/* Modals */}
    <ModalRoute
        path="/:postId(\d+)"
        component={PostDetails} />
    <ModalRoute
      path="/create"
      component={PostFormSave} />
    <ModalRoute
      path="/:postId(\d+)/edit"
      component={PostFormSet} />

    </div>
  </BrowserRouter>;

Posts.propTypes = {};

export default Posts;