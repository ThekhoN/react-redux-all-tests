import React from 'react';

const Wrapper = ({children, marginBottom}) => (
  <div className='theme-bg' style={{marginBottom: `${marginBottom}`}}>
    {children}
  </div>
);

export default Wrapper;
