import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/posts/FormSet';

test('examples/components/posts/FormSet', () => {
  mockGql.useDetail({"post": data.GQL_POST});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSet({"setPost": data.GQL_POST});
  render(<FormSet />);
  expect(screen).toBeDefined();
});