/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/18/16.
 */

import React, {Component, PropTypes} from 'react';

class Login extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.setNickName(this.refs.nickName.value);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <form onSubmit={this.onSubmit} style={{height: '50px'}}>
              <div className="form-group">
                <input className="form-control nickname-input" type="text" name="nickName" ref="nickName"
                       placeholder="Enter a Nickname"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.Proptypes = {
  setNickName: PropTypes.func
};

export default Login;