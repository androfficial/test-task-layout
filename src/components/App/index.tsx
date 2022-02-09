import {
  Acquaintance,
  CatFootprints,
  Footer,
  Header,
  Intro,
  Modal,
  Register,
  Users,
} from '..';

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
