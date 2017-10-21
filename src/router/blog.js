// https://reacttraining.com/react-router/web/guides/code-splitting

/* eslint-disable
  import/no-webpack-loader-syntax, react/jsx-filename-extension, no-shadow
*/

import React from 'react';
import { Bundle } from '@/components/Common';

import loadHome from 'bundle-loader?lazy!@/containers/Blog/Home';
import loadArchives from 'bundle-loader?lazy!@/containers/Blog/Archives';
import loadTags from 'bundle-loader?lazy!@/containers/Blog/Tags';
import loadProjects from 'bundle-loader?lazy!@/containers/Blog/Projects';
import loadComments from 'bundle-loader?lazy!@/containers/Blog/Comments';
import loadAbout from 'bundle-loader?lazy!@/containers/Blog/About';

// components load their module for initial visit
const Home = props => (
  <Bundle load={loadHome}>{Home => <Home {...props} />}</Bundle>
);

const Archives = props => (
  <Bundle load={loadArchives}>{Archives => <Archives {...props} />}</Bundle>
);

const Tags = props => (
  <Bundle load={loadTags}>{Tags => <Tags {...props} />}</Bundle>
);

const Projects = props => (
  <Bundle load={loadProjects}>{Projects => <Projects {...props} />}</Bundle>
);

const Comments = props => (
  <Bundle load={loadComments}>{Comments => <Comments {...props} />}</Bundle>
);

const About = props => (
  <Bundle load={loadAbout}>{About => <About {...props} />}</Bundle>
);

export default function (path) {
  return {
    [`${path}/`]: {
      label: 'Home',
      description: '主页',
      isExact: true,
      component: Home,
    },
    [`${path}/tags`]: {
      label: 'Tags',
      description: '标签检索',
      isExact: false,
      component: Tags,
    },
    [`${path}/archives`]: {
      label: 'Archives',
      description: '文章归档',
      isExact: false,
      component: Archives,
    },
    [`${path}/projects`]: {
      label: 'Projects',
      description: '开源项目',
      isExact: false,
      component: Projects,
    },
    [`${path}/comments`]: {
      label: 'Comments',
      description: '留言墙',
      isExact: false,
      component: Comments,
    },
    [`${path}/about`]: {
      label: 'About',
      description: '关于我',
      isExact: false,
      component: About,
    },
  };
}
