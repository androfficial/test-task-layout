import { useMediaQuery } from 'react-responsive';
import { textTransform } from 'services/textTransform';

const Intro = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const characters = isMobile ? 112 : 270;

  return (
    <section className='page__intro intro'>
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
          <button className='info-intro__btn btn btn--yellow' type='button'>
            <span>Sign up</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
