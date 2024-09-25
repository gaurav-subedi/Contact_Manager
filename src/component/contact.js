import { useState } from "react";

const Contact = (props) => {
  return (
    <>
      <div className="contact">
        Name = {props.data.name} <br />
        Phone Number = {props.data.number} <br />
        Location = {props.data.location} <br />
      </div>
    </>
  );
};
const ContactForms = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const addData = (e) => {
    e.preventDefault();
    const addedContact = {
      id: Math.random(),
      name: name,
      number: number,
      location: address,
    };
    if (name.length < 1 || number.length < 1 || address.length < 1) {
      alert("Please fill the correct information");
    } else {
      props.addContact(addedContact);
      setName("");
      setNumber("");
      setAddress("");
    }
  };
  return (
    <div className="footer">
      <h4>Contact Form: </h4> <br />
      <form onSubmit={addData}>
        <input
          type="text"
          value={name}
          placeholder="Type Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={number}
          placeholder="Type Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={address}
          placeholder="Type Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></input>
        <br /> <br />
        <button>Click Me!</button>
      </form>
    </div>
  );
};
export { ContactForms, Contact };
