import { Acquaintance, Intro, Register, Users } from '../../sections';
import { CatFootprints, Footer, Header, Modal } from '..';

const App = () => {
  return (
    <>
      <Header />
      <main className='page'>
        <Intro />
        <Acquaintance />
        <Users />
        <Register />
        <CatFootprints />
      </main>
      <Footer />
      <Modal />
    </>
  );
};

export default App;
