import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/comments/List";

function CommentList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqComments = usePagination(`
  {
    commentPagination {
      totalPages
      comments {
        content
        createdAt
        createdBy { }
        post { }
      }
    }
  }`, pageNum, pageSize);

  if (reqComments.loading) return <Loading />;
  if (reqComments.error) return "Error";
  const { comments = [], totalPages = 0 } = reqComments.data.commentPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    comments={comments}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

CommentList.propTypes = {};

export default CommentList;