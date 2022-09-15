import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages';
import { Header } from '../Header';
import { Footer } from '../Footer';

const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
