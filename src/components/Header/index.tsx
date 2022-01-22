/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from 'assets/images/logo.svg';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const darkBackground = useRef<HTMLSpanElement>(null);

  const onHandleMenu = () => setIsOpenMenu((prev) => !prev);

  const onClickOutside = (event: MouseEvent) => {
    if (darkBackground?.current?.contains(event.target as Node)) {
      setIsOpenMenu((prev) => !prev);
    }
  };

  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add('lock');
      document.addEventListener('click', onClickOutside);
    }
    return () => {
      document.body.classList.remove('lock');
      document.removeEventListener('click', onClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <header className={cn('header', isOpenMenu && 'disabled-filter')}>
      <div className='header__container container'>
        <div className='header__inner'>
          <div className='header__logo logo'>
            <a href='' className='logo__link'>
              <img src={Logo} alt='Лого' />
            </a>
          </div>
          <div className='header__menu menu'>
            <nav className={cn('menu__body', isOpenMenu && 'active')}>
              <ul className='menu__list'>
                <div className='menu__wrapper'>
                  <li className='menu__item'>
                    <a href='' className='menu__link'>
                      About me
                    </a>
                  </li>
                  <li className='menu__item'>
                    <a href='' className='menu__link'>
                      Relationships
                    </a>
                  </li>
                  <li className='menu__item'>
                    <a href='' className='menu__link'>
                      Requirements
                    </a>
                  </li>
                  <li className='menu__item'>
                    <a href='' className='menu__link'>
                      Users
                    </a>
                  </li>
                  <li className='menu__item'>
                    <a href='' className='menu__link'>
                      Sign Up
                    </a>
                  </li>
                </div>
              </ul>
            </nav>
            <button
              onClick={onHandleMenu}
              className='menu__icon icon-menu'
              type='button'
            >
              <span />
              <span />
              <span />
            </button>
            <span ref={darkBackground} className='dark-background' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
