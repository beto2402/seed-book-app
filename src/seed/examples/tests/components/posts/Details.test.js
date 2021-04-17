import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/posts/Details';

test('examples/components/posts/Details', () => {
  mockGql.useDetail({"post": data.GQL_POST});
  mockGql.useDelete({"deletePost": data.GQL_POST});
  render(<Details />);
  expect(screen).toBeDefined()
});