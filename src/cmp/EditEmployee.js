import React, { Component } from "react";

export default class EditEmployee extends Component {
   constructor(props){
       super(props);
      const {id, name, email,number, address, salary} = props.location.state.person;
this.state = {
    id,
    name,
    email,
    number,
    address,
    salary,
}
   }


    update=(e)=>{
        e.preventDefault();
        if (this.state.name==="" || this.state.email===""){
            alert("All the fields are mandatory")
            return;
        }
        this.props.addEmployeeHandler(this.state);
        this.setState({id: "", name: "", email: "", number: "", address: "", salary: "" })
    
    }
  render() {
    return (
      <div className="text-center m-20">
        <h2 className="text-3xl font-bold m-10">Add employees</h2>
        <form onSubmit={this.update}>
          <div>
          <label className="text-xl font-sm m-5">ID</label>
            <input className="border-solid border-2 m-2" type="text" name="name" value={this.state.id} placeholder="name" onChange={(e)=>this.setState({id: e.target.value})}></input>
<br/>
            <label className="text-xl font-sm m-5">Name</label>
            <input className="border-solid border-2 m-2" type="text" name="name" value={this.state.name} placeholder="name" onChange={(e)=>this.setState({name: e.target.value})}></input>
<br/>
            <label className="text-xl font-sm m-5">Name</label>
            <input className="border-solid border-2 m-2" type="text" name="email" value={this.state.email} placeholder="email" onChange={(e)=>this.setState({email: e.target.value})}></input>
          </div>
          <div className="m-3">
              <button className="bg-blue-500 p-3 rounded-lg" type="submit">Add employees</button>
          </div>
        </form>
      </div>
    );
  }
}