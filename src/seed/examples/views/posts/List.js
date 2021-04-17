import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const PostList = ({ posts, pageNum = 1, totalPages = 0, onClickPage = () => {} }) =>
  <div>
  <ul class="list-group">
  {
    posts.map((post) =>
      <li key={post.id} class="list-group-item">
        <div class="row align-items-center gx-2">
          <div class="col-auto">
            <img class="avatar avatar-xs avatar-4by3" src="/theme/svg/components/placeholder-img-format.svg" alt="Icon" />
          </div>

          <div class="col">
            <h5 class="mb-0">
              <Link to={`/${post.id}`}>POST {post.id}</Link>
            </h5>
            <ul class="list-inline list-separator small">
              <li class="list-inline-item">{ JSON.stringify(post).substring(0,70) + "…" }</li>
              <li class="list-inline-item">{ new Date(post.createdAt).getDate() + "." + (new Date(post.createdAt).getMonth() + 1) + "." + new Date(post.createdAt).getFullYear() }</li>

            </ul>
          </div>

          <div class="col-auto">
            {/* Options */}
            <Link to={`/${post.id}`} className="btn btn-sm btn-white">
              <span class="d-none d-sm-inline-block mr-1">Details</span>
            </Link>
          </div>
        </div>
      </li>
    )
  }
  </ul>

  <nav class="mt-3">
    <ul class="pagination">
      <li onClick={() => onClickPage(pageNum -1 )} class="page-item" style={ { visibility: pageNum > 1 ? "visible" : "hidden"} }>
        <a class="page-link" aria-label="Previous"><span aria-hidden="true">«</span><span class="sr-only">Previous</span></a>
      </li>
      {
         Array(totalPages).fill(0).map((ignore, idx) =>
           <li onClick={() => onClickPage(idx+1)} key={idx} class={"page-item " + (idx == pageNum - 1 ? "active" : "")}>
             <a class="page-link">{idx + 1}</a>
           </li>
         )
      }
      <li onClick={() => onClickPage(pageNum + 1)} class="page-item" style={ { visibility: pageNum <= totalPages - 1 ? "visible" : "hidden"} }>
        <a class="page-link" aria-label="Next"><span aria-hidden="true">»</span><span class="sr-only">Next</span></a>
      </li>
    </ul>
  </nav>
  </div>;

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func
};

export default PostList;