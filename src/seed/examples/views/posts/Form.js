import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const PostForm = ({ post= {}, users= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Post</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={post}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Content */}
            <div class="form-group">
            <label class="input-label">Content</label>
            <Field type="text" name="content"
              component="textarea" rows="3"
              class="form-control" />
            </div>
            {/* Picture */}
            <div class="form-group">
            <label class="input-label">Picture</label>
            <FileField name="picture"
              accept="image/*" setFieldValue={setFieldValue}
              class="form-control"  />
            { values.picture ?
              <img src={values.picture.url} class="card-img mt-2" alt="Preview" /> : null }
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
            {/* Liked by */}
            <div class="form-group">
            <div>
            <label class="input-label">Liked by</label>
            <div class="form-control">
            <MultiField name="likedBy"
              values={users.map((e, idx) => { return {value: e, label: e.id}; }) }
              setFieldValue={setFieldValue} value={values.likedBy ? values.likedBy : []} />
            </div>
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

PostForm.propTypes = {
  post: PropTypes.object,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default PostForm;