import React from 'react';

import { FooterText, Copyright } from './Footer.styled';

export default ({ className }) => (
  <footer className={className}>
    <FooterText>
      <Copyright>© 2017 | Gao Qi.</Copyright>
    </FooterText>
  </footer>
);
