import { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../images/svg/close-text-arrow.svg';

import {
  HeroSection,
  HeroDescription,
  DescWrapper,
  ReadMoreBtn,
  CloseTextBtn,
} from './Hero.styled';
import Button from '../Button/Button';
import { LogoAnimate } from './LogoAnimate';
import Container from 'components/Container/Container';

const Hero = () => {
  const [isReadMore, setReadMore] = useState(false);

  return (
    <Container hero={true}>
    <HeroSection>
      <p className="hero__title">Hello there!</p>
      <h1 className="hero__title">I'm Victoria, your Language Coach </h1>
      <DescWrapper $isOpen={isReadMore}>
        <p className="hero__desc">
          Helping clients on their path to learn languages
          {isReadMore ? '.' : '...'}
        </p>
        {isReadMore && (
          <>
            <HeroDescription>
              Why coach and not a simple tutor? In my work I combine traditional
              tutoring and best coaching techniques. My 10-years experience as a
              university teacher and simultaneous interpreter taught me to work
              with all sorts of clients with different needs.
              <br />
              <span>
                I am here not just to explain grammar or give you the list of
                words, I plan to coach you in your learning path so you could
                improve your language skills.
              </span>
            </HeroDescription>
            <CloseTextBtn onClick={()=> setReadMore(false)}>
              Close&nbsp;<CloseIcon width={24} height={24} />
            </CloseTextBtn>
          </>
        )}
        {!isReadMore && (
          <ReadMoreBtn onClick={() => setReadMore(true)}>read more</ReadMoreBtn>
        )}
      </DescWrapper>
      <LogoAnimate />
      <Button $type="origin" $size="hero">
        Book a trial lesson
      </Button>
    </HeroSection>
    </Container>
  );
};

export default Hero;
