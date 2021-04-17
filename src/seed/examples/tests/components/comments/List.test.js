import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/comments/List';

test('examples/components/comments/List', () => {
  mockGql.usePagination({"commentPagination": data.GQL_COMMENT_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});