import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { textTransform } from '../../helpers/textTransform';

const Intro = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const characters = isMobile ? 112 : 270;

  return (
    <section className='page__intro intro' id='intro'>
      <div className='intro__container container'>
        <div className='intro__info info-intro'>
          <h1 className='info-intro__title h1'>
            {textTransform('Test assignment for front-end developers', 40)}
          </h1>
          <p className='info-intro__text'>
            {textTransform(
              'Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.',
              characters
            )}
          </p>
          <Link
            to='sign-up'
            className='info-intro__btn btn btn--yellow'
            activeClass='active'
            offset={-60}
            smooth
          >
            <span>Sign up</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
