import React, { Component } from 'react'

export default class Input extends Component {
    constructor(){
        super();
        this.myref = React.createRef()
    }
    handleKeyUp=(e)=>{
        if(e.keyCode===13){
            this.props.add(e.target.value)
            this.myref.current.value=""
        }
    }
    render() {
        return (
            <div>
                <input ref={this.myref} onKeyUp={this.handleKeyUp}></input>
            </div>
        )
    }
}
