import { useEffect, useState } from 'react';
import mob1 from 'images/chat_png/chat_mob1.png';
import mob2 from 'images/chat_png/chat_mob2.png';
import tab1 from 'images/chat_png/chat_tab1.png';
import tab2 from 'images/chat_png/chat_tab2.png';
import desk1 from 'images/chat_png/chat_desk1.png';
import desk2 from 'images/chat_png/chat_desk2.png';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-bottom: 60px;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 55px;
    padding: 0 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    padding: 0 120px;
  }
`;
const StyledDivTop = styled.div`
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

const StyledDivBottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Chat = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  let topImg, bottomImg;

  if (windowWidth >= 1440) {
    topImg = desk1;
    bottomImg = desk2;
  } else if (windowWidth >= 768) {
    topImg = tab1;
    bottomImg = tab2;
  } else {
    topImg = mob1;
    bottomImg = mob2;
  }

  return (
    <StyledWrapper>
      <StyledDivTop>
        <img src={topImg} alt="image1" />
      </StyledDivTop>
      <StyledDivBottom>
        <img src={bottomImg} alt="image2" />
      </StyledDivBottom>
    </StyledWrapper>
  );
};

export default Chat;
