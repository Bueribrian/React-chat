import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Message from './msg'


export default class MessageList extends Component {

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }



    render() {
        let list = this.props.messages.map((msg, index) => { return (<Message msg={msg} key={index} />) })
        if (this.props.messages === [] || this.props.messages.lenght === 0) {
            console.log(this.props.messages)
            // return (<div className='messageList'>
            //             <div className='message-chooseRoom'>
            //                 <h3> No messages in this room :(, be the first one.</h3>
            //             </div>
            //         </div>)
        }
        if (!this.props.roomId) {
            return (<div className='messageList'>
                <div className='message-chooseRoom'>
                    <h3> Choose a room!</h3>
                </div>

            </div>)
        }
        return (
            <div className='messageList'>
                {list}
            </div>
        )
    }

}