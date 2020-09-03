import React, { Component } from 'react'
import EventHub from "../utiles/event-hub"
export default class Two extends Component {
    state={
        color:"red"
    }
    componentDidMount(){
        //需要监听事件
        EventHub.on("bianse",color=>{
            this.setState({
                color
            })
        })
    }
    render() {
        return (
            <div>
                <span style={{color:this.state.color}}>two</span>
            </div>
        )
    }
}
