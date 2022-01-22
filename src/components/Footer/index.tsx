import CatFootPrints from 'assets/images/footer/cat-footprints.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__container container'>
          <img
            src={CatFootPrints}
            alt='cat footprints'
            className='footer__image'
          />
        </div>
        <div className='footer__info'>
          <div className='footer__container container'>
            <p className='footer__text'>
              © abz.agency specially for the test task
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
