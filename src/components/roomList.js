import React, { Component } from 'react'

export default class RoomList extends Component{
    render(){
        return(
            <div className='roomList'>
                <ul>
                    <h3>Your rooms</h3>
                    {this.props.rooms.map((room, index)=>{
                        const selected = this.props.roomId === room.id ? 'selected' : null
                        return( <li key={room.id} >
                                    <a className={selected} onClick={()=>{this.props.joinRoom(room.id)}} href='#'> # {room.name}</a>
                                </li>)
                    })}
                </ul>
            </div>
        )
    }
}