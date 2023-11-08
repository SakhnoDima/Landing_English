import Button from 'components/Button/Button';
import React, { useEffect, useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import mobBack from 'images/chat_png/backMob.png';
import tabBack from 'images/chat_png/backTab.png';
import deskBack from 'images/chat_png/backDesk.png';

import {
  MainParagraphMom,
  Price,
  StyledCard,
  StyledList,
  StyledMainParagraph,
  StyledReadMore,
  StyledWrap,
  TwoParagraphMom,
  YouGet,
} from './PriceCardsList.styled';
import Chat from 'components/Chat/Chat';
import Container from 'components/Container/Container';

const PriceCardsList = () => {
  const [isActiveid, setIsActiveId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDetails, setShowDetails] = useState({
    specificGoal: false,
    lazyStart: false,
    tiredLessons: false,
    maternityLeave: false,
  });
  const [widthActive, setWidthEctive] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let backgroundImage;

  if (windowWidth >= 1440) {
    backgroundImage = deskBack;
  } else if (windowWidth >= 768) {
    backgroundImage = tabBack;
  } else {
    backgroundImage = mobBack;
  }

  const background = {
    background: `url(${backgroundImage})`,
  };

  const toggleDetails = (card, cardElement) => {
    const windowSize = window.innerWidth;

    if (windowSize >= 768 && windowSize < 1440) {
      setShowDetails({
        specificGoal: card === 'specificGoal',
        lazyStart: card === 'lazyStart',
        tiredLessons: card === 'tiredLessons',
        maternityLeave: card === 'maternityLeave',
      });
      widthActive?.classList.remove('active');
    } else {
      setShowDetails({
        ...showDetails,
        [card]: !showDetails[card],
      });
    }

    if (cardElement) {
      cardElement.classList.add('active');
      setWidthEctive(cardElement);
    }
  };

  const CardHeight = () => {
    const conditionResult = windowWidth >= 1440 ? '433px' : '411px';

    return conditionResult;
  };

  return (
    <StyledWrap style={background}>
      <Chat />
      <Container>
        <Flipper
          flipKey={`${showDetails.specificGoal}${showDetails.lazyStart}${showDetails.tiredLessons}${showDetails.maternityLeave}`}
        >
          <StyledList $id={isActiveid} className="list">
            <Flipped flipId="specificGoal">
              <StyledCard
                className="StyledCard div1"
                style={{
                  height: showDetails.specificGoal ? CardHeight() : '114px',
                }}
              >
                <h2>Do you have a specific goal? </h2>
                {showDetails.specificGoal && (
                  <>
                    <StyledMainParagraph>
                      You need individual sessions so we can achieve your goals
                      in your own pace
                    </StyledMainParagraph>
                    <YouGet>You get:</YouGet>
                    <ul>
                      <li>individual learning plan</li>
                      <li>
                        self-study tasks language support after the session
                      </li>
                      <li>personalized exercises</li>
                    </ul>
                    <Price>Price = 100 zł</Price>
                  </>
                )}
                {showDetails.specificGoal ? (
                  <div style={{ marginTop: 'auto' }}>
                    <Button $type={'secondary'} $size={'choose'}>
                      <p>Choose</p>
                    </Button>
                  </div>
                ) : (
                  <StyledReadMore
                    onClick={() => {
                      toggleDetails(
                        'specificGoal',
                        document.querySelector('.StyledCard:nth-child(1)')
                      );
                      setIsActiveId(1);
                    }}
                  >
                    Read more
                  </StyledReadMore>
                )}
              </StyledCard>
            </Flipped>
            <Flipped flipId="lazyStart">
              <StyledCard
                className="StyledCard div2"
                style={{
                  height: showDetails.lazyStart ? CardHeight() : '114px',
                }}
              >
                <h2>Lazy to get started?</h2>
                {showDetails.lazyStart && (
                  <>
                    <StyledMainParagraph>
                      Take a friend or two to support you in learning English.
                      On group sessions it be more fun
                    </StyledMainParagraph>
                    <YouGet>You get:</YouGet>
                    <ul>
                      <li>learning plan that will fit everyone in a group</li>
                      <li>role plays</li>
                      <li>team tasks</li>
                    </ul>
                    <Price>Price = 60 zł/ person</Price>
                  </>
                )}
                {showDetails.lazyStart ? (
                  <div style={{ marginTop: 'auto' }}>
                    <Button $type={'secondary'} $size={'choose'}>
                      <p>Choose</p>
                    </Button>
                  </div>
                ) : (
                  <StyledReadMore
                    onClick={() => {
                      toggleDetails(
                        'lazyStart',
                        document.querySelector('.StyledCard:nth-child(2)')
                      );
                      setIsActiveId(2);
                    }}
                  >
                    Read more
                  </StyledReadMore>
                )}
              </StyledCard>
            </Flipped>
            <Flipped flipId="tiredLessons">
              <StyledCard
                className="StyledCard div3"
                style={{
                  height: showDetails.tiredLessons ? CardHeight() : '114px',
                }}
              >
                <h2>Tired of "lessons"?</h2>
                {showDetails.tiredLessons && (
                  <>
                    <StyledMainParagraph>
                      Telephone conversations are perfect to keep up with the
                      language. You can practice any time and any day.
                    </StyledMainParagraph>
                    <YouGet>You get:</YouGet>
                    <ul>
                      <li>everyday conversation </li>
                      <li>lots of practice</li>
                      <li>breaking up the language barrier</li>
                    </ul>
                    <Price>Price = 100 zł/ week</Price>
                  </>
                )}
                {showDetails.tiredLessons ? (
                  <div style={{ marginTop: 'auto' }}>
                    <Button $type={'secondary'} $size={'choose'}>
                      <p>Choose</p>
                    </Button>
                  </div>
                ) : (
                  <StyledReadMore
                    onClick={() => {
                      toggleDetails(
                        'tiredLessons',
                        document.querySelector('.StyledCard:nth-child(3)')
                      );
                      setIsActiveId(3);
                    }}
                  >
                    Read more
                  </StyledReadMore>
                )}
              </StyledCard>
            </Flipped>
            <Flipped flipId="maternityLeave">
              <StyledCard
                className="StyledCard div4"
                style={{
                  height: showDetails.maternityLeave ? CardHeight() : '114px',
                }}
              >
                <h2>Are you a mum on maternity leave?</h2>
                {showDetails.maternityLeave && (
                  <>
                    <MainParagraphMom>
                      If you don't want to loose your language fluency, grab
                      your kid and come to a weekly English meetings for mums
                    </MainParagraphMom>
                    <TwoParagraphMom>
                      Grab you kid and come to a daily English meeting with
                      other mums who don't want to loose their language fluency
                      staying on a maternity leave
                    </TwoParagraphMom>
                    <Price>Price = free of charge</Price>
                  </>
                )}
                {showDetails.maternityLeave ? (
                  <div style={{ marginTop: 'auto' }}>
                    <Button $type={'secondary'} $size={'choose'}>
                      <p>Choose</p>
                    </Button>
                  </div>
                ) : (
                  <StyledReadMore
                    onClick={() => {
                      toggleDetails(
                        'maternityLeave',
                        document.querySelector('.StyledCard:nth-child(4)')
                      );
                      setIsActiveId(4);
                    }}
                  >
                    Read more
                  </StyledReadMore>
                )}
              </StyledCard>
            </Flipped>
          </StyledList>
        </Flipper>
      </Container>
    </StyledWrap>
  );
};

export default PriceCardsList;
