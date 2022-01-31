import {
  Acquaintance,
  CatFootprints,
  Footer,
  Header,
  Intro,
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
    </>
  );
};

export default App;
