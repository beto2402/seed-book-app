import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { POST, SET_POST } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/posts/Form";

function PostFormSet({ postId, onCompleted = () => null, onError = () => null  }) {

  const qPost = useDetail(POST, postId);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_POST, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qPost.loading) return <Loading />;

  const { post = {} } = qPost.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = postId;
    callSet(values);
  };

  return <View
    post={post}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

PostFormSet.propTypes = {
  postId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PostFormSet;