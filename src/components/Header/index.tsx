/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from 'assets/images/logo.svg';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const darkBackground = useRef<HTMLSpanElement>(null);
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const onHandleMenu = () => setIsOpenMenu((prev) => !prev);

  const onClickOutside = (event: MouseEvent): void => {
    if (darkBackground?.current?.contains(event.target as Node)) {
      setIsOpenMenu((prev) => !prev);
    }
  };

  const onClickNavLink = (e: React.MouseEvent): void => {
    const element = e.target as HTMLAnchorElement;

    if (element.contains(element)) {
      e.preventDefault();
      if (!element.classList.contains('active')) {
        document
          .querySelector('.menu__link.active')
          ?.classList.remove('active');
        element.classList.add('active');
      }
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
              <ul onClick={onClickNavLink} className='menu__list'>
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
                  {!isMobile && (
                    <li className='menu__item'>
                      <a href='' className='menu__link'>
                        Requirements
                      </a>
                    </li>
                  )}
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
                  {isMobile && (
                    <li className='menu__item'>
                      <a href='' className='menu__link'>
                        Terms and Conditions
                      </a>
                    </li>
                  )}
                </div>
                {isMobile && (
                  <>
                    <div className='menu__wrapper'>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          How it works
                        </a>
                      </li>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Partnership
                        </a>
                      </li>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Help
                        </a>
                      </li>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Level testimonial
                        </a>
                      </li>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Contact us
                        </a>
                      </li>
                    </div>
                    <div className='menu__wrapper'>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Articles
                        </a>
                      </li>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Our news
                        </a>
                      </li>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Testimonials
                        </a>
                      </li>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Licenses
                        </a>
                      </li>
                      <li className='menu__item'>
                        <a href='' className='menu__link'>
                          Privacy Policy
                        </a>
                      </li>
                    </div>
                  </>
                )}
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
