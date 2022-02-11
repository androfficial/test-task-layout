/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import { Link } from 'react-scroll';

import AcquaintanceImage from '../../assets/images/acquaintance/acquaintance-image.svg';
import { textTransform } from '../../helpers/textTransform';

const Acquaintance = () => {
  return (
    <section className='page__acquaintance acquaintance' id='acquaintance'>
      <div className='acquaintance__container container'>
        <div className='acquaintance__inner'>
          <div className='acquaintance__image'>
            <img src={AcquaintanceImage} alt='Man programming on laptop' />
          </div>
          <div className='acquaintance__info info-acquaintance'>
            <Typography
              variant='h1'
              component='h2'
              className='info-acquaintance__title h1'
            >
              Let's get acquainted
            </Typography>
            <h3 className='info-acquaintance__subtitle h2'>
              {textTransform("I'm a good front-end developer", 30)}
            </h3>
            <p className='info-acquaintance__text'>
              {textTransform(
                "What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.",
                298
              )}
            </p>
            <Link
              to='sign-up'
              className='info-intro__btn btn btn--yellow'
              activeClass='active'
              offset={-55}
              smooth
            >
              <span>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acquaintance;
