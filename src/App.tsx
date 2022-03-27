import { CatFootprints, Footer, Header, Modal } from './components';
import { Acquaintance, Intro, Register, Users } from './sections';

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
