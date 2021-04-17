import React from "react";
import PropTypes from "prop-types";
import View from "views/Feed";
import { useQuery } from "seed/gql"
import { Loading } from "seed/helpers"

function Feed(props) {
  const reqPost = useQuery(`
  {
    posts{
      id,
      createdBy{
        email
        profileImage{
          url
        }
      }
      createdAt
      content
      picture{
        url
      }
      likedBy{
        email
        profileImage{
          url
        }
      }
      comments{
        createdAt
        content
        createdBy{
          email
          profileImage{
            url
          }
        }
      }
    }
  }
  `)

  if (reqPost.loading) return < Loading />;
  if (reqPost.error) return "error"

  const {posts} = reqPost.data;
  
  return <View posts = {posts}
  />;
}

Feed.propTypes = {};

export default Feed;