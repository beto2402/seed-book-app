import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/comments/FormSet';

test('examples/components/comments/FormSet', () => {
  mockGql.useDetail({"comment": data.GQL_COMMENT});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useQuery({"posts": data.GQL_POSTS});
  mockGql.useSet({"setComment": data.GQL_COMMENT});
  render(<FormSet />);
  expect(screen).toBeDefined();
});