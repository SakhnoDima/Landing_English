import {
  HeroSection,
  HeroDescription,
  DescWrapper,
  ReadMoreBtn,
} from './Hero.styled';
import { ReactComponent as HeroSvg } from '../../images/svg/hero-svg.svg';
import { useState } from 'react';
import Button from '../Button/Button';

const Hero = () => {
  const [isReadMore, setReadMore] = useState(false);

  return (
    <HeroSection>
      <p className="hero__title">Hello there!</p>
      <h1 className="hero__title">I'm Victoria, your Language Coach </h1>
      <DescWrapper>
        <p className="hero__desc">
          Helping clients on their path to learn languages
          {isReadMore ? '.' : '...'}
        </p>
        {isReadMore && (
          <HeroDescription>
            Why coach and not a simple tutor? In my work I combine traditional
            tutoring and best coaching techniques. My 10-years experience as a
            university teacher and simultaneous interpreter taught me to work
            with all sorts of clients with different needs.&nbsp;
            <span>
              I am here not just to explain grammar or give you the list of
              words, I plan to coach you in your learning path so you could
              improve your language skills.
            </span>
          </HeroDescription>
        )}
        {!isReadMore && (
          <ReadMoreBtn onClick={() => setReadMore(true)}>read more</ReadMoreBtn>
        )}
      </DescWrapper>
      <HeroSvg
        style={{ position: 'relative', left: '-34px', marginTop: '45px' }}
      />
      <Button $type="origin" $size="hero">
        Book a trial lesson
      </Button>
    </HeroSection>
  );
};

export default Hero;
