import { motion } from 'framer-motion';
import styled from 'styled-components';

const PopupStyles = styled(motion.div)`
  width: 343px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 46px 26px;
  .message {
    font-size: 24px;
    font-weight: 500;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ $isError }) =>
      $isError ? 'var(--error-text-color)' : 'var(--black)'};
  }

  @media screen and (min-width: 768px) {
    padding: 46px 32px;
    width: 356px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    .message {
      line-height: 32px;
    }
  }
`;

const PopUpWindow = ({ children, $isError }) => (
  <PopupStyles $isError={$isError}>{children}</PopupStyles>
);

export default PopUpWindow;
