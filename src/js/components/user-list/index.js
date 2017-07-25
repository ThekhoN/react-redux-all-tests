import React from 'react';
import style from './style.css';

const userList = ({userData}) => (
  <li className={style.userList} key={userData._id}>
    <img className={style.userImage} src={userData.profilePhoto} />
  </li>
);

export default userList;
