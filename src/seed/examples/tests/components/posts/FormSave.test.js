import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/posts/FormSave';

test('examples/components/posts/FormSave', () => {
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSave({"savePost": data.GQL_POST});
  render(<FormSave />);
  expect(screen).toBeDefined();
});