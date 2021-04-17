import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/posts/List';

test('examples/components/posts/List', () => {
  mockGql.usePagination({"postPagination": data.GQL_POST_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});