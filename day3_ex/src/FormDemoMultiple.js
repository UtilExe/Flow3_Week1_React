import React, { useState } from "react";
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);
 
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = event => {
      event.preventDefault();
      window.alert(JSON.stringify(reservation, null, 2)); // null and 2 is just for pretty printing for the stringify.
      /* Could also have printed it like 
      alert(
        `First Name: ${reservation.firstName} \n` + 
        `Last Name: ${reservation.lastName}`
        ..... etc
        );*/ 

  }
 
  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
          />
        <br />
        <input
          name="firstName"
          type="text"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="lastName"
          type="text"
          value={reservation.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          name="email"
          type="email"
          value={reservation.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="phone"
          type="number"
          value={reservation.phone}
          onChange={handleChange}
          placeholder="Phone number"
        />
        <input
          name="street"
          type="text"
          value={reservation.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <input
          name="city"
          type="text"
          value={reservation.city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          name="zip"
          type="number"
          value={reservation.zip}
          onChange={handleChange}
          placeholder="Zip Code"
        />
        <input
          name="country"
          type="text"
          value={reservation.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <br/>
        <input onClick={handleSubmit} type="submit" value="Submit"/>
        <p>{JSON.stringify(reservation)}</p>
      </form>
    </div>
  );
}
export default ReservationForm;

/*
Answer the following questions before you continue. In a Controlled Component React state is made the "Single source of truth", so how:
QUESTION 1: Do we ensure that input controls like text, textarea or select always present the value found in the components state?:
Yes. We assign it a unique identifier (name) which matches the input field, and then call a trigger like handleChange which then reads the value and calls a set with the new data(?)

QUESTION 2: Do we ensure that a controls’ state, always matches the value found in an input control?
After performing the event, we want to update the state, yes. But we can't update the current state, so we must assign a new with the former data + new value, and call a setter to change the state.)

Question 3: What is the purpose of doing event.preventDefault() in an event handler?
We want to prevent the page reloading and putting load on the server. In our case, we work with SPA, and we don't want the reload to be handled by the server. This prevents the page from reloading after an event basically.

What would be the effect of NOT doing event.preventDefault in a submit handler
The page would reload, and it would reload from server level.

Why don't we want to submit the traditional way, in a single page application?
Hmm: In most cases we want a JS function to handle the form, and make sure the function has access to the data that the user entered in the form, which is done through controlled compononents.
We typically want to change states, which is typically done through function components, where we call the setter declared in the state.
*/