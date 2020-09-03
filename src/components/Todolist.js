import React, { Component } from 'react'
import axios from "axios"
export default class Todolist extends Component {
    state={
        list:[],
        name:"",
        age:""
    }
    //代表组件挂载结束，可以在这个钩子函数中进行异步操作
    componentDidMount(){
        this.find()
    }
    find=()=>{
        axios.get("http://localhost:4000/list").then((res)=>{
            this.setState({
                list:res.data,
            })
            // this.name.value=""
            // this.age.value=""
        })
    }
    //添加操作
    handleClick=()=>{
        axios.post("http://localhost:4000/list",{
            name:this.state.name,
            age:this.state.age
        }).then(res=>{
            this.find()
            this.state.name=""
            this.state.age=""
        })
        
    }

    input=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    } 
    //删除操作
    remove=(id)=>{
        axios.delete("http://localhost:4000/list/"+id).then(res=>{
            this.find()
        })
    }
    //修改操作
    update=(item)=>{
        let value = prompt("请输入要修改的值",item.name+","+item.age)
        if(value){
            var arr = value.split(",");
            axios.patch("http://localhost:4000/list/"+item.id,{
                name:arr[0],
                age:arr[1]
            }).then(res=>{
                this.find()
            })
        }
    }
    //查询操作
    blurFind=()=>{
        axios.get("http://localhost:4000/list?name_like="+this.state.name).then(res=>{
            this.setState({
                list:res.data
            })
        })
    }
    render() {
        let {list,name,age} = this.state
        return (
            <div>
                <input id="name" ref={el=>this.name=el} value={name} type="text" onChange={this.input}  placeholder="请输入用户名"></input>
                <input id="age" ref={el=>this.age=el} value={age} type="text" onChange={this.input}  placeholder="请输入年龄"></input>
                <button onClick={this.handleClick}>添加</button>
                <button onClick={this.blurFind}>查询</button>
                <button onClick={()=>{this.find()}}>返回</button>
                <ul>
                    {
                        list.map((item,index)=>{
                        return <li key={index}>
                                {item.name},{item.age}
                                <button onClick={this.remove.bind(this,item.id)}>删除</button>
                                <button onClick={this.update.bind(this,item)}>修改</button>
                                </li>
                        }) 
                    }
                </ul>
            </div>
        )
    }
}
