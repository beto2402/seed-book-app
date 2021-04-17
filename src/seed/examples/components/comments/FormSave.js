import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_COMMENT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/comments/Form";

function CommentFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qUsers = useQuery(`{ users { } }`);
  const qPosts = useQuery(`{ posts { } }`);
  const [callSave, qSave] = useSave(SAVE_COMMENT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { users = [] } = qUsers.data;
  const { posts = [] } = qPosts.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    users={users}
    posts={posts}
    error={error}
    onSubmit={onSubmit}
  />;
}

CommentFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default CommentFormSave;