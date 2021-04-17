import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/comments/FormSave';

test('examples/components/comments/FormSave', () => {
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useQuery({"posts": data.GQL_POSTS});
  mockGql.useSave({"saveComment": data.GQL_COMMENT});
  render(<FormSave />);
  expect(screen).toBeDefined();
});