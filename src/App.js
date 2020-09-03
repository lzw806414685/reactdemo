import React,{Component} from 'react'; 
// import Form from "./components/Form"
// import Todos from "./components/Todos"
// import Other from "./components/Other"
// import Todolist from "./components/Todolist"
import Proxy from "./components/Proxy"
class App extends Component{
  render(){
    return(
      <div>
        {/* <Todolist></Todolist> */}
        {/* <Other></Other> */}
        {/* <Todos/> */}
        {/* <Form/> */}
        <Proxy/>
      </div>
    )
  }
}

export default App;
