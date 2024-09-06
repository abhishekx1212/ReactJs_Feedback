import React, { Component } from 'react'

export default class ClassComp extends Component {

constructor(){
    super();
    this.state = {
        myName: "React.js"
    }
    
}    

render() {
    const { myName,myId,myEmail } = this.props.user
    return (
    <div>
        <h2 style={{backgroundColor:'skyblue',}}>Hello {this.state.myName}</h2>
        <h4>name: { myName }</h4>
        <h4>name: { myId }</h4>
        <h4>name: { myEmail }</h4>  
        <button onClick={()=>{this.setState({myName:"abcd"})}}>click</button>
    </div>
    )
  }
}
