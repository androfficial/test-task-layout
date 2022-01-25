import { Acquaintance, Footer, Header, Intro } from '..';

const App = () => {
  return (
    <>
      <Header />
      <main className='page'>
        <Intro />
        <Acquaintance />
      </main>
      <Footer />
    </>
  );
};

export default App;
