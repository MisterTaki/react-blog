import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { ArticleCard } from '@/components/Blog';

const Home = ({ className }) => {
  const tags = [
    {
      id: 1,
      value: 'React',
      link: '/tags/react',
    },
    {
      id: 2,
      value: 'Vue',
      link: '/tags/vue',
    },
  ];

  const data = [
    {
      id: '1',
      title: '测试',
      date: 'September 17, 2017',
      tags,
      summary: '测试内容',
      link: '/blog/article/001',
    },
    {
      id: '2',
      title: '测试',
      date: 'September 17, 2017',
      tags,
      summary: '测试内容',
      link: '/blog/article/001',
    },
    {
      id: '3',
      title: '测试',
      date: 'September 17, 2017',
      tags,
      summary: '测试内容',
      link: '/blog/article/001',
    },
  ];

  return (
    <div className={className}>
      { data.map((item) => {
          const { id, ...props } = item;
          return (
            <ArticleCard key={id} {...props} />
          );
        })
      }
    </div>
  );
};

export default styled(Home)`
  padding: 0 ${rem('16px')};
`;
