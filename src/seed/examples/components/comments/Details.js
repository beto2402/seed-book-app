import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_COMMENT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/comments/Details";

function CommentDetails({ commentId, onCompleted = () => null, onError = () => null }) {

  const reqComment = useDetail(`
  {
    comment {
      content
      createdAt
      createdBy { }
      post { }
    }
  }`, commentId);
  
  const [callDelete] = useDelete(DELETE_COMMENT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqComment.loading) return <Loading />;
  if (reqComment.error) return "Error";
  const { comment = {} } = reqComment.data;

  const onClickDelete = () =>
    callDelete({ id: commentId });

  return <View
    comment={comment}
    onClickDelete={onClickDelete}
   />;
}

CommentDetails.propTypes = {
  commentId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CommentDetails;