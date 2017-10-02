import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from 'polished';
import { common, grey, orange } from '@/style/colors';

const Wrapper = styled.article`
  padding: ${rem('10px')} 0;
`;

const TitleLink = styled(Link)`
  display: inline-block;
`;

const Title = styled.h2`
  font-size: ${rem('26px')};
  color: ${common.darkBlack};

  &:hover {
    color: ${common.theme};
  }
`;

const Date = styled.p`
  margin: ${rem('10px')} 0;
  font-size: ${rem('14px')};
  color: ${grey[500]};
`;

const TagList = styled.div`
  margin: ${rem('10px')} -${rem('5px')};
`;

const Tag = styled(Link)`
  display: inline-block;
  padding: 0 ${rem('10px')};
  margin: 0 ${rem('5px')};
  background-color: ${grey[50]};
  font-size: ${rem('14px')};
  color: ${orange[500]};
`;

const Summary = styled.p`
  margin: ${rem('10px')} 0;
  font-size: ${rem('16px')};
  color: ${common.darkBlack};
  text-align: justify;
`;

const More = styled(Link)`
  font-size: ${rem('14px')};
  font-weight: bold;
  color: ${common.theme};
`;

const ArticleCard = ({ title, date, tags, summary, link }) => (
  <Wrapper>
    <TitleLink to={link}>
      <Title>{title}</Title>
    </TitleLink>
    <Date>{date}</Date>
    <TagList>
      {
        tags.map(item => (
          <Tag key={item.id} to={item.link}>
            {item.value}
          </Tag>
        ))
      }
    </TagList>
    <Summary>{summary}</Summary>
    <More to={link}>Read More</More>
  </Wrapper>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ArticleCard;
