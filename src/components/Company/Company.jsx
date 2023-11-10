import {
  CompanyRengier,
  CompanyAllegro,
  CompanyEteria,
  CompanyWrapper,
} from './Company.styled';

import rengier from 'images/rengier.png';
import eteria from 'images/eteria.png';
import allegro from 'images/allegro.png';

const Company = () => {
  return (
    <CompanyWrapper id="clients">
      <CompanyRengier src={rengier} alt="rengier axel springer" />

      <CompanyAllegro src={allegro} alt="allegro" />

      <CompanyEteria src={eteria} alt="Eteria Consulting" />
    </CompanyWrapper>
  );
};

export default Company;
