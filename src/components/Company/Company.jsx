import {
  CompanyRengier,
  CompanyAllegro,
  CompanyEteria,
  CompanyWrapper,
  WrapperContainer,
} from './Company.styled';

import rengier from 'images/rengier.png';
import eteria from 'images/eteria.png';
import allegro from 'images/allegro.png';

const Company = () => {
  const companyList = [
    <CompanyRengier idx={0} src={rengier} alt="rengier axel springer" />,
    <CompanyAllegro idx={1} src={allegro} alt="allegro" />,
    <CompanyEteria idx={2} src={eteria} alt="Eteria Consulting" />,
  ];
  return (
    <CompanyWrapper id="clients">
      {companyList.map((el, idx) => (
        <WrapperContainer idx={idx}>{el}</WrapperContainer>
      ))}
    </CompanyWrapper>
  );
};

export default Company;
