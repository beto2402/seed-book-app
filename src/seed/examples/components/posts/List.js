import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/posts/List";

function PostList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqPosts = usePagination(`
  {
    postPagination {
      totalPages
      posts {
        content
        createdAt
        picture { }
        createdBy { }
        likedBy { }
      }
    }
  }`, pageNum, pageSize);

  if (reqPosts.loading) return <Loading />;
  if (reqPosts.error) return "Error";
  const { posts = [], totalPages = 0 } = reqPosts.data.postPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    posts={posts}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

PostList.propTypes = {};

export default PostList;