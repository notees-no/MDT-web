import React from "react";
import { useState } from "react";

const Form = ({ handleSubmit, inEmployee }) => {
    const [employee, setEmployee] = useState(inEmployee);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(employee);
        setEmployee(inEmployee);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
            />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                value={employee.job}
                onChange={handleChange}
            />

            <label htmlFor="address">Address</label>
            <input
                type="text"
                name="address"
                value={employee.address}
                onChange={handleChange}
            />


            <button type="submit">Add</button>
        </form>
    );
};

export default Form;