import React from 'react';
import style from './style.css';
import Wrapper from '../../components/wrapper';
import AllUserContainer from '../all-user-container';

const App = () => (
  <div>
    <Wrapper>
      <h2 className={style.mainHeader}>React Hot Webpack Test. . ... *_ *</h2>
      <br />
      <AllUserContainer />
    </Wrapper>
  </div>
);

export default App;
