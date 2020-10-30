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

    function deletePerson(index) {
        names.splice(index, 1);
        setTable(allPersons);
    }

    function editPerson(index) {
        console.log(names)
        names.splice(index, 1, name);
        console.log(names)
        setTable(allPersons);
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
                            <tr key={index}>
                                <td>{name}</td>
                                <td>  <button type="submit" onClick={() => deletePerson(index)}>Delete</button> </td>
                                <td>  <button type="submit" onClick={() => editPerson(index)}>Edit</button> </td>
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
                New Person
          <br />
                <input id="name" onChange={handleChange} type="text" />
                <input type="submit" value="Save" />
            </form>
            Edit Person
            <form>
                <input type="text" placeholder="New name" onChange={handleChange} />
            </form>
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
