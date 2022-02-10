import cn from 'classnames';

import PreloaderSvg from '../../assets/images/preloader.svg';

const Preloader = ({ addClass }: { addClass: string }) => {
  return (
    <div className={cn(addClass && addClass, 'preloader')}>
      <img src={PreloaderSvg} alt='Loading...' />
    </div>
  );
};

export default Preloader;
