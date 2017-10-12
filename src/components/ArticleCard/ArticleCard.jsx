import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from 'polished';
import { common, grey, orange } from '@/style/colors';

const ArticleCard = ({
  title,
  date,
  tags,
  summary,
  link,
  className,
}) => (
  <div className={className}>
    <Link className="title-link" to={link}>
      <h1 className="title">{ title }</h1>
    </Link>
    <p className="date">{ date }</p>
    <div className="tag-list">
      {
        tags.map(item => (
          <Link
            className="tag-link"
            key={item.id}
            to={item.link}
          >
            { item.value }
          </Link>
        ))
      }
    </div>
    <p className="summary">{ summary }</p>
    <Link className="more" to={link}>Read More</Link>
  </div>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default styled(ArticleCard)`
  padding: ${rem('10px')} 0;
  margin: ${rem('10px')} 0;

  .title-link {
    display: inline-block;
  }

  .title {
    height: ${rem('42px')};
    font-size: ${rem('26px')};
    color: ${common.darkBlack};

    &:hover {
      border-bottom: 2px solid ${common.theme};
    }
  }

  .date {
    margin: ${rem('10px')} 0;
    font-size: ${rem('14px')};
    color: ${grey[500]};
  }

  .tag-list {
    margin: ${rem('10px')} -${rem('5px')};
  }

  .tag-link {
    display: inline-block;
    padding: 0 ${rem('10px')};
    margin: 0 ${rem('5px')};
    background-color: ${grey[50]};
    font-size: ${rem('14px')};
    color: ${orange[500]};
  }

  .summary {
    margin: ${rem('10px')} 0;
    font-size: ${rem('16px')};
    color: ${common.darkBlack};
    text-align: justify;
  }

  .more {
    display: inline-block;
    font-size: ${rem('14px')};
    font-weight: bold;
    color: ${common.theme};
    transition: all 0.4s ease;

    &:hover {
      transform: translateX(10px);
    }
  }
`;
