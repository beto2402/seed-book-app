import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { COMMENT, SET_COMMENT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/comments/Form";

function CommentFormSet({ commentId, onCompleted = () => null, onError = () => null  }) {

  const qComment = useDetail(COMMENT, commentId);
  const qUsers = useQuery(`{ users { } }`);
  const qPosts = useQuery(`{ posts { } }`);
  const [callSet, qSet] = useSet(SET_COMMENT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qComment.loading) return <Loading />;

  const { comment = {} } = qComment.data;
  const { users = [] } = qUsers.data;
  const { posts = [] } = qPosts.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = commentId;
    callSet(values);
  };

  return <View
    comment={comment}
    users={users}
    posts={posts}
    error={error}
    onSubmit={onSubmit}
  />;
}

CommentFormSet.propTypes = {
  commentId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CommentFormSet;