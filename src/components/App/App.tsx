import React, {FC} from 'react';
import {MainRoute} from '../../routes/MainRoute';
import {BrowserRouter} from 'react-router-dom';

const App: FC = () => {
  return(
    <BrowserRouter>
      <MainRoute/>
    </BrowserRouter>
  )
};

export default App;
