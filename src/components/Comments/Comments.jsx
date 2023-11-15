import { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import LinesEllipsis from 'react-lines-ellipsis';

import commentsBlocks from './commentsBlock';

import {
  Title,
  WrapperMain,
  WrapperPersonal,
  WrapperInfo,
  PersonalInfoProf,
  PersonalInfoName,
  Text,
  TextArea,
  ReadMore,
  ArrowNext,
  ArrowPrev,
  ArrowLeftSvg,
  ArrowRightSvg,
  WrapperBackground,
} from './Comments.styled';
import Container from 'components/Container/Container';
import { animationSettings } from 'constants/constants';

const Comments = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [isExpanded, setIsExpanded] = useState({});
  // const [commentIndex, setCommentIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const maxLines = !isTablet && !isDesktop < 768 ? '11' : '7';
  const width = `${
    !isTablet && !isDesktop ? '328' : isTablet && !isDesktop ? '451' : '387'
  }px`;

  const NextArrow = ({ onClick }) => {
    return (
      <ArrowNext onClick={onClick}>
        <ArrowRightSvg />
      </ArrowNext>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <ArrowPrev onClick={onClick}>
        <ArrowLeftSvg />
      </ArrowPrev>
    );
  };

  const settings = {
    // initialSlide: commentIndex,
    infinity: true,
    lazyLoading: true,
    speed: 300,
    centerMode: true,
    centralPadding: '60px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    variableWidth: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => {
      // setCommentIndex(next);
      setActiveSlide(next);
    },
  };

  const toggleExpand = idx => {
    setIsExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <WrapperBackground id="whatMyClientsSay">
      <Container>
        <Title>What my clients say...</Title>
        <motion.div {...animationSettings}>
          <Slider {...settings}>
            {commentsBlocks.map(({ img, name, profession, text }, idx) => {
              const isActive = idx === activeSlide;
              const expanded = isExpanded[idx];
              const lines = text.split(' ').length;

              return (
                <WrapperMain
                  style={{
                    width,
                    height: expanded ? 'auto' : '',
                  }}
                  key={idx}
                  className={isActive ? 'activeSlide' : ''}
                >
                  <WrapperPersonal>
                    <img src={img} alt={name} />
                    <WrapperInfo>
                      <PersonalInfoName>{name}</PersonalInfoName>
                      <PersonalInfoProf>{profession}</PersonalInfoProf>
                    </WrapperInfo>
                  </WrapperPersonal>
                  <TextArea $isExpanded={expanded}>
                    {expanded ? (
                      <Text $isExpanded={expanded}>{text}</Text>
                    ) : (
                      <LinesEllipsis
                        component={Text}
                        text={text}
                        maxLine={maxLines}
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                      />
                    )}
                    {(lines > 34 && isDesktop) ||
                    (lines > 40 && isTablet) ||
                    lines > 41 ? (
                      <ReadMore
                        $isExpanded={expanded}
                        onClick={() => toggleExpand(idx)}
                      >
                        read more
                      </ReadMore>
                    ) : null}
                  </TextArea>
                </WrapperMain>
              );
            })}
          </Slider>
        </motion.div>
      </Container>
    </WrapperBackground>
  );
};

export default Comments;
