// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', Credential: false, errorMsg: ''}

  changeRoute = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({Credential: true, errorMsg})
  }

  onSubmitChange = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    const data = await response.json()
    if (response.ok === true) {
      this.changeRoute()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, Credential, password, errorMsg} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="login-container">
          <img
            className="website-logoz"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <form className="form-container" onSubmit={this.onSubmitChange}>
            <label className="label-name" htmlFor="userName">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              id="userName"
              className="input-item"
              value={username}
              onChange={this.onChangeName}
            />
            <label className="label-name" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="input-item"
              value={password}
              onChange={this.onChangePassword}
            />

            <button className="login-button" type="submit">
              Login
            </button>
            {Credential ? <p className="error">{errorMsg}</p> : null}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
