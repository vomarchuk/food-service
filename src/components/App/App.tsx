import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages';
import { Header } from '../Header';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
