/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import Logo from '../../assets/images/logo.svg';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const darkBackground = useRef<HTMLSpanElement>(null);
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const onHandleMenu = () => setIsOpenMenu((prev) => !prev);

  const onClickOutside = (e: MouseEvent): void => {
    if (darkBackground?.current?.contains(e.target as Node)) {
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
            <Link to='intro' className='logo__link' offset={-60} smooth>
              <img src={Logo} alt='Логотип' />
            </Link>
          </div>
          <div className='header__menu menu'>
            <nav className={cn('menu__body', isOpenMenu && 'active')}>
              <div className='menu__list'>
                <div className='menu__wrapper'>
                  <div className='menu__item'>
                    <Link
                      to='sign-up'
                      offset={-55}
                      className='menu__link'
                      activeClass='active'
                      smooth
                    >
                      About me
                    </Link>
                  </div>
                  <div className='menu__item'>
                    <Link
                      to='sign-up'
                      offset={-55}
                      className='menu__link'
                      activeClass='active'
                      smooth
                    >
                      Relationships
                    </Link>
                  </div>
                  {!isMobile && (
                    <div className='menu__item'>
                      <Link
                        to='sign-up'
                        offset={-55}
                        className='menu__link'
                        activeClass='active'
                        smooth
                      >
                        Requirements
                      </Link>
                    </div>
                  )}
                  <div className='menu__item'>
                    <Link
                      to='sign-up'
                      offset={-55}
                      className='menu__link'
                      activeClass='active'
                      smooth
                    >
                      Users
                    </Link>
                  </div>
                  <div className='menu__item'>
                    <Link
                      to='sign-up'
                      offset={-55}
                      className='menu__link'
                      activeClass='active'
                      spy
                      smooth
                    >
                      Sign Up
                    </Link>
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
