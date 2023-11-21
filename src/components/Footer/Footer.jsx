import React from 'react';

import { ReactComponent as Mail } from '../../images/svg/mail.svg';
import { ReactComponent as Telegram } from '../../images/svg/send.svg';
import Foto from '../../images/Victoria.png';

import {
  NameStyled,
  StyledFooter,
  StyledFoto,
  StyledLink,
  StyledList,
  StyledSpan,
  TitleStyled,
  Wrapper,
} from './Footer.styled';
import Container from 'components/Container/Container';

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <Container>
        <Wrapper>
          <div>
            <TitleStyled>Contact me</TitleStyled>
            <NameStyled>Victoria Chuchmii</NameStyled>
            <StyledList>
              <li>
                <StyledLink href="mailto:victoria.chuchmii@gmail.com">
                  <Mail /> <StyledSpan>victoria.chuchmii@gmail.com</StyledSpan>
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://t.me/vickychuchmii">
                  <Telegram /> <StyledSpan>@vickychuchmii</StyledSpan>
                </StyledLink>
              </li>
            </StyledList>
          </div>
          <StyledFoto src={Foto} alt="Victoria Chuchmii" />
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
