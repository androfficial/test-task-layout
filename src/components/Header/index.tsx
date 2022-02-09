/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Logo from '../../assets/images/logo.svg';

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
              <div onClick={onClickNavLink} className='menu__list'>
                <div className='menu__wrapper'>
                  <div className='menu__item'>
                    <a href='' className='menu__link'>
                      About me
                    </a>
                  </div>
                  <div className='menu__item'>
                    <a href='' className='menu__link'>
                      Relationships
                    </a>
                  </div>
                  {!isMobile && (
                    <div className='menu__item'>
                      <a href='' className='menu__link'>
                        Requirements
                      </a>
                    </div>
                  )}
                  <div className='menu__item'>
                    <a href='' className='menu__link'>
                      Users
                    </a>
                  </div>
                  <div className='menu__item'>
                    <a href='' className='menu__link'>
                      Sign Up
                    </a>
                  </div>
                  {isMobile && (
                    <div className='menu__item'>
                      <a href='' className='menu__link'>
                        Terms and Conditions
                      </a>
                    </div>
                  )}
                </div>
                {isMobile && (
                  <>
                    <div className='menu__wrapper'>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          How it works
                        </a>
                      </div>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Partnership
                        </a>
                      </div>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Help
                        </a>
                      </div>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Level testimonial
                        </a>
                      </div>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Contact us
                        </a>
                      </div>
                    </div>
                    <div className='menu__wrapper'>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Articles
                        </a>
                      </div>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Our news
                        </a>
                      </div>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Testimonials
                        </a>
                      </div>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Licenses
                        </a>
                      </div>
                      <div className='menu__item'>
                        <a href='' className='menu__link'>
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </nav>
            {isMobile && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
