import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const CommentForm = ({ comment= {}, users= [], posts= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Comment</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={comment}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Content */}
            <div class="form-group">
            <label class="input-label">Content</label>
            <Field type="text" name="content"
              class="form-control" />
            </div>
            {/* Created by */}
            <div class="form-group">
            <div>
            <label class="input-label">Created by</label>
            <Field component="select" name="createdBy.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {users.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Post */}
            <div class="form-group">
            <div>
            <label class="input-label">Post</label>
            <Field component="select" name="post.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {posts.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            </div>
            {error ? <div class="alert alert-soft-danger">{error}</div> : null}
            <button type="submit" class="btn btn-block btn-primary">Send</button>
          </Form> }
          </Formik>
        </div>
      </div>
    </div>

  </div>;

CommentForm.propTypes = {
  comment: PropTypes.object,
  users: PropTypes.array,
  posts: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default CommentForm;