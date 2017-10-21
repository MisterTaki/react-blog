// https://reacttraining.com/react-router/web/guides/code-splitting

/* eslint-disable
  import/no-webpack-loader-syntax, react/jsx-filename-extension, no-shadow
*/

import React from 'react';
import { Bundle } from '@/components/Common';

import loadBlog from 'bundle-loader?lazy!@/containers/Blog';
import loadNotFound from 'bundle-loader?lazy!@/containers/NotFound';

// components load their module for initial visit
const Blog = props => (
  <Bundle load={loadBlog}>{Blog => <Blog {...props} />}</Bundle>
);

const NotFound = props => (
  <Bundle load={loadNotFound}>{NotFound => <NotFound {...props} />}</Bundle>
);

export default [
  {
    label: 'blog',
    path: '/blog',
    isExact: false,
    component: Blog,
  },
  {
    label: '404',
    isExact: false,
    component: NotFound,
  },
];

export blog from './blog';
