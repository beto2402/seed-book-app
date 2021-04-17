import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/comments/Details';

test('examples/components/comments/Details', () => {
  mockGql.useDetail({"comment": data.GQL_COMMENT});
  mockGql.useDelete({"deleteComment": data.GQL_COMMENT});
  render(<Details />);
  expect(screen).toBeDefined()
});