import styled from 'styled-components';

import mob from 'images/whyMe_mobile.png';
import tablet from 'images/whyMe_tablet.png';
import desktop from 'images/whyMe_desktop.png';

export const Wrapper = styled.section`
  background: no-repeat url(${mob});
  background-color: var(--background-color-white);
  background-size: cover;
  padding: 60px 0;
  scroll-margin-block-start: 80px;

  @media (min-width: 768px) {
    background-image: url(${tablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${desktop});
  }
`;
