import React, { Component } from "react";

export default class ProductForm extends Component {
  state = {
    id: "",
    name: "",
    cost: "",
    online: "",
    category: "",
    avail: [],
    data: [],
  };
  handlechange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let avail = [...this.state.avail];
      if (checked) {
        avail.push(value);
      } else {
        avail = avail.filter((item) => item !== value);
      }
      this.setState({ avail });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, cost, online, category, avail } = this.state;
    const formData = { id, name, cost, online, category, avail };
    this.setState((prevState) => ({
      data: [...prevState.data, formData],
      id: "",
      name: "",
      cost: "",
      online: "",
      category: "",
      avail: [],
    }));
  };

  render() {
    return (
      <div className="ms-1">
        <h2 className="ms-5 text-success">Product Cart:</h2>
        <form onSubmit={this.handleSubmit}>
          <table className="ms-5">
            <tr>
              <td>
                <label for="id" className="form-label">
                  Product ID:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  placeholder="Enter Product ID"
                  name="id"
                  value={this.state.id}
                  onChange={this.handlechange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="name" className="form-label">
                  Product Name:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Product Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handlechange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="cost" className="form-label">
                  Product Cost:
                </label>
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  id="cost"
                  placeholder="Enter Product Cost"
                  name="cost"
                  value={this.state.cost}
                  onChange={this.handlechange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="online" className="form-label">
                  Product Online:
                </label>
              </td>
              <td>
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  name="online"
                  value="yes"
                  checked={this.state.online === "yes"}
                  onChange={this.handlechange}
                />
                <span className="me-3">Yes</span>
                <label className="form-check-label" for="radio1"></label>
                <input
                  type="radio"
                  className="form-check-input "
                  id="radio2"
                  name="online"
                  value="no"
                  checked={this.state.online === "no"}
                  onChange={this.handlechange}
                />
                No
                <label className="form-check-label" for="radio2"></label>
              </td>
            </tr>
            <tr>
              <td>
                <label for="category" class="form-label">
                  Product Category:
                </label>
              </td>
              <td>
                <select class="form-select" id="category" name="category" value={this.state.category} onChange={this.handlechange}>
                  <option value="Grocery">Grocery</option>
                  <option value="Mobiles">Mobiles</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothes">Clothes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label for="avail" className="form-label">
                  Product Available At:
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check1"
                  name="option1"
                  value="Big Bazar"
                  checked={this.state.avail.includes("Big Bazar")}
                  onChange={this.handlechange}
                />
                <label class="form-check-label" for="check1">
                  <span className="me-3">Big Bazar</span>
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check2"
                  name="option2"
                  value="D Mart"
                  checked={this.state.avail.includes("D Mart")}
                  onChange={this.handlechange}
                />
                <label class="form-check-label" for="check2">
                  <span className="me-3">D Mart</span>
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check3"
                  name="option3"
                  value="Jio Mart"
                  checked={this.state.avail.includes("Jio Mart")}
                  onChange={this.handlechange}
                />
                <label class="form-check-label" for="check3">
                  <span className="me-3">Jio Mart</span>
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check4"
                  name="option4"
                  value="Mega Mart"
                  checked={this.state.avail.includes("Mega Mart")}
                  onChange={this.handlechange}
                />
                <label class="form-check-label" for="check4">
                  <span className="me-3">Mega Mart</span>
                </label>
              </td>
            </tr>
          </table>
          <button type="submit" className="ms-5 p-1 btn btn-success">
            ADD PRODUCT
          </button>
        </form>
        <table className="mt-3 table table-bordered table-hover ">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Online</th>
              <th>Category</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.cost}</td>
                <td>{item.online}</td>
                <td>{item.category}</td>
                <td>{item.avail.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
