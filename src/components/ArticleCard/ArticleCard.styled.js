import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from 'polished';
import { common, grey, orange } from '@/style/colors';

const ArticleCardWrapper = styled.div`
  padding: ${rem('10px')} 0;
  margin: ${rem('10px')} 0;
`;

const TitleLink = styled(Link)`
  display: inline-block;
`;

const Title = styled.h1`
  height: ${rem('42px')};
  font-size: ${rem('26px')};
  color: ${common.darkBlack};

  &:hover {
    border-bottom: 2px solid ${common.theme};
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

const TagLink = styled(Link)`
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

const MoreLink = styled(Link)`
  display: inline-block;
  font-size: ${rem('14px')};
  font-weight: bold;
  color: ${common.theme};
  transition: all 0.4s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

export {
  ArticleCardWrapper,
  TitleLink,
  Title,
  Date,
  TagList,
  TagLink,
  Summary,
  MoreLink,
};
