import React, { Component } from 'react'

export default class SendMessageForm extends Component{
    
    constructor(){
        super()
        this.state = {
            message:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnchange = this.handleOnchange.bind(this)
    }
    
    handleOnchange(e){
       this.setState({
           message: e.target.value
       })
    }
    
    handleSubmit(e){
        this.props.sendMessage(this.state.message)
        e.preventDefault()
    }
    
    render(){
        
        return(
            <div className='sendForm'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        disabled={this.props.disabled}
                        placeholder='Send a message...'
                        type='text'
                        onChange={this.handleOnchange}
                        value={this.state.message}
                        >
                    </input>
                    <button disabled={this.props.disabled} type='submit'>Send</button>
                </form>
            </div>
        ) 
    }
}