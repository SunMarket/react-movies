import React from 'react';
import {Header} from './components/layout/header';
import {Footer} from './components/layout/footer';
import {Main} from './components/layout/main';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
