import styled from 'styled-components';

export const CompanyRengier = styled.img`
  width: 178px;
  height: 92px;

  @media (min-width: 768px) and (max-width: 1439.9px) {
    width: 120px;
    height: 62px;
  }
`;

export const CompanyAllegro = styled.img`
  width: 178px;
  height: 59px;

  @media (min-width: 768px) and (max-width: 1439.9px) {
    width: 120px;
    height: 40px;
  }
`;

export const CompanyEteria = styled.img`
  width: 178px;
  height: 77px;

  @media (min-width: 768px) and (max-width: 1439.9px) {
    width: 120px;
    height: 52px;
  }
`;

export const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  background-color: var(--background-white);
  padding: 32px 0px;

  @media (min-width: 768px) {
    padding: 40px 0px;
    flex-direction: row;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    padding: 54.5px 0px;
    gap: 40px;
  }
`;
