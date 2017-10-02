import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from 'polished';
import { common } from '@/style/colors';

export default styled(NavLink)`
  display: block;
  height: ${'36px'};
  line-height: ${'36px'};
  margin: 0 ${rem('10px')};
  font-size: ${rem('16px')};
  color: ${common.darkBlack};

  &:hover {
    border-bottom: 3px solid ${common.theme};
  }

  &.active {
    border-bottom: 3px solid ${common.theme};
  }
`;
