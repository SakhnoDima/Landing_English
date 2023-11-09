import { ReactComponent as Bg } from '../../images/svg/hero-anim/bg.svg';
import { ReactComponent as Certificate } from '../../images/svg/hero-anim/certificate.svg';
import { ReactComponent as LeftLine } from '../../images/svg/hero-anim/leftLine.svg';
import { ReactComponent as RightLine } from '../../images/svg/hero-anim/rightLine.svg';
import { ReactComponent as Star } from '../../images/svg/hero-anim/star.svg';
import { ReactComponent as Folder } from '../../images/svg/hero-anim/folder.svg';
import { ReactComponent as Pencil } from '../../images/svg/hero-anim/pencil.svg';
import { ReactComponent as Notepad } from '../../images/svg/hero-anim/notepad.svg';


import SvgAnim from './LogoStyles.styled';

export const LogoAnimate = () => {
  return (
    <SvgAnim>
      <Bg width="100%" height="100%" />
      <Certificate className="certificate" />
      <LeftLine className="r__line" />
      <RightLine className="l__line" />
      <Star className="star" />
      <Folder className='folder' />
      <Notepad className='notepad' />
      <Pencil className='pencil' />
    </SvgAnim>
  );
};
