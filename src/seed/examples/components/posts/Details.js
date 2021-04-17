import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_POST } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/posts/Details";

function PostDetails({ postId, onCompleted = () => null, onError = () => null }) {

  const reqPost = useDetail(`
  {
    post {
      content
      createdAt
      picture { }
      createdBy { }
      likedBy { }
    }
  }`, postId);
  
  const [callDelete] = useDelete(DELETE_POST, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqPost.loading) return <Loading />;
  if (reqPost.error) return "Error";
  const { post = {} } = reqPost.data;

  const onClickDelete = () =>
    callDelete({ id: postId });

  return <View
    post={post}
    onClickDelete={onClickDelete}
   />;
}

PostDetails.propTypes = {
  postId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PostDetails;