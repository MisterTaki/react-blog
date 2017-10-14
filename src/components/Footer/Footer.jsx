import React from 'react';
import { FooterText, Copyright } from './Footer.styled';

export default ({ className }) => (
  <footer className={className}>
    <FooterText className="footer-wrapper">
      <Copyright className="copyright">© 2017 | Gao Qi.</Copyright>
    </FooterText>
  </footer>
);
