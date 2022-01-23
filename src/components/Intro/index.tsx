/* eslint-disable jsx-a11y/anchor-is-valid */

const Intro = () => {
  return (
    <section className='page__intro intro'>
      <div className='intro__container container'>
        <div className='intro__info info-intro'>
          <h1 className='info-intro__title h1'>
            Test assignment for front-end developers
          </h1>
          <p className='info-intro__text'>
            Front-end developers make sure the user sees and interacts with all
            the necessary elements to ensure conversion. Therefore, responsive
            design, programming languages and specific frameworks are the
            must-have skillsets to look for when assessing your front-end
            developers.
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
