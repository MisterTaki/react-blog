import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { grey } from '@/style/colors';

const Footer = ({ className }) => (
  <footer className={className}>
    <section className="footer-wrapper">
      <p className="copyright">© 2017 | Gao Qi.</p>
    </section>
  </footer>
);

export default styled(Footer)`
  position: relative;
  flex: 0 0 auto;

  .footer-wrapper {
    max-width: 850px;
    padding: ${rem('10px')} 0;
    margin: 0 auto;
    border-top: 1px solid ${grey[200]};
  }

  .copyright {
    font-size: ${rem('14px')};
    text-align: center;
    color: ${grey[400]};
  }
`;
