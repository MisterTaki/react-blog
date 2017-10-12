import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { common } from '@/style/colors';

const DefaultChildren = ({ className }) => (
  <span className={`${className} iconfont icon-top`} />
);

export default styled(DefaultChildren)`
  display: block;
  width: ${rem('40px')};
  height: ${rem('40px')};
  background-color: ${common.theme};
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  line-height: ${rem('40px')};
  color: ${common.white};
  text-align: center;
  transition: all 0.2s ease-in;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 3px 3px 0 rgba(0, 0, 0, 0.24);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  }
`;
