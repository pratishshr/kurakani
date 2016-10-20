/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/18/16.
 */

import React, {Component, PropTypes} from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nickName: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    if (value.length < 20) {
      this.setState({[name]: value});
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.setNickName(this.state.nickName);
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{marginTop: '15%', textAlign: 'center'}}>
          <h1 style={{marginBottom: '30px'}}>KuraKani</h1>
          <form onSubmit={this.onSubmit} style={{height: '50px'}}>
            <div className="form-group">
              <input className="form-control input" type="text" name="nickName" ref="nickName"
                     placeholder="click here to enter a nickname..." autoComplete="off" value={this.state.nickName}
                     onChange={this.onChange}/>
            </div>
          </form>
          {this.state.nickName ? <strong style={{color: '#ffffff'}}>Press Enter</strong> : null}
        </div>
      </div>
    )
  }
}

Login.Proptypes = {
  setNickName: PropTypes.func
};

export default Login;