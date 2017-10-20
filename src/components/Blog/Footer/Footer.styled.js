import styled from 'styled-components';
import { rem } from 'polished';

import { grey } from '@/style/colors';

const FooterText = styled.section`
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

export { FooterText, Copyright };
