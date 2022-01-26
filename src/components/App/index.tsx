import { Acquaintance, Footer, Header, Intro, Users } from '..';

const App = () => {
  return (
    <>
      <Header />
      <main className='page'>
        <Intro />
        <Acquaintance />
        <Users />
      </main>
      <Footer />
    </>
  );
};

export default App;
