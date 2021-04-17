import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import CommentDetails from "seed/examples/components/comments/Details";
import CommentList from "seed/examples/components/comments/List";
import CommentFormSave from "seed/examples/components/comments/FormSave";
import CommentFormSet from "seed/examples/components/comments/FormSet";
import { ModalRoute } from "seed/helpers";

const Comments = () =>
  <BrowserRouter basename="/examples/comments">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Comments</h1>
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
    <CommentList />

    {/* Modals */}
    <ModalRoute
        path="/:commentId(\d+)"
        component={CommentDetails} />
    <ModalRoute
      path="/create"
      component={CommentFormSave} />
    <ModalRoute
      path="/:commentId(\d+)/edit"
      component={CommentFormSet} />

    </div>
  </BrowserRouter>;

Comments.propTypes = {};

export default Comments;