import React, { Component } from 'react'

export default class Form extends Component {
    state={
        value:'123',
        flag:true
    }
    render() {
        return (
            <div>
                <label htmlFor="user">用户</label>
                <input id="user" value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}></input>
                <p>{this.state.value}</p>
                <input defaultValue="asd"></input>
                <input type="checkbox" checked={this.state.flag } onChange={()=>{this.setState({flag:!this.state.flag})}}></input>
                <input type="checkbox" defaultChecked></input>
            </div>
        )
    }
}
