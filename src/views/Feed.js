import React from "react";
import PropTypes from "prop-types";

const Feed = ({ posts }) =>
  <div class="container" style={{"overflow": "scroll", "height": "100%"}}>
    {
      posts.map(post =>
        <div key={post.id} class="row mt-2">
          <div class="col">
            <div class="card h-100">
              {/* Body */}
              <div class="card-body pb-0">
                <div class="row align-items-center mb-2">
                  <div class="col-9">
                    <h4 class="mb-1">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar-group avatar-group-md avatar-circle">
                            <span class="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Ella Lauda">
                              <img class="avatar-img" src={post.createdBy.profileImage.url} alt="Image Description" />
                            </span>
                          </div>
                        </div>
                        <div class="col">
                          <a href="#">{post.createdBy.email}</a>
                        </div>
                      </div>
                    </h4>
                  </div>

                  <div class="col-3 text-right">
                    {/* Unfold */}
                    <div class="hs-unfold">
                      <a class="js-hs-unfold-invoker btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="javascript:;" data-hs-unfold-options="{
                            &quot;target&quot;: &quot;#teamsDropdown1&quot;,
                            &quot;type&quot;: &quot;css-animation&quot;
                          }" data-hs-unfold-target="#teamsDropdown1" data-hs-unfold-invoker="">
                        <i class="tio-more-vertical"></i>
                      </a>

                      <div id="teamsDropdown1" class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-sm dropdown-menu-right hs-unfold-hidden hs-unfold-content-initialized hs-unfold-css-animation animated" data-hs-target-height="145" data-hs-unfold-content="" data-hs-unfold-content-animation-in="slideInUp" data-hs-unfold-content-animation-out="fadeOut" style={{ "animation-duration": "300ms" }}>
                        <a class="dropdown-item" href="#">Rename team</a>
                        <a class="dropdown-item" href="#">Add to favorites</a>
                        <a class="dropdown-item" href="#">Archive team</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-danger" href="#">Delete</a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </div>
                {/* End Row */}
                <img class="avatar-img" src={post.picture.url} alt="Image Description" />
                <p>{post.content}</p>
              </div>
              {/* End Body */}

              {/* Footer */}
              <div class="card-footer border-0 pt-0">
                <div class="list-group list-group-flush list-group-no-gutters">
                  {/* List Item */}
                  <div class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <button type="button" class="btn btn-primary">
                          Like ({post.likedBy.length})
                          <i class="tio-like ml-1"></i>
                        </button>
                        {
                          post.likedBy.map (like =>
                            <div class="avatar-group avatar-group-xs avatar-circle">
                              <span class="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Ella Lauda">
                                <img class="avatar-img" src={like.profileImage.url} alt="Image Description" />
                              </span>
                            </div>
                          )
                        }
                      </div>
                      <div class="col-12 mt-2">
                        <small class="card-subtitle">Comments</small>
                        {
                          post.comments.map(comment =>
                            <div class="row">
                              <div class="col-auto">
                                <div class="avatar-group avatar-group-xs avatar-circle">
                                  <span class="avatar" data-toggle="tooltip" data-placement="top" title="" data-original-title="Ella Lauda">
                                    <img class="avatar-img" src={comment.createdBy.profileImage.url} alt="Image Description" />
                                  </span>
                                </div>
                              </div>
                              <div class="col">
                                {comment.content}
                              </div>
                            </div>
                          )
                        }
                      </div>

                    </div>
                  </div>
                  {/* End List Item */}

                </div>
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
      )
    }
  </div>

Feed.propTypes = {};

export default Feed;