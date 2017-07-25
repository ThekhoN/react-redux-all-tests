import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserDataAsync} from '../../actions/actionCreators';
import UserList from '../../components/user-list';
import style from './style.css';

export class AllUserContainer extends Component {
  componentDidMount () {
    this.props.handleGetInitialUserData();
  }
  render () {
    return (
      <div className={style.allUserContainer}>
        <ul className={style.allUserContainerUl}>
          {
            this.props.data.map(e => <UserList key={e._id} userData={e} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(AllUserContainer);
