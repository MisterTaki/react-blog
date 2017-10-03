import { Home, Archives, Tags, Projects, Comments, About } from '@/containers/Blog';

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
