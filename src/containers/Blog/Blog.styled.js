import styled from 'styled-components';
import { rem } from 'polished';

import { Header, Footer } from '@/components/Blog';
import { BackTop } from '@/components/Common';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledHeader = styled(Header)`
  position: relative;
  flex: 0 0 auto;
`;

const MainContainer = styled.main`
  position: relative;
  flex: 1 0 auto;
`;

const MainWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

const StyledFooter = styled(Footer)`
  position: relative;
  flex: 0 0 auto;
`;

const StyledBackTop = styled(BackTop)`
  position: fixed;
  right: ${rem('32px')};
  bottom: ${rem('45px')};
`;

export {
  BlogWrapper,
  StyledHeader as Header,
  MainContainer,
  MainWrapper,
  StyledFooter as Footer,
  StyledBackTop as BackTop,
};
