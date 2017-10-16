import React from 'react';
import PropTypes from 'prop-types';

import {
  ArticleCardWrapper,
  TitleLink,
  Title,
  Date,
  TagList,
  TagLink,
  Summary,
  MoreLink,
} from './ArticleCard.styled';

const ArticleCard = ({
  title,
  date,
  tags,
  summary,
  link,
  className,
}) => (
  <ArticleCardWrapper className={className}>
    <TitleLink to={link}>
      <Title>{ title }</Title>
    </TitleLink>
    <Date>{ date }</Date>
    <TagList>
      {
        tags.map(item => (
          <TagLink
            key={item.id}
            to={item.link}
          >
            { item.value }
          </TagLink>
        ))
      }
    </TagList>
    <Summary>{ summary }</Summary>
    <MoreLink to={link}>Read More</MoreLink>
  </ArticleCardWrapper>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ArticleCard;
