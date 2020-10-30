import React, { useState } from "react";
const LiftDemo = () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);
    const [table, setTable] = useState(allPersons);

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        setName(value);
        setTable(allPersons);
    }
    function handleSubmit(event) {
        event.preventDefault();
        names.push(name);
        setTable(allPersons);
    }

    function deletePerson(index, name) {
        names.splice(index, 1);
        console.log(names)
        setNames(names);
    }

    function allPersons() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((name, index) => (
                            <tr key={index++}>
                                <td>{name}</td>
                                <td>  <button type="submit" onClick={() => deletePerson({ index } + 1)}>Delete</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    New Person
          <br />
                    <input id="name" onChange={handleChange} type="text" value={name} />
                </label>
                <input type="submit" value="Save" />
            </form>
            <label>All Persons</label>
            {table}
        </div>
    );
};

export default function StateLiftDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <LiftDemo />
        </div>
    );
}
