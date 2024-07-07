import React, { useState } from "react";

const FunctionProductForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    cost: "",
    online: "",
    category: "",
    avail: [],
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let avail = [...formData.avail];
      if (checked) {
        avail.push(value);
      } else {
        avail = avail.filter((item) => item !== value);
      }
      setFormData({ ...formData, avail });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, cost, online, category, avail } = formData;
    const newFormData = { id, name, cost, online, category, avail };
    setData([...data, newFormData]);
    setFormData({
      id: "",
      name: "",
      cost: "",
      online: "",
      category: "",
      avail: [],
    });
  };

  return (
    <div className="ms-1">
      <h2 className="ms-5 text-success">Product Cart:</h2>
      <form onSubmit={handleSubmit}>
        <table className="ms-5">
          <tbody>
            <tr>
              <td>
                <label htmlFor="id" className="form-label">
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
                  value={formData.id}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name" className="form-label">
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
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="cost" className="form-label">
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
                  value={formData.cost}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="online" className="form-label">
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
                  checked={formData.online === "yes"}
                  onChange={handleChange}
                />
                <span className="me-3">Yes</span>
                <label className="form-check-label" htmlFor="radio1"></label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio2"
                  name="online"
                  value="no"
                  checked={formData.online === "no"}
                  onChange={handleChange}
                />
                No
                <label className="form-check-label" htmlFor="radio2"></label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="category" className="form-label">
                  Product Category:
                </label>
              </td>
              <td>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Grocery">Grocery</option>
                  <option value="Mobiles">Mobiles</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothes">Clothes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="avail" className="form-label">
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
                  checked={formData.avail.includes("Big Bazar")}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="check1">
                  <span className="me-3">Big Bazar</span>
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check2"
                  name="option2"
                  value="D Mart"
                  checked={formData.avail.includes("D Mart")}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="check2">
                  <span className="me-3">D Mart</span>
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check3"
                  name="option3"
                  value="Jio Mart"
                  checked={formData.avail.includes("Jio Mart")}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="check3">
                  <span className="me-3">Jio Mart</span>
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check4"
                  name="option4"
                  value="Mega Mart"
                  checked={formData.avail.includes("Mega Mart")}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="check4">
                  <span className="me-3">Mega Mart</span>
                </label>
              </td>
            </tr>
          </tbody>
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
          {data.map((item, index) => (
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
};

export default FunctionProductForm;
