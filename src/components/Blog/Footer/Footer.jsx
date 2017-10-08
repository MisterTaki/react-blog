import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { grey } from '@/style/colors';

const FooterContainer = styled.footer`
  position: relative;
  flex: 0 0 auto;
`;

const FooterWrapper = styled.section`
  max-width: 850px;
  padding: ${rem('10px')} 0;
  margin: 0 auto;
  border-top: 1px solid ${grey[200]};
`;

const Copyright = styled.p`
  font-size: ${rem('14px')};
  text-align: center;
  color: ${grey[400]};
`;

export default function () {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Copyright>© 2017 | Gao Qi.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}
