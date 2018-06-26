import React from 'react';
import { connect } from 'react-redux';


const Users = ({
  users,
  getUsers
}) => {
  return (
    <div className="users">
      
    </div>
  )
}

export function mapStateToProps(state) {

  return {
    activeLinkIndex: state.activeLinkIndex
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getUsers : () => {
        
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);