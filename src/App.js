import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client'
import { instanceLocator, tokenUrl} from './config'

import MessageList from './components/messageList'
import RoomList from './components/roomList'
import SendMessageForm from './components/sendMessageForm'
import NewRoomForm from './components/newRoomForm'

class App extends Component {
    constructor(){
        super()
        this.state = {
            roomId:null,
            messages: [],
            joinableRooms: [],
            joinedRooms: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.joinRoom = this.joinRoom.bind(this)
        this.createRoom = this.createRoom.bind(this)
    }

  componentDidMount(){
              const tokenProvider = new Chatkit.TokenProvider({
                  url: tokenUrl
                });

              const chatManager = new Chatkit.ChatManager({
                  instanceLocator: instanceLocator,
                  userId: "jazzmatazz",
                  tokenProvider: tokenProvider
                });
            
            chatManager
                .connect()
                .then(currentUser=>{
                        this.currentUser = currentUser
                        this.getRooms()
                        
                
                    })
                .catch(error=>{
                        console.log('Error:'+ error)
            })
  }

 joinRoom(id){
     this.setState({messages: []})
      this.currentUser.subscribeToRoom({
                            roomId: id,
                            hooks:{
                                onMessage: message=>{
                                    this.setState({
                                         messages: [...this.state.messages, message]
                                    })}
                                    }
                                    })
                                    .then(room=>{
          this.setState({
              roomId:room.id
          })
          this.getRooms()
      })
     .catch(err=>{
            console.log(err)
      })
 }
 getRooms(){
     this.currentUser.getJoinableRooms()
                            .then( joinableRooms => {
                            this.setState({
                                joinableRooms,
                                joinedRooms:this.currentUser.rooms
                                })    
                            })
                            .catch(error=>{
                            console.log('Error: '+error)
     })
 }   
    
    
sendMessage(text){
    this.currentUser.sendMessage({
        text,
        roomId:this.state.roomId
    })
}
    
createRoom(name){
    this.currentUser.createRoom({
        name
    })
    .then(room => this.joinRoom(room.id))
    .catch(err =>{
        console.log(err)
    })

}
  render() {
    return (
        <div className='app'>
            <div className='app-content'>
                <MessageList roomId={this.state.roomId} messages={this.state.messages}/>
                <RoomList roomId={this.state.roomId} joinRoom={this.joinRoom} rooms={[...this.state.joinedRooms, ...this.state.joinableRooms]}/>
                <SendMessageForm disabled={!this.state.roomId} sendMessage={this.sendMessage}/>
                <NewRoomForm createRoom = {this.createRoom}/>
            </div>
        </div>
    );
  }
}

export default App;
