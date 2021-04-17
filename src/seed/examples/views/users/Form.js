import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const UserForm = ({ user= {}, onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">User</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={user}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* Profile image */}
            <div class="form-group">
            <label class="input-label">Profile image</label>
            <FileField name="profileImage"
              accept="image/*" setFieldValue={setFieldValue}
              class="form-control"  />
            { values.profileImage ?
              <img src={values.profileImage.url} class="card-img mt-2" alt="Preview" /> : null }
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

UserForm.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default UserForm;