import React, { Component } from 'react'

export default class FormPage extends Component {
    state = {
        id:" ",
        name: "",
        salary: "",
        data:[]
    };
    handleChange = (e) => { 
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => { 
        e.preventDefault();
        const { id, name, salary } = this.state;
        this.setState((prevState) => ({
            data: [...prevState.data, { id, name, salary }],
            id: "",
            name: "",
            salary: ""
        }));
    }
    handleNew = () => { 
        this.setState({
            id:" ",
            name: "",
            salary: ""
        });
    }

    render() {
        const { id, name, salary, data } = this.state;
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>ID: 
                        <input type="text" name="id" value={id} onChange={this.handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>NAME: 
                        <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>SALARY: 
                        <input type="text" name="salary" value={salary} onChange={this.handleChange}></input>
                    </label>
                </div>
                <button type='submit'>SUBMIT</button>
                <input type="reset" value="Cancel" />
            </form>
            {data.length>0 && (
                <div>
                    {data.map((data, index)=>(
                    <div key={index}>
                        <p>{ data.id+" "+data.name+" "+data.salary}</p>
                    </div>
                    ))}
                </div>
            )}
      </div>
    )
  }
}
