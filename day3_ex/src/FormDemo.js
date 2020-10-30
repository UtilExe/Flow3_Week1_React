import React, {useState} from "react";
const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {
      const target = event.target;
      const value = target.value;
      setName(value);
  }
  function handleSubmit(event) {
      event.preventDefault();
      window.alert(JSON.stringify(name))


  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input id="name" onChange={handleChange} type="text" value={name} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
