import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ArticleCard } from '@/components/Blog';

const Wrapper = styled.div`
  padding: 0 ${rem('10px')};
`;

export default function () {
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
  return (
    <Wrapper>
      <ArticleCard title="测试" date="September 17, 2017" tags={tags} summary="测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容" link="/blog/article/001" />
      <ArticleCard title="测试" date="September 17, 2017" tags={tags} summary="测试内容" link="/blog/article/001" />
      <ArticleCard title="测试" date="September 17, 2017" tags={tags} summary="测试内容" link="/blog/article/001" />
      <ArticleCard title="测试" date="September 17, 2017" tags={tags} summary="测试内容" link="/blog/article/001" />
      <ArticleCard title="测试" date="September 17, 2017" tags={tags} summary="测试内容" link="/blog/article/001" />
    </Wrapper>
  );
}
