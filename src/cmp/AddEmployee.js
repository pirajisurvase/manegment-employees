import React, { Component } from "react";

export default class AddEmployee extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    number: "",
    address: "",
    salary: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addEmployeeHandler(this.state);
    this.setState({
      id: "",
      name: "",
      email: "",
      number: "",
      address: "",
      salary: "",
    });
  };
  render() {
    return (
      <div className="text-center m-20">
        <h2 className="text-3xl font-bold m-10">Add employees</h2>
        <form onSubmit={this.add}>
          <div>
            <label className="text-xl font-sm m-5"> Employee ID</label>
            <input
              className="border-solid border-2 m-2"
              type="text"
              name="name"
              value={this.state.id}
              placeholder="name"
              onChange={(e) => this.setState({ id: e.target.value })}
            ></input>
            <br />
            <label className="text-xl font-sm m-5">Name</label>
            <input
              className="border-solid border-2 m-2"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name"
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
            <br />
            <label className="text-xl font-sm m-5">Email</label>
            <input
              className="border-solid border-2 m-2"
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
<br/>
            <label className="text-xl font-sm m-5">Phone Number</label>
            <input
              className="border-solid border-2 m-2"
              type="text"
              name="number"
              value={this.state.number}
              placeholder="Number"
              onChange={(e) => this.setState({ number: e.target.value })}
            ></input>
            <br />
            <label className="text-xl font-sm m-5">Address</label>
            <input
              className="border-solid border-2 m-2"
              type="text"
              name="address"
              value={this.state.address}
              placeholder="address"
              onChange={(e) => this.setState({ address: e.target.value })}
            ></input>
            <br />
            <label className="text-xl font-sm m-5">salary</label>
            <input
              className="border-solid border-2 m-2"
              type="text"
              name="salary"
              value={this.state.salary}
              placeholder="salary"
              onChange={(e) => this.setState({ salary: e.target.value })}
            ></input>
            <br />
          </div>

          <div className="m-3">
            <button className="bg-blue-500 p-3 rounded-lg" type="submit">
              Add employees
            </button>
          </div>
        </form>
      </div>
    );
  }
}
