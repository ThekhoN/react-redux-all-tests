import React from 'react';
import style from './style.css';
import Wrapper from '../../components/wrapper';
import AllUserContainer from '../all-user-container';

const App = () => (
  <div>
    <Wrapper marginBottom='15px'>
      <h2 className={style.mainHeader}>Testing React Redux with Jest & Enzyme</h2>
    </Wrapper>
    <AllUserContainer />
  </div>
);

export default App;
