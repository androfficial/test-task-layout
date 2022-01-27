import { Acquaintance, Footer, Header, Intro, Register, Users } from '..';

const App = () => {
  return (
    <>
      <Header />
      <main className='page'>
        <Intro />
        <Acquaintance />
        <Users />
        <Register />
      </main>
      <Footer />
    </>
  );
};

export default App;
