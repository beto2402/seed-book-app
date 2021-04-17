import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_POST } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/posts/Form";

function PostFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qUsers = useQuery(`{ users { } }`);
  const [callSave, qSave] = useSave(SAVE_POST, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { users = [] } = qUsers.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

PostFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PostFormSave;