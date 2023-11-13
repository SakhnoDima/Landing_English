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
    <CompanyRengier src={rengier} alt="rengier axel springer" />,
    <CompanyAllegro src={allegro} alt="allegro" />,
    <CompanyEteria src={eteria} alt="Eteria Consulting" />,
  ];
  return (
    <CompanyWrapper id="clients">
      {companyList.map((el, idx) => (
        <WrapperContainer key={idx} idx={idx}>
          {el}
        </WrapperContainer>
      ))}
    </CompanyWrapper>
  );
};

export default Company;
