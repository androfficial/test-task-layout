import { Header, Modal } from './components';
import { Intro, Register, Users } from './sections';

const App = () => {
  return (
    <>
      <Header />
      <main className='page'>
        <Intro />
        <Users />
        <Register />
      </main>
      <Modal />
    </>
  );
};

export default App;
