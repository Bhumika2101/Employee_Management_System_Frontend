import React, { useState } from "react";
import api from "../services/api.js";

export default function AddEmployee() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    salary: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/Employees", form);
    alert("Employee Added");
  };

  return (
    <form onSubmit={submit}>
      <input 
        placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})}
      />
      <input 
        placeholder="Position"
        onChange={e => setForm({...form, position: e.target.value})}
      />
      <input 
        placeholder="Salary"
        onChange={e => setForm({...form, salary: e.target.value})}
      />
      <button type="submit">Add</button>
    </form>
  );
}
