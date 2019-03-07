import React, { Component } from 'react'

export default class NewRoomForm extends  Component{
    constructor(){
        super()
        this.state = {
            roomName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
    handleChange(e){
        this.setState({
            roomName: e.target.value
        })
        
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.createRoom(this.state.roomName)
        this.setState({
            roomName:''
        })
    }
    
    render(){
        return(
            <div className='newRoom'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.roomName}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='NewRoomForm'
                        required/>
                    <button id='create-room-btn' type='submit'> + </button>
                </form>
            </div>
        )
    }
}