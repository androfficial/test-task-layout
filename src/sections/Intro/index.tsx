/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-scroll';

export const Intro = () => {
  return (
    <section className='page__intro intro' id='intro'>
      <div className='intro__container container'>
        <div className='intro__info info-intro'>
          <h1 className='info-intro__title h1'>
            Test assignment for front-end developer
          </h1>
          <p className='info-intro__text'>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
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
    </section>
  );
};
