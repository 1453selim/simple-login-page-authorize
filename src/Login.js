import React from "react";

class Login extends React.Component {
  constructor() {
    super()
  
    this.state = {
       authorized:false,
       isEditing:true,
       counter:3
    }
    this.autorize = this.autorize.bind(this)
  }
  enableInput(){
    window.alert("you entered wrong password for 3 times plz try again after 30 seconds")
    setTimeout(()=>this.setState({isEditing:true,counter:0}),30000)
  }
  autorize(){
    const input = document.querySelector(".form-control")
    if(this.props.user.password===input.value){
      this.setState({authorized:true});

    }else {
      window.alert("you entered wrong password")
      this.setState({counter:this.state.counter - 1})
      console.log(this.state.counter);
      if(this.state.counter===0){
        
        this.setState({isEditing:false})
        this.enableInput()
      }
    }
  }
  render() {
    let login = (
      <div className="card">
        <form class="form-inline" action="#"onSubmit={this.autorize}>
          <div class="form-group">
            <input
              type="password"
              class="form-control mx-sm-3"
              placeholder="Password"
              disabled={!this.state.isEditing}
            />
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
    let contact = (
      <div className="card">
        <div className="top">
          <h2 className="name">{this.props.user.name} </h2>
          <img className="circle-img" src={this.props.user.imgURL} alt="" />
        </div>
        <div className="bottom">
          <p className="info">{this.props.user.phone} </p>
          <p className="info">{this.props.user.mail} </p>
        </div>
      </div>
    );

    return (
      <div id="authorization">
        {/* <h1>Enter the Password</h1> */}
        <h1>{this.state.authorized ? "contact Profile" : "enter the password"} </h1>
        {this.state.authorized ? contact:login}
        {/* {login} */}

      </div>
    );
  }
}

export default Login;
