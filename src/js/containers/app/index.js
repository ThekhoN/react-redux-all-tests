import React from 'react';
import style from './style.css';
import Wrapper from '../../components/wrapper';
import AllUserDetails from '../all-user-details';

const App = () => (
  <div>
    <Wrapper>
      <h2 className={style.mainHeader}>React Hot Webpack Test. . ... *_ *</h2>
      <br />
      <AllUserDetails />
    </Wrapper>
  </div>
);

export default App;
