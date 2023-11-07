import { useEffect, useState } from 'react';
import Slider from 'react-slick';

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
} from './Comments.styled';

const Comments = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isExpanded, setIsExpanded] = useState({});
  const [commentIndex, setCommentIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, commentIndex]);

  const maxLines = windowWidth < 768 ? '11' : '7';
  const width =
    windowWidth < 768 ? '328px' : windowWidth < 1440 ? '451px' : '387px';

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
    // autoplay: true,
    // autoplaySpeed: 5000,
    beforeChange: (current, next) => {
      setCommentIndex(next);
      setActiveSlide(next);
    },
  };

  const toggleExpand = idx => {
    setIsExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <Title>What my clients say</Title>

      <Slider {...settings}>
        {commentsBlocks.map(({ img, name, profession, text }, idx) => {
          const isActive = idx === activeSlide;
          const opacity = idx === 0;
          const expanded = isExpanded[idx];
          const lines = text.split(' ').length;
          console.log(lines);

          return (
            <WrapperMain
              style={{
                width,
                opacity: opacity ? 0 : 1,
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
                {lines > 40 && (
                  <ReadMore
                    $isExpanded={expanded}
                    onClick={() => toggleExpand(idx)}
                  >
                    read more
                  </ReadMore>
                )}
              </TextArea>
            </WrapperMain>
          );
        })}
      </Slider>
    </>
  );
};

export default Comments;
