import React from 'react';
import style from './style.css';

const userList = ({userData}) => (
  <li className={style.userList}>
    <img className={style.userImage} src={userData.profilePhoto} />
  </li>
);

export default userList;
