import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error404Page from './pages/Error/Error404Page.jsx';
import HomePage from './pages/Home/HomePage.jsx';

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage/>
            }
          />
          <Route path="*" element={<Error404Page/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
