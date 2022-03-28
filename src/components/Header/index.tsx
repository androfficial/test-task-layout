import { Link } from 'react-scroll';

import Logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__inner'>
          <div className='header__logo logo'>
            <Link to='intro' className='logo__link' offset={-60} smooth>
              <img src={Logo} alt='Логотип' />
            </Link>
          </div>
          <div className='header__menu menu'>
            <nav className='menu__body'>
              <ul className='menu__list'>
                <li className='menu__item'>
                  <Link
                    to='users'
                    offset={-55}
                    className='menu__link btn btn--yellow'
                    activeClass='active'
                    smooth
                  >
                    Users
                  </Link>
                </li>
                <li className='menu__item'>
                  <Link
                    to='sign-up'
                    offset={-55}
                    className='menu__link btn btn--yellow'
                    activeClass='active'
                    spy
                    smooth
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
