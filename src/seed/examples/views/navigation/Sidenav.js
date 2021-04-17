import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidenav = () =>
  <aside class="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered  navbar-dark">
    <div class="navbar-vertical-container">
      <div class="navbar-vertical-footer-offset">
        <div class="navbar-brand-wrapper justify-content-between">
          {/* Logo */}
          <a class="navbar-brand" href="./index.html" aria-label="Front">
            <img class="navbar-brand-logo" src="/theme/svg/logos/logo-white.svg" alt="Logo" />
            <img class="navbar-brand-logo-mini" src="/theme/svg/logos/logo-short.svg" alt="Logo" />
          </a>

          {/* Vertical Toggle */}
          <button type="button" class="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark">
            <i class="tio-clear tio-lg"></i>
          </button>
        </div>

        {/* Content */}
        <div class="navbar-vertical-content">
          <ul class="navbar-nav navbar-nav-lg nav-tabs">
          
            {/* Menu */}
            
            {/* Comments */}
            <li class="navbar-item">
              <NavLink
                to="/comments"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Comments</span>
              </NavLink>
            </li>
            
            {/* Posts */}
            <li class="navbar-item">
              <NavLink
                to="/posts"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Posts</span>
              </NavLink>
            </li>
            
            {/* Users */}
            <li class="navbar-item">
              <NavLink
                to="/users"
                className="js-nav-tooltip-link nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Users</span>
              </NavLink>
            </li>
            
            <div class="dropdown-divider my-3" style={ {borderTopColor: "#ffffff20"} }></div>
            
            {/* Options */}
            <Link
              to="/logout"
              className="js-nav-tooltip-link nav-link">
              <i class="tio-sign-out nav-icon"></i>
              <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Logout</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>

  </aside>;

Sidenav.propTypes = {};

export default Sidenav;