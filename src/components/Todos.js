import React, { Component } from 'react'
import List from "./List"
import Input from "./Input"
export default class Todos extends Component {
    state={
        list:["a","B","c"]
    }
    add=(str)=>{
        this.setState({
            list:[...this.state.list,str]
        })
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <Input add={this.add}></Input>
                <List list={list}></List>
            </div>
        )
    }
}
