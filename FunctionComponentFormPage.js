import React from 'react'

export default function FunctionComponentFormPage() {
    const initialFormData = {
        id: "",
      name: "",
      salary: "",
      dept: "",
    };
    const [formData, setFormData] = React.useState(initialFormData);
    const [data, setData] = React.useState([
        { id: "1", name: "Niranjan", salary: "5000", dept: "IT" },
        { id: "2", name: "Ganesh", salary: "6000", dept: "QA" },
        { id: "3", name: "Rahul", salary: "4000", dept: "HR" },
    ]);
    const [editing, setEditing] = React.useState(false);
    const [currId, setCurrId] = React.useState(null);


    const onChangeCtrl = (e) => {
        var cname = e.target.name;
        var cval = e.target.value;
        setFormData({...formData, [cname]: cval });
      };

    const onSubmit = (e) => {
        e.preventDefault();
        const { id, name, salary, dept} = formData;
        if (editing) {
          const updatedData = data.map((emp) =>
            emp.id === currId ? { id, name, salary, dept } : emp
          );
            setData(updatedData);
            setEditing(false);
            setCurrId(null);
        } else {
          const newData = { id, name, salary, dept };
          setData(
            [...data, newData],
          );
        }
        setFormData(initialFormData);
    };
    
    const handleDelete = (id) => {
        setData((prevData) => 
        prevData.filter((emp) => emp.id !== id),
        );
      };
      const handleUpdate = (id) => {
        const empData = data.find((emp) => emp.id === id);
        setFormData({
          id: empData.id,
          name: empData.name,
          salary: empData.salary,
          dept: empData.dept,
        });
          setEditing(true);
          setCurrId(id);
      };
      const handleCancel = () => {
          setFormData(initialFormData);
    };
    
  return (
      <div>
        <form method="post" onSubmit={onSubmit}>
          <h2>ADD NEW EMPLOYEE: </h2>
          <table>
            <tr>
              <td>
                <label for="id" className="form-label">
                  Employee ID:
                </label>
              </td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  required="true"
                  name="id"
                  value={formData.id}
                  onChange={onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="name" className="form-label">
                  Employee Name:
                </label>
              </td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  required="true"
                  name="name"
                  value={formData.name}
                  onChange={onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="salary" className="form-label">
                  Employee Salary:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  required="true"
                  name="salary"
                  value={formData.salary}
                  onChange={onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="dept" className="form-label">
                  Department:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  required="true"
                  name="dept"
                  value={formData.dept}
                  onChange={onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" className="btn btn-info" value="Send" />
              </td>
              <td>
                <input
                  type="reset"
                  value="Cancel"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                />
              </td>
            </tr>
          </table>
        </form>
        <br />

        <h2>ALL EMPLOYEES DETAILS: </h2>
        <div>
          <table className="table table-bordered table-hover ">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
                <th>DEPT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.dept}</td>
                  <td>
                    <button
                      className="btn btn-warning me-3"
                      onClick={() => handleUpdate(emp.id)}
                    >
                      UPDATE
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(emp.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
