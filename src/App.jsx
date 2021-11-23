// import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import foo from "./containers/action/action";


class App extends React.Component {







  render(){
  
console.log(  this.props)
    return(
      <div style={{textAlign:"center"}}>
        <h1>Redux Configuration{}</h1>
        <h1>{this.props.email}</h1>
        <h1>{this.props.users}</h1>
        <h1>{this.props.name3}</h1>
        
        <h1>{this.props.users}</h1>
        <h1>{this.props.name4}</h1>
        <h1>{this.props.name5}</h1>
        <button style={{width:"100px",height:"50px"}} onClick={()=>this.props.foo()}>Objects</button>
      </div>
    )
  }
}

const  mapStateToProps = (state)=>
({
  name1:state.app.name1,
  name4:state.app.name4,
  name5:state.app.name5,
  users:state.auth.users,
  email:state.auth.email
})
const mapDispatchTOProps = (dispatch)=>
({
foo :()=>dispatch(foo())
})

export default connect(mapStateToProps,mapDispatchTOProps)(App);