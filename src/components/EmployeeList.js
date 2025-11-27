import React, { useEffect, useState } from "react";
import api from "../services/api";

function EmployeeList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await api.get("/employees");
    setList(res.data);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1" width="400">
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
        </tr>
        {list.map(e => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.position}</td>
            <td>{e.salary}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default EmployeeList;
