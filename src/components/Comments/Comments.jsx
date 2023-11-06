import { useState } from 'react';
import Slider from 'react-slick';
import LinesEllipsis from 'react-lines-ellipsis';

import commentsBlocks from './commentsBlock';

import { ReactComponent as ArrowLeft } from 'images/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'images/svg/arrow-right.svg';

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
} from './Comments.styled';

const Comments = () => {
  const [isExpanded, setIsExpanded] = useState({});

  const NextArrow = ({ onClick }) => {
    return (
      <ArrowNext onClick={onClick}>
        <ArrowRight />
      </ArrowNext>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <ArrowPrev onClick={onClick}>
        <ArrowLeft />
      </ArrowPrev>
    );
  };

  const [CommentIndex, setCommentIndex] = useState(0);

  const settings = {
    infinity: true,
    lazyLoading: true,
    speed: 300,
    centerMode: true,
    centralPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCommentIndex(next),
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centralPadding: '0',
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centralPadding: '0',
        },
      },
    ],
  };

  const toggleExpand = idx => {
    setIsExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <Title>What my clients say</Title>

      <Slider {...settings}>
        {commentsBlocks.map(({ img, name, profession, text }, idx) => {
          return (
            <WrapperMain className={idx === CommentIndex ? 'activeSlide' : ''}>
              <WrapperPersonal>
                <img src={img} alt={name} />
                <WrapperInfo>
                  <PersonalInfoName>{name}</PersonalInfoName>
                  <PersonalInfoProf>{profession}</PersonalInfoProf>
                </WrapperInfo>
              </WrapperPersonal>
              <TextArea $isExpanded={isExpanded[idx]}>
                {isExpanded[idx] ? (
                  <Text $isExpanded={isExpanded[idx]}>{text}</Text>
                ) : (
                  <LinesEllipsis
                    component={Text}
                    text={text}
                    maxLine="11"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                )}
                <ReadMore
                  $isExpanded={isExpanded[idx]}
                  onClick={() => toggleExpand(idx)}
                >
                  read more
                </ReadMore>
              </TextArea>
            </WrapperMain>
          );
        })}
      </Slider>
    </>
  );
};

export default Comments;
