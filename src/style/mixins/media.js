import { css } from 'styled-components';

const pad = inner => css`
  @media (max-width: 1024px) {
    ${inner}
  }
`;

const phone = inner => css`
  @media (max-width: 640px) {
    ${inner}
  }
`;

export default {
  pad,
  phone,
};
