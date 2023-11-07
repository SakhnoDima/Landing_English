import Button from 'components/Button/Button';
import React, { useEffect, useState } from 'react';
import {
  MainParagraphMom,
  Price,
  StyledCard,
  StyledList,
  StyledMainParagraph,
  StyledReadMore,
  TwoParagraphMom,
  YouGet,
} from './PriceCardsList.styled';

const PriceCardsList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDetails, setShowDetails] = useState({
    specificGoal: false,
    lazyStart: false,
    tiredLessons: false,
    maternityLeave: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleDetails = (card, cardElement, id) => {
    setShowDetails({
      ...showDetails,
      [card]: !showDetails[card],
    });

    if (cardElement) {
      cardElement.classList.add('active');
    }
  };
  const CardHeight = () => {
    const conditionResult = windowWidth >= 1440 ? '433px' : '411px';

    return conditionResult;
  };
  return (
    <div>
      <StyledList>
        <StyledCard
          className="StyledCard"
          style={{
            height: showDetails.specificGoal ? CardHeight() : '114px',
          }}
        >
          <h2>Do you have a specific goal? </h2>
          {showDetails.specificGoal && (
            <>
              <StyledMainParagraph>
                You need individual sessions so we can achieve your goals in
                your own pace
              </StyledMainParagraph>
              <YouGet>You get:</YouGet>
              <ul>
                <li>individual learning plan</li>
                <li>self-study tasks language support after the session</li>
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
              onClick={() =>
                toggleDetails(
                  'specificGoal',
                  document.querySelector('.StyledCard:nth-child(1)')
                )
              }
            >
              Read more
            </StyledReadMore>
          )}
        </StyledCard>
        <StyledCard
          className="StyledCard"
          style={{
            height: showDetails.lazyStart ? CardHeight() : '114px',
          }}
        >
          <h2>Lazy to get started?</h2>
          {showDetails.lazyStart && (
            <>
              <StyledMainParagraph>
                Take a friend or two to support you in learning English. On
                group sessions it be more fun
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
              onClick={() =>
                toggleDetails(
                  'lazyStart',
                  document.querySelector('.StyledCard:nth-child(2)')
                )
              }
            >
              Read more
            </StyledReadMore>
          )}
        </StyledCard>
        <StyledCard
          className="StyledCard"
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
              onClick={() =>
                toggleDetails(
                  'tiredLessons',
                  document.querySelector('.StyledCard:nth-child(3)')
                )
              }
            >
              Read more
            </StyledReadMore>
          )}
        </StyledCard>
        <StyledCard
          className="StyledCard"
          style={{
            height: showDetails.maternityLeave ? CardHeight() : '114px',
          }}
        >
          <h2>Are you a mum on maternity leave?</h2>
          {showDetails.maternityLeave && (
            <>
              <MainParagraphMom>
                If you don't want to loose your language fluency, grab your kid
                and come to a weekly English meetings for mums
              </MainParagraphMom>
              <TwoParagraphMom>
                Grab you kid and come to a daily English meeting with other mums
                who don't want to loose their language fluency staying on a
                maternity leave
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
              onClick={() =>
                toggleDetails(
                  'maternityLeave',
                  document.querySelector('.StyledCard:nth-child(4)')
                )
              }
            >
              Read more
            </StyledReadMore>
          )}
        </StyledCard>
      </StyledList>
    </div>
  );
};

export default PriceCardsList;
