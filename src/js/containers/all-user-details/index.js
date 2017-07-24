import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserDataAsync} from '../../actions/actionCreators';
import style from './style.css';

class AllUserDetails extends Component {
  componentDidMount () {
    this.props.handleGetInitialUserData();
  }
  render () {
    return (
      <div className={style.allUserDetails}>
        <ul className={style.allUserDetailsUl}>
          {
            this.props.data.map(e => <li className={style.allUserDetailsLi} key={e._id}><img className={style.userAvatar} src={e.profilePhoto} /></li>)
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.userData.data
});

const mapDispatchToProps = dispatch => ({
  handleGetInitialUserData: () => {
    dispatch(getUserDataAsync());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUserDetails);
