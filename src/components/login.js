import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:''
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleLogin(e){
        console.log(e.target.value)
        this.setState({
            username: e.target.value
        })
    }
    handleSubmit(e){
        console.log('SUBMITED')
        this.props.setUser(this.state.username)
        e.preventDefault()
    }
  render() {
    return (
      <div className='login-panel'>
        <h3>Enter your Username ID</h3>
        <form onSubmit={this.handleSubmit}>
            <input 
            onChange={this.handleLogin}
            type='text'
            placeholder='username'
            required />
            <button >Enter</button>
        </form>
      </div>
    )
  }
}
