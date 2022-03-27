import cn from 'classnames';

import PreloaderSvg from '../../assets/images/preloader.svg';

interface IPreloader {
  addClass: string;
}

export const Preloader = ({ addClass }: IPreloader) => {
  return (
    <div className={cn(addClass && addClass, 'preloader')}>
      <img src={PreloaderSvg} alt='Loading...' />
    </div>
  );
};
